import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { MACHINES_DATA } from './src/data/machinesData';
import { PARTNER_RULES } from './src/data/partnersData';
import { WORKFLOWS_DATA } from './src/data/workflowsData';

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy GoogleGenAI initialization
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is not configured');
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Fallback helper for Gemini API models to handle 503 high demand or temporary errors
async function generateWithFallback(ai: GoogleGenAI, params: { contents: any; config?: any }) {
  const models = ['gemini-3.6-flash', 'gemini-flash-latest', 'gemini-3.1-flash-lite', 'gemini-3.1-pro-preview'];
  let lastError: any = null;

  for (const model of models) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          ...params,
          model,
        });
        return response;
      } catch (err: any) {
        lastError = err;
        const status = err?.status || (err?.message?.includes('503') ? 503 : null);
        if (status === 503) {
          // Silent quick retry or model switch on 503 high demand spike
          await new Promise((resolve) => setTimeout(resolve, 300 * (attempt + 1)));
          continue;
        }
        console.warn(`[Gemini API] Model ${model} (attempt ${attempt + 1}) fallback:`, err?.message || err);
        await new Promise((resolve) => setTimeout(resolve, 300 * (attempt + 1)));
      }
    }
  }
  throw lastError;
}

// System context prompt with DPD Stancüzem machine specs and partner rules
const SYSTEM_INSTRUCTION = `
Te a DPD Stancüzem (2049 Diósd, Ipar utca 11/A) hivatalos szakmai AI Asszisztense vagy, kifejezetten a Gyártáselőkészítők (GYEK) és gépkezelők munkáját segíted.

A DPD Stancüzem gépparkja és technológiai adatai:
${JSON.stringify(MACHINES_DATA, null, 2)}

Partner-specifikus szabályok (Kiemelten fontos elszámoláskor és gyártáskor!):
${JSON.stringify(PARTNER_RULES, null, 2)}

Munkafolyamat és technológiai útmutatók:
${JSON.stringify(WORKFLOWS_DATA, null, 2)}

Szabályok az válaszadáskor:
1. Mindig szakmai, segítőkész, közvetlen magyar nyelven válaszolj.
2. Ha a felhasználó egy gépre, méretre, sebességre, alapanyagra vagy technológiára kérdez rá, adj pontos műszaki adatokat a fenti adatbázisból.
3. Kiemelten hívd fel a figyelmet a Partner Szabályokra (pl. PrimeRate/ExtraMédia: kitörést csak kérésre; Via Surface: formát ők hoznak, kitörés/vágás 0 Ft; Promitor: kitörést bepipálni munkalapon, de nem elszámolni).
4. Ha a felhasználó gépválasztási tanácsot kér (pl. 2mm szürkelemezhez vagy hullámkartonhoz), ajánld a megfelelő gépet (pl. ML-1040 tégely a 2mm szürkelemezhez; SBG 33x77 papírhoz; EasyMatrix hullámkartonhoz 4mm-ig).
5. Tarts rövid, lényegretörő, jól olvasható formátumot pontokba szedve.
`;

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', company: 'DPD Stancüzem' });
});

app.post('/api/parse-quote-email', async (req, res) => {
  try {
    const { emailText } = req.body;
    if (!emailText || typeof emailText !== 'string') {
      return res.status(400).json({ error: 'Kérjük adjon meg érvényes árajánlat szöveget.' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({
        error:
          'A GEMINI_API_KEY nincs beállítva a környezeti változókban. Kérjük állítsa be az AI Studio Secrets menüben.',
      });
    }

    const ai = getGenAI();
    const prompt = `
Elemzed a következő árajánlat kérést, és nyerj ki minden műszaki, megrendelői és gyártási paramétert a DPD Stancüzem gépparkja, technológiai sorrendje és partner szabályai alapján.

Árajánlat kérés szövege:
"""
${emailText}
"""

Géppark leltár és specifikációk:
${JSON.stringify(MACHINES_DATA, null, 2)}

Partner szabályok:
${JSON.stringify(PARTNER_RULES, null, 2)}

Műveleti opciók azonosítói (ezek közül válassz a paramétereknél):
- Művelet azonosítók (opId): 'foliazas_1oldal', 'foliazas_2oldal', 'bigeles', 'vagas_egyenes', 'kasirozas', 'ragasztas_doboz', 'ragasztas_mappa', 'preg_fém', 'ricceles', 'perforalas', 'lakkozas_spot', 'stanc', 'lakkozas_teljes', 'domboritas'
- Alapanyag azonosítók (materialId): 'szurkelemez_0_5mm', 'szurkelemez_1mm', 'szurkelemez_1_5mm', 'szurkelemez_2mm', 'szurkelemez_2_5mm', 'szurkelemez_3mm', 'folia_laminalt', 'hullamkarton', 'mikrohullam', 'ontapado_etikett', 'karton_standard', 'karton_vastag', 'papir_vekony'
- Partner azonosítók (partnerId): 'primerate-extramedia', 'promitor', 'via-surface', 'standard'

A válaszod kizárólag egy JSON objektum legyen a következő struktúrával:
{
  "summary": "Rövid, 1-2 mondatos szakmai összefoglaló magyarul...",
  "extractedParams": {
    "partnerId": "primerate-extramedia",
    "partnerName": "PrimeRate / ExtraMédia",
    "materialId": "karton_standard",
    "materialName": "Standard Karton GC1 / GC2",
    "opId": "stanc",
    "opName": "Stancolás / Formakivágás",
    "quantity": 5000,
    "width": 700,
    "height": 500,
    "sheetPreset": "custom"
  },
  "workflowSequence": [
    {
      "step": 1,
      "operationName": "Művelet megnevezése (pl. Fóliázás)",
      "machineId": "autobond-mini-tp-74",
      "machineName": "Autobond Mini T/P 74 Fóliázó",
      "building": "zold",
      "buildingLabel": "🟢 Zöld Épület",
      "reasoning": "Miért ezen a gépen és ebben a lépésben fut?",
      "estimatedSetupTimeMinutes": 30,
      "estimatedSpeedPerHour": 2500,
      "estimatedRunningTimeHours": 2.2
    }
  ],
  "totalEstimatedTimeHours": 4.5,
  "clisheDetails": {
    "isClisheRequired": true,
    "status": "meglevo",
    "location": "nalunk",
    "orderState": "nincs_megrendelve",
    "reasoning": "A prégeléshez klisé szükséges. Az e-mail alapján ellenőrizendő, hogy nálunk van-e vagy rendelendő."
  },
  "partnerAlerts": [
    "Partner szabály figyelmeztetés, ha van"
  ],
  "technologicalWarnings": [
    "Technológiai vagy épületközi mozgatási figyelmeztetés"
  ],
  "recommendations": [
    "Szakmai javaslat a GYEK-es számára"
  ]
}
`;

    const response = await generateWithFallback(ai, {
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.1,
      },
    });

    const parsedData = JSON.parse(response.text || '{}');
    res.json(parsedData);
  } catch (error: any) {
    console.error('Email quote parsing error:', error);
    const isUnavailable = error?.message?.includes('503') || error?.message?.includes('UNAVAILABLE') || error?.status === 503;
    res.status(503).json({
      error: isUnavailable
        ? 'Az AI szolgáltatás jelenleg túlterhelt. Kérjük próbáld újra pár másodperc múlva!'
        : error?.message || 'Hiba történt az árajánlat feldolgozása során.',
    });
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Érvénytelen prompt kérés.' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({
        error:
          'A GEMINI_API_KEY nincs beállítva az környezeti változókban. Kérjük állítsa be az AI Studio Secrets menüben.',
      });
    }

    const ai = getGenAI();
    const response = await generateWithFallback(ai, {
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error('Gemini API hiba:', error);
    const isUnavailable = error?.message?.includes('503') || error?.message?.includes('UNAVAILABLE') || error?.status === 503;
    res.status(503).json({
      error: isUnavailable
        ? 'Az AI szolgáltatás jelenleg túlterhelt. Kérjük próbáld újra pár másodperc múlva!'
        : error?.message || 'Hiba történt a válasz generálása során.',
    });
  }
});

// Vite Middleware for Dev or Static Serving for Prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`DPD Stancüzem szerver elindult a 3000-es porton.`);
  });
}

startServer();
