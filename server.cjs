var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");

// src/data/machinesData.ts
var MACHINES_DATA = [
  // --- ZÖLD ÉPÜLET GÉPEK ---
  {
    id: "easymatrix-106-c-cs",
    name: "Heidelberg EasyMatrix 106 C/CS",
    shortName: "EasyMatrix 106 C/CS",
    category: "stanc",
    categoryLabel: "Automata S\xEDk\xE1gyas Stancg\xE9p",
    building: "zold",
    buildingLabel: "Z\xF6ld \xC9p\xFClet",
    manufacturer: "Heidelberg",
    workingSize: "750 \xD7 1060 mm",
    maxSheetSize: "750 \xD7 1060 mm",
    minSheetSize: "360 \xD7 400 mm",
    speed: "7 700 \xEDv/\xF3ra",
    power: "Stancnyom\xE1s: 2,6 MN (~260 tonna)",
    weight: "Ipari nagyg\xE9p (~15-18 tonna)",
    paperGrammage: "Pap\xEDr: min. 90 g/m\xB2 | Karton: max. 2000 g/m\xB2 | Hull\xE1mkarton: max. 4 mm",
    materials: [
      "Pap\xEDr (min. 90 g/m\xB2)",
      "Karton / kas\xEDrozott karton (max. 2000 g/m\xB2)",
      "Hull\xE1mkarton (max. 4 mm vastags\xE1gig)",
      "M\u0171nyom\xF3 pap\xEDr",
      "GC1 / GC2 karton"
    ],
    mainUnits: [
      "Non-stop berak\xF3 (v\xE1kuumos adagol\xF3)",
      "Regiszter rendszer (front- \xE9s oldalfektet\u0151k)",
      "Stanc\xE1llom\xE1s (pr\xE9s 260t nyom\xE1ssal + stancforma)",
      "Kit\xF6r\u0151 \xE1llom\xE1s (CS verzi\xF3: automatikus hullad\xE9klev\xE1laszt\xE1s)",
      "Non-stop kirak\xF3 (rakat gy\u0171jt\xE9s meg\xE1ll\xE1s n\xE9lk\xFCl)",
      "\xC9rint\u0151k\xE9perny\u0151s HMI vez\xE9rl\u0151pult"
    ],
    advantages: [
      "Kiemelked\u0151 sebess\xE9g: 7700 \xEDv/\xF3ra",
      "Non-stop adagol\xE1s \xE9s kirak\xE1s continuous \xFCzemben",
      "CS v\xE1ltozatn\xE1l teljesen automatikus hullad\xE9kkit\xF6r\xE9s",
      "Prec\xEDzi\xF3s finom stancnyom\xE1s \xE1ll\xEDt\xE1s \xE9s gyorsszor\xEDt\xF3 keretek",
      "Sz\xE9les anyagtartom\xE1ny 90 g/m\xB2-t\u0151l a 4mm-es hull\xE1mkartonig"
    ],
    disadvantages: [
      "Nem rot\xE1ci\xF3s stanc, rendk\xEDv\xFCl vastag hull\xE1mkartonhoz (4mm+) korl\xE1tozott",
      "Magas szersz\xE1moz\xE1si \xE9s be\xE1ll\xEDt\xE1si ig\xE9ny",
      "Szakk\xE9pzett oper\xE1tort ig\xE9nyel"
    ],
    description: "Modern, s\xEDk\xE1gyas (flatbed) automata stanc- \xE9s pr\xE9gel\u0151g\xE9p a Z\xF6ld \xC9p\xFCletben. A C verzi\xF3 stancol\xF3 \xE1llom\xE1ssal rendelkezik, a CS verzi\xF3 stanc- \xE9s be\xE9p\xEDtett kit\xF6r\u0151 \xE1llom\xE1ssal a csomagol\xF3ipari t\xF6megtermel\xE9shez.",
    idealFor: [
      "Hajtogatott kartondobozok gy\xE1rt\xE1sa",
      "\xC9lelmiszer- \xE9s kozmetikai csomagol\xE1s",
      "Dosszi\xE9k, mapp\xE1k, bel\xE9p\u0151jegyek",
      "K\xF6zepes \xE9s nagy sorozat\xFA stancol\xE1s"
    ],
    excelNote: "Z\xF6ld \xC9p\xFClet \u2013 Poz\xEDci\xF3 #1"
  },
  {
    id: "smartfolder-650",
    name: "Smartfolder 650",
    shortName: "Smartfolder 650",
    category: "ragasztas",
    categoryLabel: "Automata Kartondoboz Ragaszt\xF3g\xE9p",
    building: "zold",
    buildingLabel: "Z\xF6ld \xC9p\xFClet",
    manufacturer: "Smartfolder",
    workingSize: "Max sz\xE9less\xE9g: 650 mm",
    maxSheetSize: "650 \xD7 500 mm",
    minSheetSize: "kb. 100 mm hossz",
    speed: "350 \u2013 400 m/perc",
    power: "15 \u2013 18 kW | S\u0171r\xEDtett leveg\u0151: 6 bar",
    weight: "6 \u2013 7 tonna (G\xE9p hossza: 12\u201313 m)",
    paperGrammage: "Karton: 200 \u2013 800 g/m\xB2 | Mikrohull\xE1m: E, F, N hull\xE1m (max. 10\u201312 mm vastags\xE1g)",
    materials: [
      "Karton (200 \u2013 800 g/m\xB2)",
      "Mikrohull\xE1m karton (E, F, N hull\xE1m)",
      "Max dobozvastags\xE1g: 10\u201312 mm",
      "Lakkozott / f\xF3li\xE1zott kartonf\xFClek (hidegragaszt\xF3val)"
    ],
    mainUnits: [
      "1. Adagol\xF3 egys\xE9g (t\xF6bb sz\xEDjas, rezg\u0151 adagol\xE1s, \xE1ll\xEDthat\xF3 oldalvezet\xE9s)",
      "2. El\u0151hajt\xF3 (Prefolding) szekci\xF3",
      "3. Ragaszt\xF3 egys\xE9g (ragaszt\xF3tart\xE1ly, ragaszt\xF3ker\xE9k, hidegragaszt\xF3)",
      "4. Hajtogat\xF3 szekci\xF3 (sz\xEDjhajt\xE1sos oldalfal hajt\xE1s)",
      "5. Pr\xE9sel\u0151 / sz\xE1ll\xEDt\xF3 szekci\xF3 (Trombone \xE1ll\xEDthat\xF3 szalagp\xE1lya)",
      "6. XP3101C HMI \xE9rint\u0151k\xE9perny\u0151s PLC vez\xE9rl\xE9s"
    ],
    advantages: [
      "Rendk\xEDv\xFCl nagy gy\xE1rt\xE1si sebess\xE9g (ak\xE1r 400 m/perc)",
      "Sokf\xE9le dobozt\xEDpus: 1 pont, 3 pont, crash-lock (automata fen\xE9k), dupla fal\xFA",
      "Stabil ipari kivitel \xE9s automatiz\xE1lt be\xE1ll\xEDt\xE1sok",
      "HMI \xE9rint\u0151k\xE9perny\u0151s men\xFC (Carrier, Backfold, Machine setting)"
    ],
    disadvantages: [
      "Nagy helyig\xE9ny (12\u201313 m\xE9teres g\xE9phossz)",
      "\xD6sszetett dobozokn\xE1l hosszabb \xE1tszersz\xE1moz\xE1si id\u0151",
      "Gyakorlott g\xE9pkezel\u0151t ig\xE9nyel"
    ],
    belts: [
      {
        name: "Adagol\xF3 (Feeder) sz\xEDjak",
        role: "Stancolt \xEDvek tov\xE1bb\xEDt\xE1sa a g\xE9pbe (leggyakrabban cser\xE9lt sz\xEDj)",
        count: "6 db",
        width: "30 mm",
        thickness: "kb. 4\u20135 mm",
        length: "kb. 2000\u20132300 mm",
        material: "Nagy tapad\xE1s\xFA gum\xEDrozott sz\xE1ll\xEDt\xF3sz\xEDj"
      },
      {
        name: "Oldalvezet\u0151 (Side register) sz\xEDjak",
        role: "\xCDvek pontos oldalra igaz\xEDt\xE1sa",
        count: "2\u20134 db",
        width: "25\u201330 mm",
        length: "kb. 1500\u20131800 mm"
      },
      {
        name: "Hajtogat\xF3 szekci\xF3 sz\xEDjak",
        role: "Doboz oldalfalak hajt\xE1sa \xE9s tov\xE1bb\xEDt\xE1sa",
        count: "6\u201310 db",
        width: "25\u201335 mm",
        length: "kb. 2500\u20133500 mm"
      },
      {
        name: "Trombone (pr\xE9sel\u0151) sz\xEDjak",
        role: "Ragaszt\xE1s megszil\xE1rdul\xE1s\xE1ig nyom\xE1s alatt tartj\xE1k a dobozt",
        count: "2\u20134 db",
        width: "40\u201350 mm",
        length: "kb. 4000\u20136000 mm"
      },
      {
        name: "Kihord\xF3 / sz\xE1ll\xEDt\xF3 sz\xEDjak",
        role: "K\xE9sz dobozok kivezet\xE9se a rakatra",
        count: "2\u20133 db",
        width: "50\u201360 mm",
        length: "kb. 3000\u20134500 mm"
      }
    ],
    description: "Nagy sebess\xE9g\u0171 automata kartondoboz hajtogat\xF3-ragaszt\xF3 g\xE9p a Z\xF6ld \xC9p\xFCletben gy\xF3gyszeripari, kozmetikai \xE9s \xE9lelmiszeripari csomagol\xF3anyagok gy\xE1rt\xE1s\xE1hoz.",
    idealFor: [
      "Egyenes ragaszt\xE1s\xFA dobozok",
      "Automata fenek\u0171 (crash-lock) dobozok",
      "Dupla fal\xFA \xE9s 1-3 pontos hajt\xE1s\xFA dobozok",
      "K\xF6zepes \xE9s nagy sorozat\xFA csomagol\xF3anyag gy\xE1rt\xE1s"
    ],
    excelNote: "Z\xF6ld \xC9p\xFClet \u2013 Poz\xEDci\xF3 #2"
  },
  {
    id: "jimbao-jb-1020",
    name: "Jimbao JB-1020 UV Szita",
    shortName: "Jimbao JB-1020 UV Szita",
    category: "lakkozas",
    categoryLabel: "Automata Szita UV Lakkoz\xF3",
    building: "zold",
    buildingLabel: "Z\xF6ld \xC9p\xFClet",
    manufacturer: "Jinbao Machinery",
    workingSize: "1020 \xD7 720 mm (B1 form\xE1tum)",
    maxSheetSize: "1020 \xD7 720 mm",
    minSheetSize: "560 \xD7 350 mm",
    speed: "1 000 \u2013 3 000 \xEDv/\xF3ra",
    power: "3 f\xE1zis, 380 V / 14.6 kW",
    weight: "5 000 \u2013 5 500 kg",
    paperGrammage: "Pap\xEDr & Karton: 120 \u2013 400 g/m\xB2 | M\u0171anyag f\xF3li\xE1k",
    materials: [
      "M\u0171nyom\xF3 pap\xEDr (120-400 g/m\xB2)",
      "Csomagol\xF3 karton",
      "PVC, PET f\xF3lia, PP",
      "Elektronikai & dekor\xE1ci\xF3s f\xF3li\xE1k"
    ],
    mainUnits: [
      "Automata \xEDvadagol\xF3",
      "Stop-cilinderes szita nyom\xF3egys\xE9g",
      "Nagy m\xE9ret\u0171 szitakeret (1140 \xD7 1280 mm)",
      "Rakli / rakelszer\u0171 lakkoz\xF3 fej",
      "Nagy teljes\xEDtm\xE9ny\u0171 UV sz\xE1r\xEDt\xF3 alag\xFAt",
      "Kirak\xF3 egys\xE9g (stacker)"
    ],
    advantages: [
      "B1 form\xE1tum\xFA nagy munkater\xFClet (1020\xD7720 mm)",
      "Vastag, magas f\xE9ny\u0171 vagy dombor UV lakkr\xE9teg felvitele",
      "Prec\xEDz regiszterpontoss\xE1g a stop-cilinder technol\xF3gi\xE1nak k\xF6sz\xF6nhet\u0151en",
      "Spot (r\xE9szleges) \xE9s teljes fel\xFClet\u0171 lakkoz\xE1s egyar\xE1nt"
    ],
    disadvantages: [
      "UV sz\xE1r\xEDt\xF3 l\xE1mp\xE1k h\u0151terhel\xE9se \xE9s szagkezel\xE9se",
      "Szitak\xE9sz\xEDt\xE9st \xE9s prec\xEDz szitafesz\xEDt\xE9st ig\xE9nyel"
    ],
    description: "Automata stop-cilinderes s\xEDk\xE1gyas szitanyom\xF3 \xE9s UV lakkoz\xF3 g\xE9p a Z\xF6ld \xC9p\xFCletben d\xEDszdobozok, csomagol\xF3anyagok \xE9s rekl\xE1mkiadv\xE1nyok fel\xFCletnemes\xEDt\xE9s\xE9re.",
    idealFor: [
      "Spot UV (r\xE9szleges) lakkoz\xE1s",
      "Teljes fel\xFClet\u0171 magasf\xE9ny\u0171 UV lakkoz\xE1s",
      "Dombor UV lakk hat\xE1sok csomagol\xE1sokon",
      "Exkluz\xEDv d\xEDszdobozok \xE9s c\xEDmk\xE9k nemes\xEDt\xE9se"
    ],
    excelNote: "Z\xF6ld \xC9p\xFClet \u2013 Poz\xEDci\xF3 #3"
  },
  {
    id: "autobond-mini-tp-74",
    name: "Autobond Mini T/P 74 F\xF3li\xE1z\xF3",
    shortName: "Autobond Mini T/P 74",
    category: "foliazas",
    categoryLabel: "K\xE9toldalas Meleglamin\xE1l\xF3 G\xE9p",
    building: "zold",
    buildingLabel: "Z\xF6ld \xC9p\xFClet",
    manufacturer: "Autobond",
    workingSize: "Max \xEDvsz\xE9less\xE9g: 740 mm",
    maxSheetSize: "740 \xD7 1060 mm",
    minSheetSize: "320 \xD7 225 mm",
    speed: "45 \u2013 60 m/perc (ak\xE1r 5 000 \xEDv/\xF3ra)",
    power: "V\xEDzzel f\u0171t\xF6tt kr\xF3mhenger (max 135 \xB0C) | 6 t pneumatikus nyom\xE1s",
    paperGrammage: "115 \u2013 650 g/m\xB2",
    materials: [
      "Pap\xEDr \xE9s karton (115 \u2013 650 g/m\xB2)",
      "OPP f\xF3lia (f\xE9nyes, matt, soft-touch)",
      "PET f\xF3lia (20\u201340 mikron)"
    ],
    mainUnits: [
      "Heidelberg-Stahl sz\xEDv\xF3dobos folyamatos non-stop feeder",
      "V\xEDzzel f\u0171t\xF6tt kr\xF3mozott lamin\xE1l\xF3 henger (max. 135 \xB0C)",
      "Perfector (P) egys\xE9g \u2013 m\xE1sodik f\u0171t\xF6tt henger k\xE9toldalas f\xF3li\xE1z\xE1shoz 1 menetben",
      "Sz\xE9tv\xE1laszt\xF3 (Burst separator / l\xF6k\u0151g\xF6rg\u0151s lev\xE1laszt\xF3)",
      "Anti-curl (g\xF6rb\xFCletg\xE1tl\xF3) r\xFAd",
      "Vibr\xE1ci\xF3s kirak\xF3asztal"
    ],
    advantages: [
      "Perfector opci\xF3: egy menetben lamin\xE1l fel\xFCl \xE9s alul is!",
      "Nagy sebess\xE9g (45-60 m/perc)",
      "V\xEDzzel f\u0171t\xF6tt henger garant\xE1lja a stabil h\u0151m\xE9rs\xE9kletet",
      "Anti-curl r\xFAd megel\u0151zi az \xEDvek felp\xF6nd\xF6r\xF6d\xE9s\xE9t"
    ],
    disadvantages: [
      "V\xE9kony 115 g/m\xB2 alatti pap\xEDrokn\xE1l \xF3vatoss\xE1got ig\xE9nyel",
      "Kompresszoros pneumatika f\xFCggetlen l\xE9gell\xE1t\xE1st ig\xE9nyel"
    ],
    description: "Ipari \xEDves meleglamin\xE1l\xF3 (thermal laminator) g\xE9p a Z\xF6ld \xC9p\xFCletben egy- vagy k\xE9toldalas f\xF3li\xE1z\xE1shoz. K\xF6nyvbor\xEDt\xF3k, prospektusok \xE9s dobozbor\xEDt\xF3k v\xE9d\u0151f\xF3li\xE1z\xE1s\xE1ra.",
    idealFor: [
      "K\xE9toldalas f\xF3li\xE1z\xE1s egy menetben (Perfector)",
      "Matt, f\xE9nyes \xE9s Soft-Touch f\xF3li\xE1z\xE1s",
      "K\xF6nyvbor\xEDt\xF3k, n\xE9vjegyek, dosszi\xE9k"
    ],
    excelNote: "Z\xF6ld \xC9p\xFClet \u2013 Poz\xEDci\xF3 #4"
  },
  {
    id: "autobond-105",
    name: "Autobond 105 Lamin\xE1l\xF3 G\xE9p",
    shortName: "Autobond 105",
    category: "foliazas",
    categoryLabel: "Ipari B1 Meleglamin\xE1l\xF3 G\xE9p",
    building: "zold",
    buildingLabel: "Z\xF6ld \xC9p\xFClet",
    manufacturer: "Autobond",
    workingSize: "1050 \xD7 760 mm (B1 form\xE1tum)",
    maxSheetSize: "1050 \xD7 760 mm",
    minSheetSize: "297 \xD7 210 mm",
    speed: "60 \u2013 120 m/perc (ak\xE1r 10 000 \xEDv/\xF3ra)",
    power: "60 \u2013 140 \xB0C | 6 tonna z\xE1r\xF3nyom\xE1s",
    paperGrammage: "90 \u2013 650 g/m\xB2",
    materials: [
      "Pap\xEDr \xE9s karton (90 \u2013 650 g/m\xB2)",
      "OPP f\xF3lia (matt, f\xE9nyes, karc\xE1ll\xF3, soft-touch)",
      "PET & Nylon f\xF3li\xE1k (20\u2013250 mikron)"
    ],
    mainUnits: [
      "V\xE1kuumos magasrakat adagol\xF3 (Heidelberg Speedmaster t\xEDpus)",
      "F\u0171t\xF6tt kr\xF3mozott lamin\xE1l\xF3 hengerp\xE1r (60-140 \xB0C)",
      "Pneumatikus f\xF3liafesz\xEDt\u0151 \xE9s lecs\xE9v\xE9l\u0151 rendszer",
      "H\u0171t\u0151hengerek & Antisztatikus egys\xE9g",
      "Automata \xEDvkirak\xF3 (stacker)"
    ],
    advantages: [
      "Rendk\xEDv\xFCli sebess\xE9g: ak\xE1r 120 m/perc \xE9s 10.000 \xEDv/\xF3ra",
      "B1 m\xE9ret\u0171 nagy \xEDvek folyamatos t\xF6meggy\xE1rt\xE1sa",
      "Szinte minden f\xF3liat\xEDpussal kompatibilis (karcol\xE1smentes, soft-touch)",
      "Magasrakat adagol\xF3 a maxim\xE1lis termel\xE9kenys\xE9g\xE9rt"
    ],
    disadvantages: [
      "Nagy helyig\xE9ny az \xFCzemben",
      "Hosszabb bemeleged\xE9si id\u0151 indul\xE1skor"
    ],
    description: "Professzion\xE1lis B1-es \xEDves h\u0151lamin\xE1l\xF3 g\xE9p a Z\xF6ld \xC9p\xFCletben nagy p\xE9ld\xE1nysz\xE1m\xFA csomagol\xF3ipari \xE9s nyomdai fel\xFCletkezel\xE9shez.",
    idealFor: [
      "Nagy sz\xE9ri\xE1s B1 kartondoboz bor\xEDt\xF3k",
      "Magazin- \xE9s katal\xF3gusbor\xEDt\xF3k f\xF3li\xE1z\xE1sa",
      "Karc\xE1ll\xF3 \xE9s soft-touch pr\xE9mium f\xF3li\xE1z\xE1s"
    ],
    excelNote: "Z\xF6ld \xC9p\xFClet \u2013 Poz\xEDci\xF3 #5"
  },
  {
    id: "petretto-ragaszto",
    name: "PETRATTO Ragaszt\xF3g\xE9p",
    shortName: "Petretto Ragaszt\xF3",
    category: "ragasztas",
    categoryLabel: "Modul\xE1ris Mappa- & Dobozragaszt\xF3",
    building: "zold",
    buildingLabel: "Z\xF6ld \xC9p\xFClet",
    manufacturer: "Petretto (Olaszorsz\xE1g)",
    workingSize: "100 \xD7 150 mm \u2013 500 \xD7 700 mm",
    maxSheetSize: "500 \xD7 700 mm",
    minSheetSize: "100 \xD7 150 mm",
    speed: "3 000 \u2013 10 000 \xEDv/\xF3ra",
    power: "400V / 2\u20136 kW | Hidegragaszt\xF3 (PVAc) / Hotmelt",
    paperGrammage: "Pap\xEDr: 80\u2013400 g/m\xB2 | Karton: ak\xE1r 600\u2013800 g/m\xB2",
    materials: [
      "M\u0171nyom\xF3 \xE9s ofszet pap\xEDr",
      "Karton (GC1, GC2, kraft)",
      "Lamin\xE1lt / f\xF3li\xE1zott \xEDvek",
      "Lakkozott fel\xFCletek"
    ],
    mainUnits: [
      "V\xE1kuumos vagy s\xFArl\xF3d\xE1sos \xEDvbead\xF3 adagol\xF3",
      "Sz\xEDjas sz\xE1ll\xEDt\xF3rendszer oldal- \xE9s hosszir\xE1ny\xFA regiszterrel",
      "T\xE1rcs\xE1s & f\xFAv\xF3k\xE1s ragaszt\xF3felhord\xF3 (PVAc / Hotmelt)",
      "Hajtogat\xF3 & peremhajt\xF3 modulok",
      "Pr\xE9sel\u0151 \xE9s kivezet\u0151 szekci\xF3"
    ],
    advantages: [
      "Rendk\xEDv\xFCl prec\xEDz ragaszt\xE1si pontoss\xE1g (\xB10,5 mm)",
      "Ideal gumis mapp\xE1k, irattart\xF3 dosszi\xE9k \xE9s flexi bor\xEDt\xF3k ragaszt\xE1s\xE1hoz",
      "Kompakt, kis helyig\xE9ny\u0171 modul\xE1ris olasz berendez\xE9s",
      "Gyors \xE1t\xE1ll\xE1s kis \xE9s k\xF6zepes sz\xE9ri\xE1kn\xE1l"
    ],
    disadvantages: [
      "Lakkozott fel\xFCletekn\xE9l gondos ragaszt\xF3v\xE1laszt\xE1st ig\xE9nyel",
      "Finom g\xE9pbe\xE1ll\xEDt\xE1s sz\xFCks\xE9ges a pontos hajt\xE1shoz"
    ],
    description: "Sokoldal\xFA olasz ragaszt\xF3g\xE9p a Z\xF6ld \xC9p\xFCletben kifejezetten gumis mapp\xE1k, irattart\xF3 dosszi\xE9k, gy\u0171r\u0171s mapp\xE1k \xE9s egyedi kartondobozok ut\xF3feldolgoz\xE1s\xE1ra.",
    idealFor: [
      "Gumis mapp\xE1k \xE9s irattart\xF3 dosszi\xE9k",
      "Gy\u0171r\u0171s mappa bor\xEDt\xF3k \xE9s flexi t\xE1bl\xE1k",
      "Karton dobozok \xE9s rekl\xE1manyagok ragaszt\xE1sa"
    ],
    excelNote: "Z\xF6ld \xC9p\xFClet \u2013 Poz\xEDci\xF3 #6"
  },
  {
    id: "heidelberg-original-56x82-stanc",
    name: "Original Heidelberg Cylinder (56\xD782 cm) Stanc",
    shortName: "Heidelberg 56\xD782 Stanc",
    category: "stanc",
    categoryLabel: "Nagyform\xE1tum\xFA Hengeres Stancg\xE9p",
    building: "zold",
    buildingLabel: "Z\xF6ld \xC9p\xFClet",
    manufacturer: "Heidelberger Druckmaschinen AG",
    workingSize: '560 \xD7 820 mm (22" \xD7 32\xBD")',
    maxSheetSize: "560 \xD7 820 mm",
    minSheetSize: "210 \xD7 300 mm",
    speed: "2 000 \u2013 3 500 \xEDv/\xF3ra",
    weight: "5 000 \u2013 7 000 kg",
    paperGrammage: "Pap\xEDr: 80\u2013400 g/m\xB2 | Karton: max. 2\u20133 mm",
    materials: [
      "Pap\xEDr \xE9s vastag karton (max 2-3 mm)",
      "Lamin\xE1lt \xEDvek",
      "M\u0171anyag (v\xE9kony PVC, PP)",
      "Speci\xE1lis csomagol\xF3anyagok"
    ],
    mainUnits: [
      "Manu\xE1lis/f\xE9lautomata feeder tol\xF3 oldalilleszt\xE9kkel",
      "S\xEDk ac\xE9l stancasztal (chase szersz\xE1m r\xF6gz\xEDt\xE9s)",
      "Nagy \xE1tm\xE9r\u0151j\u0171 ac\xE9lhenger",
      "Automatikus l\xE1ncos kihord\xF3",
      'Ikonikus piros vil\xE1g\xEDt\xF3 "Original Heidelberg Cylinder" n\xE9vt\xE1bla'
    ],
    advantages: [
      "Nagyobb 56\xD782 cm-es \xEDvform\xE1tum (t\xF6bb doboz f\xE9r el egy \xEDven)",
      "Hatalmas nyom\xF3er\u0151 vastag kartonokhoz (ak\xE1r 2-3 mm)",
      "Tol\xF3 oldalilleszt\xE9k biztos\xEDtja a stabil pozicion\xE1l\xE1st",
      "Rendk\xEDv\xFCl megb\xEDzhat\xF3 mechanikus tank fel\xE9p\xEDt\xE9s"
    ],
    disadvantages: [
      "Lassabb az modern automata stancokn\xE1l",
      "Hull\xE1mkarton stancol\xE1sa korl\xE1tozott"
    ],
    description: "A klasszikus Heidelberg nagytestv\xE9re 56\xD782 cm form\xE1tummal a Z\xF6ld \xC9p\xFCletben. Kiv\xE1l\xF3 nagy dobozok, mapp\xE1k \xE9s display elemek stancol\xE1s\xE1ra \xE9s b\xEDgel\xE9s\xE9re.",
    idealFor: [
      "Nagy m\xE9ret\u0171 kartondobozok",
      "Display elemek, napt\xE1rak, dosszi\xE9k",
      "Vastag kartonok stancol\xE1sa \xE9s b\xEDgel\xE9se"
    ],
    excelNote: "Z\xF6ld \xC9p\xFClet \u2013 Poz\xEDci\xF3 #7"
  },
  // --- KÉK ÉPÜLET GÉPEK ---
  {
    id: "lamina-1110sa",
    name: "Lamina System 1110SA",
    shortName: "Lamina Kas\xEDroz\xF3",
    category: "kasirozas",
    categoryLabel: "\xCDves Kas\xEDroz\xF3 G\xE9p",
    building: "kek",
    buildingLabel: "K\xE9k \xC9p\xFClet",
    manufacturer: "Lamina System (Sv\xE9dorsz\xE1g)",
    workingSize: "800\xD7800 mm \u2013 1600\xD71600 mm",
    maxSheetSize: "1100 \xD7 1100 mm (vagy ak\xE1r 1600 mm modellt\u0151l f\xFCgg\u0151en)",
    speed: "1 500 \u2013 5 000 \xEDv/\xF3ra",
    power: "400V / 50 Hz | V\xEDzb\xE1zis\xFA hidegragaszt\xF3 / PVA",
    paperGrammage: "Fels\u0151: m\u0171nyom\xF3, karton | Als\xF3: mikrohull\xE1m, sz\xFCrkelemez, habkarton",
    materials: [
      "Fels\u0151 \xEDv: m\u0171nyom\xF3 pap\xEDr, GC1/GC2 karton, kraft, UV lakkozott \xEDvek",
      "Als\xF3 hordoz\xF3: mikrohull\xE1m, EB hull\xE1mkarton, sz\xFCrkelemez, habkarton, duplex"
    ],
    mainUnits: [
      "Als\xF3 \xEDv v\xE1kuumos/sz\xEDjas adagol\xF3",
      "Ragaszt\xF3henger p\xE1r (v\xEDzb\xE1zis\xFA hidegragaszt\xF3 egyenletes ter\xEDt\xE9se)",
      "Fels\u0151 \xEDv fotocell\xE1s / mechanikus pozicion\xE1l\xF3 regiszter (\xB10,2 mm pontoss\xE1g)",
      "Pr\xE9sel\u0151 egys\xE9g & Pressure Belt (nyom\xF3szalag a bubor\xE9kmentes k\xF6t\xE9s\xE9rt)"
    ],
    advantages: [
      "Kiv\xE1l\xF3 regiszterpontoss\xE1g (ak\xE1r \xB10,2 mm)",
      "Szersz\xE1m n\xE9lk\xFCli, gyors \xE1t\xE1ll\xE1si id\u0151",
      "Pressure Belt (nyom\xF3szalag) biztos\xEDtja a t\xF6k\xE9letesen s\xEDk, bubor\xE9kmentes term\xE9ket",
      "Egykezel\u0151s m\u0171k\xF6dtet\xE9si lehet\u0151s\xE9g"
    ],
    disadvantages: [
      "\xC9rz\xE9keny a ragaszt\xF3viszkozit\xE1sra \xE9s a p\xE1ratartalomra",
      "Helytelen be\xE1ll\xEDt\xE1sn\xE1l hull\xE1mosod\xE1s/vetemed\xE9s fordulhat el\u0151",
      "Magas tiszt\xEDt\xE1si ig\xE9ny a ragaszt\xF3hengerekn\xE9l"
    ],
    description: "Pr\xE9mium sv\xE9d \xEDves kas\xEDroz\xF3g\xE9p a K\xE9k \xC9p\xFCletben, amely nyomtatott fels\u0151 pap\xEDr/karton \xEDveket ragaszt nagy pontoss\xE1ggal hull\xE1mkartonra vagy sz\xFCrkelemezre.",
    idealFor: [
      "Luxus csomagol\xE1sok & display elemek",
      "POS anyagok, rekl\xE1mt\xE1bl\xE1k, k\xF6nyvbor\xEDt\xF3k",
      "Puzzle alapok, kem\xE9nyt\xE1bl\xE1s dosszi\xE9k, pr\xE9mium mapp\xE1k"
    ],
    excelNote: "K\xE9k \xC9p\xFClet \u2013 Kas\xEDroz\xF3"
  },
  {
    id: "heidelberg-sbb-preg",
    name: "Heidelberg SBB Cylinder (56\xD777 cm) Pr\xE9gel\u0151 #1",
    shortName: "Heidelberg SBB Pr\xE9gel\u0151 #1",
    category: "preg",
    categoryLabel: "Hengeres Pr\xE9gel\u0151- \xE9s Stancol\xF3g\xE9p",
    building: "kek",
    buildingLabel: "K\xE9k \xC9p\xFClet",
    manufacturer: "Heidelberger Druckmaschinen AG",
    workingSize: "56 \xD7 77 cm",
    maxSheetSize: "560 \xD7 770 mm (Pr\xE9gfel\xFClet: ~550 \xD7 760 mm)",
    minSheetSize: "210 \xD7 280 mm",
    speed: "1 200 \u2013 3 000 \xEDv/\xF3ra",
    weight: "3 500 \u2013 4 000 kg",
    paperGrammage: "80 \u2013 800 g/m\xB2 pap\xEDr, karton, hull\xE1mkarton, m\u0171anyag lapok",
    materials: [
      "M\u0171nyom\xF3 & kreat\xEDv pap\xEDrok (80-800 g/m\xB2)",
      "Karton & hull\xE1mkarton",
      "M\u0171anyag lapok",
      "Pr\xE9gel\u0151f\xF3li\xE1k (Lemmaco, Kurtz)"
    ],
    mainUnits: [
      "Automatikus \xEDvadagol\xF3 (csipeszes / v\xE1kuumos)",
      "Beh\xFAz\xF3 \xE9s regiszter rendszer (gripperek)",
      "Nagy nyom\xF3erej\u0171 ac\xE9lhenger",
      "F\u0171thet\u0151 pr\xE9gel\u0151asztal klis\xE9r\xF6gz\xEDt\xE9ssel",
      "F\xF3liael\u0151tol\xF3 \xE9s visszacs\xE9v\xE9l\u0151 rendszer",
      "Kirak\xF3 m\u0171"
    ],
    advantages: [
      "Hengeres pr\xE9sel\xE9s miatti \xF3ri\xE1si egyenletes nyom\xF3er\u0151",
      "Alkalmas meleg f\xF3liapr\xE9gel\xE9sre (Kurtz/Lemmaco) \xE9s vakdombor\xEDt\xE1sra is",
      "Elny\u0171hetetlen robusztus \xF6nt\xF6ttvas v\xE1z",
      "Stancol\xE1sra, b\xEDgel\xE9sre \xE9s perfor\xE1l\xE1sra is kiv\xE1l\xF3"
    ],
    disadvantages: [
      "Nagy g\xE9pt\xF6meg \xE9s helyig\xE9ny",
      "Rendszeres olajoz\xE1st \xE9s bemeleg\xEDt\xE9st ig\xE9nyel"
    ],
    suppliers: ["Lemmaco", "Kurtz (Pr\xE9gf\xF3lia besz\xE1ll\xEDt\xF3k)"],
    description: "Ikonikus hengeres pr\xE9gel\u0151-, dombor\xEDt\xF3- \xE9s stancol\xF3g\xE9p a K\xE9k \xC9p\xFCletben (1. Pr\xE9gg\xE9p). H\u0151vel \xE9s nagy nyom\xE1ssal viszi fel az arany, ez\xFCst vagy sz\xEDnes f\xF3li\xE1kat a pap\xEDrra.",
    idealFor: [
      "Arany- \xE9s ez\xFCst f\xF3liapr\xE9gel\xE9s",
      "Vak- \xE9s domborpr\xE9gel\xE9s (d\xEDszdobozok, n\xE9vjegyek)",
      "Mapp\xE1k, k\xF6nyvbor\xEDt\xF3k stancol\xE1sa \xE9s b\xEDgel\xE9se"
    ],
    excelNote: "K\xE9k \xC9p\xFClet \u2013 Pr\xE9gg\xE9p #1"
  },
  {
    id: "heidelberg-original-56x82-preg",
    name: "Heidelberg Original Cylinder (56\xD782 cm) Pr\xE9gel\u0151 #2",
    shortName: "Heidelberg 56\xD782 Pr\xE9gel\u0151 #2",
    category: "preg",
    categoryLabel: "Nagyform\xE1tum\xFA Hengeres Pr\xE9gel\u0151",
    building: "kek",
    buildingLabel: "K\xE9k \xC9p\xFClet",
    manufacturer: "Heidelberger Druckmaschinen AG",
    workingSize: "560 \xD7 820 mm",
    maxSheetSize: "560 \xD7 820 mm",
    speed: "2 500 \u2013 4 500 \xEDv/\xF3ra",
    weight: "kb. 5 000 kg",
    paperGrammage: "Pap\xEDr, karton, kas\xEDrozott \xEDvek, PVC, m\u0171b\u0151r",
    materials: [
      "M\u0171nyom\xF3 \xE9s kreat\xEDv pap\xEDr",
      "Karton & kas\xEDrozott \xEDvek",
      "PVC & m\u0171b\u0151r",
      "Arany, ez\xFCst, hologramos \xE9s sz\xEDnes f\xF3li\xE1k"
    ],
    mainUnits: [
      "Automata berak\xF3m\u0171 \xE9s tol\xF3 oldalilleszt\xE9k",
      "F\u0171thet\u0151 pr\xE9gel\u0151asztal (90 \u2013 150 \xB0C szab\xE1lyz\xE1s)",
      "Klis\xE9r\xF6gz\xEDt\u0151 \xE9s f\xF3liatov\xE1bb\xEDt\xF3 rendszer",
      "Henger csipeszekkel",
      "K\xF6zponti hajt\xE1s & olajoz\xF3 rendszer"
    ],
    advantages: [
      "Nagyobb 56\xD782 cm-es \xEDvm\xE9ret (t\xF6bb darab f\xE9r el egy \xEDven)",
      "90-150 \xB0C k\xF6z\xF6tti pontos h\u0151szab\xE1lyoz\xE1s magn\xE9zium/s\xE1rgar\xE9z klis\xE9khez",
      "T\xF6k\xE9letes f\xF3lia\xE1tad\xE1s \xE9s lev\xE1laszt\xE1s"
    ],
    disadvantages: [
      "F\u0171t\xF6tt klis\xE9k \xE9g\xE9si s\xE9r\xFCl\xE9svesz\xE9lye (v\xE9d\u0151keszty\u0171 k\xF6telez\u0151)",
      "Neh\xE9z \xF6nt\xF6ttvas v\xE1z, k\xE9zi f\xF3liabef\u0171z\xE9si rutin kell"
    ],
    description: "Pr\xE9mium meleg f\xF3liapr\xE9gel\u0151 g\xE9p a K\xE9k \xC9p\xFCletben (2. Pr\xE9gg\xE9p) exkluz\xEDv napt\xE1rak, d\xEDszdobozok, oklevelek \xE9s k\xF6nyvbor\xEDt\xF3k f\xF3li\xE1z\xE1s\xE1ra \xE9s dombor\xEDt\xE1s\xE1ra.",
    idealFor: [
      "Hologramos \xE9s f\xE9mes f\xF3liapr\xE9gel\xE9s",
      "K\xF6nyvbor\xEDt\xF3k \xE9s mappa el\u0151lapok d\xEDsz\xEDt\xE9se",
      "D\xEDszdobozok \xE9s oklevelek exkluz\xEDv nemes\xEDt\xE9se"
    ],
    excelNote: "K\xE9k \xC9p\xFClet \u2013 Pr\xE9gg\xE9p #2"
  },
  {
    id: "ml-1040",
    name: "ML-1040 T\xE9gelysajt\xF3 #1",
    shortName: "ML-1040 K\xE9zit\xE9gely #1",
    category: "stanc",
    categoryLabel: "S\xEDk\xE1gyas K\xE9zit\xE9gely & B\xEDgel\u0151",
    building: "kek",
    buildingLabel: "K\xE9k \xC9p\xFClet",
    manufacturer: "Zhejiang Wenzhou Yuandong (2011)",
    workingSize: "1040 \xD7 720 mm",
    maxSheetSize: "1040 \xD7 720 mm",
    speed: "20 \u2013 23 \xFCt\xE9s/perc",
    power: "4 kW (Mechanikus meghajt\xE1s, elektrom\xE1gneses kuplung)",
    weight: "kb. 3 500 \u2013 5 000 kg",
    paperGrammage: "Pap\xEDr, GC1/GC2 karton, hull\xE1mkarton, 2 mm sz\xFCrkelemez, PVC, m\u0171anyag",
    materials: [
      "M\u0171nyom\xF3 pap\xEDr",
      "GC1 / GC2 karton",
      "Hull\xE1mkarton & mikrohull\xE1m",
      "2 mm sz\xFCrke lemez",
      "PVC, m\u0171anyag lap, b\u0151r, parafa, gumi, habanyag"
    ],
    mainUnits: [
      "\xD6nt\xF6ttvas szuper-massz\xEDv g\xE9ptest",
      "Nagy tehetetlens\xE9g\u0171 lendker\xE9k (egyenletes \xFCt\u0151er\u0151)",
      "Elektrom\xE1gneses kuplung (biztons\xE1gos ind\xEDt\xE1s/meg\xE1ll\xE1s)",
      "Helik\xE1lis (ferdefogaz\xE1s\xFA) csendes fogaskerekek",
      'K\xF6zponti ken\u0151rendszer ("Oiling before running")'
    ],
    advantages: [
      "Kiv\xE1l\xF3 nyom\xF3er\u0151 vastag 2mm-es sz\xFCrkelemezhez \xE9s m\u0171anyagokhoz is",
      "Rendk\xEDv\xFCl olcs\xF3 szersz\xE1mk\xF6lts\xE9g \xE9s egyszer\u0171 jav\xEDthat\xF3s\xE1g",
      "Kis \xE9s k\xF6zepes sz\xE9ri\xE1khoz, mintadarabokhoz t\xF6k\xE9letes",
      "Sokoldal\xFA anyagmegmunk\xE1l\xE1s (stanc, b\xEDgel\xE9s, perfor\xE1l\xE1s, ritzel\xE9s)"
    ],
    disadvantages: [
      "K\xE9zi \xEDvadagol\xE1s miatti lassabb m\u0171k\xF6d\xE9s (20-23 \xFCt\xE9s/perc)",
      "Fokozott balesetvesz\xE9ly \u2013 k\xE9tkezes ind\xEDt\xE1s \xE9s szigor\xFA rutin k\xF6telez\u0151",
      "Fizikailag f\xE1raszt\xF3 k\xE9zi munka"
    ],
    maintenanceDaily: [
      "Napi olajoz\xE1s a k\xF6zponti ken\u0151rendszeren \xE1t indul\xE1s el\u0151tt!",
      "Stancasztal \xE9s csap\xE1gyak tiszt\xEDt\xE1sa"
    ],
    description: "S\xEDk-s\xEDk nyom\xE1selv\u0171 (platen press) k\xE9zi adagol\xE1s\xFA t\xE9gelysajt\xF3 a K\xE9k \xC9p\xFCletben (1. K\xE9zit\xE9gely). Hatalmas nyom\xF3ereje miatt kiv\xE1l\xF3 karton, 2mm sz\xFCrkelemez, mikrohull\xE1m \xE9s m\u0171anyag lapok kiv\xE1g\xE1s\xE1ra.",
    idealFor: [
      "Gy\xF3gyszeres, kozmetikai \xE9s italos dobozok",
      "Display-ek, woblerek, f\xFCgg\u0151k, mapp\xE1k",
      "Gumis mappa, dosszi\xE9k stancol\xE1sa \xE9s b\xEDgel\xE9se",
      "Egyedi mintak\xE9sz\xEDt\xE9s \xE9s kis sz\xE9ri\xE1s munk\xE1k"
    ],
    excelNote: "K\xE9k \xC9p\xFClet \u2013 K\xE9zit\xE9gely #1"
  },
  {
    id: "ml-1040-2",
    name: "ML-1040 T\xE9gelysajt\xF3 #2",
    shortName: "ML-1040 K\xE9zit\xE9gely #2",
    category: "stanc",
    categoryLabel: "S\xEDk\xE1gyas K\xE9zit\xE9gely & B\xEDgel\u0151",
    building: "kek",
    buildingLabel: "K\xE9k \xC9p\xFClet",
    manufacturer: "Zhejiang Wenzhou Yuandong",
    workingSize: "1040 \xD7 720 mm",
    maxSheetSize: "1040 \xD7 720 mm",
    speed: "20 \u2013 23 \xFCt\xE9s/perc",
    power: "4 kW (Mechanikus meghajt\xE1s, elektrom\xE1gneses kuplung)",
    weight: "kb. 3 800 kg",
    paperGrammage: "Pap\xEDr, GC1/GC2 karton, hull\xE1mkarton, 2 mm sz\xFCrkelemez",
    materials: [
      "M\u0171nyom\xF3 pap\xEDr",
      "GC1 / GC2 karton",
      "Hull\xE1mkarton & mikrohull\xE1m",
      "2 mm sz\xFCrke lemez",
      "M\u0171anyag lap, b\u0151rut\xE1nzat, gumi"
    ],
    mainUnits: [
      "\xD6nt\xF6ttvas g\xE9ptest",
      "Elektrom\xE1gneses kuplunk \xE9s f\xE9k",
      "K\xE9tkezes biztons\xE1gi ind\xEDt\xE1s",
      "\xC1ll\xEDthat\xF3 v\xE9d\u0151burkolat \xE9s v\xE9szkikapcsol\xF3 keret"
    ],
    advantages: [
      "M\xE1sodik k\xE9zit\xE9gely a K\xE9k \xC9p\xFCletben p\xE1rhuzamos kisebb stancol\xE1sokhoz",
      "Nagy nyom\xF3er\u0151 \xE9s megb\xEDzhat\xF3 mechanikus v\xE1z",
      "Rugalmas \xE9s gyors szersz\xE1mcsere"
    ],
    disadvantages: [
      "Manu\xE1lis adagol\xE1si ig\xE9ny"
    ],
    description: "A K\xE9k \xC9p\xFClet 2. k\xE9zit\xE9gely sajt\xF3ja. Nagy nyom\xF3erej\u0171, k\xE9zi adagol\xE1s\xFA stanc- \xE9s b\xEDgel\u0151g\xE9p vastag kartonokhoz \xE9s sz\xFCrkelemezekhez.",
    idealFor: [
      "Karton dobozok stancol\xE1sa",
      "Mapp\xE1k \xE9s dosszi\xE9k b\xEDgel\xE9se",
      "Sz\xFCrkelemez \xE9s habanyag kiv\xE1g\xE1s"
    ],
    excelNote: "K\xE9k \xC9p\xFClet \u2013 K\xE9zit\xE9gely #2"
  },
  {
    id: "heidelberg-sbg-33x77",
    name: "Heidelberg Cylinder 33\xD777 (SBG) #1",
    shortName: "Heidelberg SBG 33\xD777 #1",
    category: "stanc",
    categoryLabel: "Prec\xEDzi\xF3s Cilinder Stancg\xE9p",
    building: "kek",
    buildingLabel: "K\xE9k \xC9p\xFClet",
    manufacturer: "Heidelberger Druckmaschinen AG",
    workingSize: "570 \xD7 770 mm (Stancforma: 540 \xD7 760 mm)",
    maxSheetSize: "570 \xD7 770 mm",
    minSheetSize: "210 \xD7 280 mm",
    speed: "4 000 \u2013 4 600 \xEDv/\xF3ra",
    weight: "5 000 \u2013 7 000 kg",
    paperGrammage: "80 \u2013 400 g/m\xB2 pap\xEDr, karton max. 0,6\u20130,8 mm",
    materials: [
      "Pap\xEDr (80 \u2013 400 g/m\xB2)",
      "Karton (max. 0.6 \u2013 0.8 mm)",
      "Ofszet nyomtatott \xEDvek",
      "\xCDves c\xEDmkeanyagok, \xF6ntapad\xF3k (riccel\xE9shez)"
    ],
    mainUnits: [
      "V\xE1kuumos adagol\xF3 el\u0151asztallal \xE9s \xFCtk\xF6z\u0151kkel",
      "Hengeres stanc egys\xE9g ac\xE9lhengerrel \xE9s s\xEDk k\xE9sform\xE1val",
      "Excenteres mechanikus nyom\xF3rendszer",
      "L\xE1ncos kihord\xE1s raklapra"
    ],
    advantages: [
      "Kiv\xE1l\xF3 sebess\xE9g pap\xEDrmunk\xE1kn\xE1l (4000-4600 \xEDv/\xF3ra)",
      "Rendk\xEDv\xFCl pontos regiszter \xE9s folyamatos finom \xEDvvezet\xE9s",
      "K\xF6lts\xE9ghat\xE9kony \xFCzemeltet\xE9s \xE9s olcs\xF3 stancszersz\xE1mok",
      "\xD6ntapad\xF3 c\xEDmk\xE9k ritzel\xE9s\xE9re t\xF6k\xE9letes"
    ],
    disadvantages: [
      "Hull\xE1mkartonra NEM alkalmas! (Eredetileg pap\xEDrra tervezt\xE9k)",
      "Vastag kartonokhoz nem aj\xE1nlott",
      "Automata kit\xF6r\xE9s nincs (k\xE9zi kiszed\xE9st ig\xE9nyel)"
    ],
    description: "Klasszikus hengeres stancol\xF3g\xE9p a K\xE9k \xC9p\xFCletben (1. Cilinder stancg\xE9p). V\xE9kony pap\xEDrok, kartonok \xE9s \xF6ntapad\xF3 c\xEDmk\xE9k prec\xEDz kiv\xE1g\xE1s\xE1ra, b\xEDgel\xE9s\xE9re \xE9s ritzel\xE9s\xE9re.",
    idealFor: [
      "Pap\xEDrmapp\xE1k, bor\xEDt\xF3k, napt\xE1rak kiv\xE1g\xE1sa",
      "\xD6ntapad\xF3 etikettek ritzel\xE9se",
      "Kis \xE9s k\xF6zepes sz\xE9ri\xE1s pap\xEDr stancol\xE1s"
    ],
    excelNote: "K\xE9k \xC9p\xFClet \u2013 Cilinder #1"
  },
  {
    id: "heidelberg-56x77-stanc",
    name: "Heidelberg Cylinder (56\xD777 cm) Stanc #2",
    shortName: "Heidelberg 56\xD777 Stanc #2",
    category: "stanc",
    categoryLabel: "Hengeres Cilinder Stancg\xE9p",
    building: "kek",
    buildingLabel: "K\xE9k \xC9p\xFClet",
    manufacturer: "Heidelberger Druckmaschinen AG (Nyugat-N\xE9metorsz\xE1g)",
    workingSize: "560 \xD7 770 mm",
    maxSheetSize: "560 \xD7 770 mm",
    minSheetSize: "210 \xD7 280 mm",
    speed: "2 000 \u2013 4 000 \xEDv/\xF3ra",
    weight: "4 000 \u2013 6 000 kg",
    paperGrammage: "Pap\xEDr (80\u2013400 g/m\xB2), karton max 1\u20132 mm",
    materials: [
      "Pap\xEDr (80\u2013400 g/m\xB2)",
      "Karton \xE9s lamin\xE1lt \xEDvek",
      "V\xE9kony m\u0171anyag f\xF3lia"
    ],
    mainUnits: [
      "Adagol\xF3 asztal tol\xF3 oldalilleszt\xE9kkel",
      "Stancasztal \xE9s k\xE9sforma r\xF6gz\xEDt\u0151",
      "Nagy t\xF6meg\u0171 prec\xEDzi\xF3s henger",
      "Kihord\xF3 szekci\xF3"
    ],
    advantages: [
      "Rendk\xEDv\xFCl strapab\xEDr\xF3, \xE9vtizedekig pontos v\xE1g\xE1st biztos\xEDt",
      "Egyszer\u0171 megb\xEDzhat\xF3 mechanika, olcs\xF3 szersz\xE1moz\xE1s",
      "Egyenletes fel\xFCleti nyom\xE1s a hengeres pr\xE9sel\xE9s miatt"
    ],
    disadvantages: [
      "Hull\xE1mkarton stancol\xE1s\xE1ra NEM alkalmas",
      "Manu\xE1lis be\xE1ll\xEDt\xE1sig\xE9ny"
    ],
    description: "Strapab\xEDr\xF3, megb\xEDzhat\xF3 n\xE9met hengeres stancol\xF3 g\xE9p a K\xE9k \xC9p\xFCletben (2. Cilinder stancg\xE9p) pap\xEDr, karton, mapp\xE1k \xE9s bor\xEDt\xE9kok stancol\xE1s\xE1ra \xE9s b\xEDgel\xE9s\xE9re.",
    idealFor: [
      "Dobozgy\xE1rt\xE1s \xE9s pap\xEDrmapp\xE1k",
      "Napt\xE1rak, bor\xEDt\xE9kok, c\xEDmk\xE9k",
      "K\xF6nyvbor\xEDt\xF3k stancol\xE1sa \xE9s b\xEDgel\xE9se"
    ],
    excelNote: "K\xE9k \xC9p\xFClet \u2013 Cilinder #2"
  },
  {
    id: "heidelberg-propeller-stanc",
    name: "Heidelberg Propelleres Stancg\xE9p",
    shortName: "Propelleres Stanc",
    category: "stanc",
    categoryLabel: "T\xE9gelyes Propeller Stancg\xE9p",
    building: "kek",
    buildingLabel: "K\xE9k \xC9p\xFClet",
    manufacturer: "Heidelberg",
    workingSize: "260 \xD7 380 mm (B4 / A4+ form\xE1tum)",
    maxSheetSize: "260 \xD7 380 mm",
    speed: "3 000 \u2013 5 000 \xEDv/\xF3ra",
    power: "2.2 kW mechanikus hajt\xE1s",
    weight: "1 200 kg",
    paperGrammage: "60 \u2013 400 g/m\xB2",
    materials: [
      "Ofszet \xE9s m\u0171nyom\xF3 pap\xEDr",
      "Karton (max 400 g/m\xB2)",
      "\xD6ntapad\xF3 c\xEDmk\xE9k"
    ],
    mainUnits: [
      "Propelleres automatikus forg\xF3 megfog\xF3karos \xEDvbead\xF3",
      "\xD6nt\xF6ttvas nyom\xF3t\xE9gely",
      "Stancforma szor\xEDt\xF3keret",
      "Automatikus rakatkirak\xF3"
    ],
    advantages: [
      "Automatikus propelleres \xEDvadagol\xE1s gyors ritmusban",
      "Kis \xE9s k\xF6zepes form\xE1tum\xFA kiadv\xE1nyokhoz, c\xEDmk\xE9khez kiv\xE1l\xF3",
      "Rendk\xEDv\xFCl megb\xEDzhat\xF3 Heidelberg mechanika"
    ],
    disadvantages: [
      "Maximum B4 m\xE9retig haszn\xE1lhat\xF3"
    ],
    description: "Automatikus megfog\xF3karos propelleres t\xE9gelystanc a K\xE9k \xC9p\xFCletben. Gyors \xE9s pontos kis- \xE9s k\xF6z\xE9pform\xE1tum\xFA pap\xEDrok, etikettek, n\xE9vjegyek kiv\xE1g\xE1s\xE1ra \xE9s b\xEDgel\xE9s\xE9re.",
    idealFor: [
      "N\xE9vjegyek \xE9s egyedi c\xEDmk\xE9k stancol\xE1sa",
      "Kism\xE9ret\u0171 dobozok \xE9s perfor\xE1l\xE1si munk\xE1k",
      "Prospektusok b\xEDgel\xE9se \xE9s ritzel\xE9se"
    ],
    excelNote: "K\xE9k \xC9p\xFClet \u2013 Propelleres Stanc"
  },
  {
    id: "heidelberg-propeller-dombor-preg",
    name: "Heidelberg Propelleres Dombor & Pr\xE9gg\xE9p",
    shortName: "Propelleres Dombor/Pr\xE9g",
    category: "preg",
    categoryLabel: "T\xE9gelyes Propelleres Pr\xE9gel\u0151 & Dombor\xEDt\xF3",
    building: "kek",
    buildingLabel: "K\xE9k \xC9p\xFClet",
    manufacturer: "Heidelberg",
    workingSize: "260 \xD7 380 mm",
    maxSheetSize: "260 \xD7 380 mm",
    speed: "2 500 \u2013 4 500 \xEDv/\xF3ra",
    power: "3.5 kW (F\u0171t\xF6tt klis\xE9asztal)",
    weight: "1 350 kg",
    paperGrammage: "80 \u2013 400 g/m\xB2",
    materials: [
      "M\u0171nyom\xF3 pap\xEDr \xE9s karton",
      "Kreat\xEDv pap\xEDrok",
      "Arany, ez\xFCst \xE9s sz\xEDnes pr\xE9gf\xF3lia"
    ],
    mainUnits: [
      "Propelleres adagol\xF3 rendszer",
      "F\u0171thet\u0151 klis\xE9 r\xF6gz\xEDt\u0151 lap (h\u0151szab\xE1lyz\xF3val)",
      "F\xF3liatov\xE1bb\xEDt\xF3 l\xE9ptet\u0151 motor",
      "Prec\xEDzi\xF3s dombor\xEDt\xF3 nyom\xF3t\xE9gely"
    ],
    advantages: [
      "Propelleres automata adagol\xE1s magas termel\xE9kenys\xE9ggel",
      "Kiv\xE1l\xF3 mikr\xF3-dombor\xEDt\xE1s \xE9s f\xE9mes f\xF3liapr\xE9gel\xE9s kis \xEDveken",
      "Gyors felf\u0171t\xE9s \xE9s stabil klis\xE9h\u0151m\xE9rs\xE9klet"
    ],
    disadvantages: [
      "Kiz\xE1r\xF3lag B4 / A4+ maxim\xE1lis \xEDvm\xE9retig"
    ],
    description: "Kompakt, automata propelleres pr\xE9gel\u0151- \xE9s dombor\xEDt\xF3g\xE9p a K\xE9k \xC9p\xFCletben. Aranyoz\xE1s, ez\xFCst\xF6z\xE1s \xE9s vakdombor\xEDt\xE1s kism\xE9ret\u0171 csomagol\xE1sokon, c\xEDmk\xE9ken \xE9s el\u0151lapokon.",
    idealFor: [
      "Exkluz\xEDv c\xEDmk\xE9k \xE9s k\xE1rty\xE1k aranyoz\xE1sa",
      "Vakdombor\xEDt\xE1s \xE9s mikr\xF3dombor\xEDt\xE1s",
      "N\xE9vjegyek \xE9s kis dobozok nemes\xEDt\xE9se"
    ],
    excelNote: "K\xE9k \xC9p\xFClet \u2013 Propelleres Dombor/Pr\xE9g"
  },
  {
    id: "polar-115-vago-1",
    name: "Polar 115 Autoline Egyenesv\xE1g\xF3 G\xE9p #1",
    shortName: "Polar 115 V\xE1g\xF3g\xE9p #1",
    category: "vagas",
    categoryLabel: "Programozhat\xF3 Egyenesv\xE1g\xF3 G\xE9p",
    building: "kek",
    buildingLabel: "K\xE9k \xC9p\xFClet",
    manufacturer: "Polar Mohr (N\xE9metorsz\xE1g)",
    workingSize: "V\xE1g\xE1ssz\xE9less\xE9g: 1150 mm",
    maxSheetSize: "1150 \xD7 1150 mm",
    speed: "45 v\xE1g\xE1s/perc",
    power: "4 kW | Hidraulikus nyom\xF3l\xE9c",
    weight: "3 200 kg",
    paperGrammage: "B\xE1rmilyen nyomdaipari pap\xEDr, karton, m\u0171anyag, lemez",
    materials: [
      "Ofszet \xE9s m\u0171nyom\xF3 pap\xEDr \xEDvek",
      "Karton \xE9s hull\xE1mkarton",
      "Sz\xFCrkelemez, m\u0171anyag lapok"
    ],
    mainUnits: [
      "TFT kijelz\u0151s programozhat\xF3 sz\xE1m\xEDt\xF3g\xE9pes vez\xE9rl\xE9s",
      "L\xE9gp\xE1rn\xE1s rozsdamentes ac\xE9l v\xE1g\xF3asztal",
      "Fotocell\xE1s biztons\xE1gi f\xE9nyf\xFCgg\xF6ny",
      "Hidraulikus nyom\xF3l\xE9c \xE1ll\xEDthat\xF3 nyom\xF3er\u0151vel",
      "Optikai v\xE1g\xE1svonal jelz\u0151 f\xE9nysug\xE1r"
    ],
    advantages: [
      "115 cm-es v\xE1g\xE1ssz\xE9less\xE9g (B1+ \xEDvek tiszt\xE1z\xE1sa \xE9s felv\xE1g\xE1sa)",
      "L\xE9gp\xE1rn\xE1s asztal a neh\xE9z rakatok k\xF6nny\u0171 mozgat\xE1s\xE1hoz",
      "Nagy pontoss\xE1g\xFA programozhat\xF3 nyeregbe\xE1ll\xEDt\xE1s"
    ],
    disadvantages: [
      "\xC9les v\xE1g\xF3k\xE9s \u2013 k\xE9scser\xE9n\xE9l fokozott \xF3vatoss\xE1g sz\xFCks\xE9ges"
    ],
    description: "Nagy teljes\xEDtm\xE9ny\u0171 n\xE9met programozhat\xF3 egyenesv\xE1g\xF3 g\xE9p a K\xE9k \xC9p\xFCletben (1. V\xE1g\xF3g\xE9p). Nyomtatott \xEDvek m\xE9retre v\xE1g\xE1s\xE1ra, tiszt\xE1z\xE1s\xE1ra \xE9s stancol\xE1s el\u0151tti el\u0151k\xE9sz\xEDt\xE9s\xE9re.",
    idealFor: [
      "\xCDvsz\xE9lek tiszt\xE1z\xF3 v\xE1g\xE1sa",
      "Karton \xEDvek felv\xE1g\xE1sa stancol\xE1shoz",
      "K\xE9szterm\xE9kek m\xE9retre v\xE1g\xE1sa"
    ],
    excelNote: "K\xE9k \xC9p\xFClet \u2013 V\xE1g\xF3g\xE9p #1"
  },
  {
    id: "polar-92-vago-2",
    name: "Polar 92 ED Egyenesv\xE1g\xF3 G\xE9p #2",
    shortName: "Polar 92 V\xE1g\xF3g\xE9p #2",
    category: "vagas",
    categoryLabel: "Programozhat\xF3 Egyenesv\xE1g\xF3 G\xE9p",
    building: "kek",
    buildingLabel: "K\xE9k \xC9p\xFClet",
    manufacturer: "Polar Mohr (N\xE9metorsz\xE1g)",
    workingSize: "V\xE1g\xE1ssz\xE9less\xE9g: 920 mm",
    maxSheetSize: "920 \xD7 920 mm",
    speed: "45 v\xE1g\xE1s/perc",
    power: "3.5 kW | Hidraulikus nyom\xF3l\xE9c",
    weight: "2 500 kg",
    paperGrammage: "B\xE1rmilyen nyomdaipari pap\xEDr \xE9s karton",
    materials: [
      "Ofszet \xE9s m\u0171nyom\xF3 pap\xEDr",
      "Karton, bor\xEDt\xF3anyagok",
      "C\xEDmke pap\xEDrok"
    ],
    mainUnits: [
      "ED sz\xEDnes kijelz\u0151s programoz\xF3 sz\xE1m\xEDt\xF3g\xE9p",
      "L\xE9gp\xE1rn\xE1s v\xE1g\xF3asztal \xE9s oldalasztalok",
      "Fotocell\xE1s biztons\xE1gi f\xE9nyf\xFCgg\xF6ny",
      "Hidraulikus nyom\xE1s be\xE1ll\xEDt\xE1s"
    ],
    advantages: [
      "Gyors, pontos \xE9s kompakt v\xE1g\xF3g\xE9p 92 cm v\xE1g\xE1ssz\xE9less\xE9ggel",
      "L\xE9gp\xE1rn\xE1s asztal a k\xF6nny\u0171 \xEDvkezel\xE9s\xE9rt",
      "Megb\xEDzhat\xF3 Polar min\u0151s\xE9g \xE9s biztons\xE1gi rendszerek"
    ],
    disadvantages: [
      "Max. 92 cm-es \xEDvsz\xE9less\xE9gig"
    ],
    description: "N\xE9met programozhat\xF3 egyenesv\xE1g\xF3 g\xE9p a K\xE9k \xC9p\xFCletben (2. V\xE1g\xF3g\xE9p). Kisebb \xE9s k\xF6zepes \xEDvek pontos m\xE9retre v\xE1g\xE1s\xE1ra \xE9s el\u0151k\xE9sz\xEDt\xE9s\xE9re.",
    idealFor: [
      "B2 \xE9s B3 \xEDvek v\xE1g\xE1sa",
      "Pap\xEDrok el\u0151k\xE9sz\xEDt\xE9se stancol\xE1sra \xE9s f\xF3li\xE1z\xE1sra",
      "C\xEDmk\xE9k \xE9s sz\xF3r\xF3anyagok v\xE9gleges v\xE1g\xE1sa"
    ],
    excelNote: "K\xE9k \xC9p\xFClet \u2013 V\xE1g\xF3g\xE9p #2"
  }
];

// src/data/partnersData.ts
var PARTNER_RULES = [
  {
    id: "primerate-extramedia",
    partnerName: "PrimeRate / ExtraM\xE9dia",
    statusTag: "Fontos",
    ruleDescription: "Nekik csak akkor t\xF6rj\xFCk ki a stancolt munk\xE1t, ha kifejezetten k\xE9rik!",
    billingNotes: "A kit\xF6r\xE9si munkad\xEDj alap\xE9rtelmezetten nincs kalkul\xE1lva, kiv\xE9ve ha a megrendel\xE9sen k\xFCl\xF6n \xEDr\xE1sos k\xE9r\xE9s szerepel."
  },
  {
    id: "via-surface",
    partnerName: "Via Surface",
    statusTag: "Megrendel\xE9s",
    ruleDescription: "Stancform\xE1t mindig \u0151k hozz\xE1k, valamint v\xE1g\xE1st \xE9s kit\xF6r\xE9st NEM sz\xE1molunk nekik.",
    billingNotes: "A sz\xE1ml\xE1z\xE1sn\xE1l a v\xE1g\xE1s \xE9s kit\xF6r\xE9s t\xE9tel 0 Ft. Stancszersz\xE1m t\xE1rol\xE1s/rendel\xE9s d\xEDja nem terheli \u0151ket."
  },
  {
    id: "promitor",
    partnerName: "Promitor",
    statusTag: "V\xE1laszolni kell",
    ruleDescription: "A kit\xF6r\xE9st mindig be kell pip\xE1lni stancosmunk\xE1n\xE1l, de a stancm\u0171velet a v\xE9ge. Nem sz\xE1molunk kit\xF6r\xE9st nekik.",
    billingNotes: "Munkalapon a kit\xF6r\xE9s opci\xF3t be kell jel\xF6lni az \xFCgyvitelben, de az elsz\xE1mol\xE1sban a kit\xF6r\xE9si d\xEDj nem ker\xFCl felsz\xE1m\xEDt\xE1sra."
  }
];

// src/data/workflowsData.ts
var WORKFLOWS_DATA = [
  {
    id: "stanc-ricc-perforalas",
    title: "Stancol\xE1s, B\xEDgel\xE9s, Perfor\xE1l\xE1s \xE9s Ritzel\xE9s",
    category: "stanc",
    icon: "Scissors",
    shortSummary: "Stancolt csomagol\xF3anyagok, ki\xFCt\u0151s dobozok \xE9s \xF6ntapad\xF3 c\xEDmk\xE9k megmunk\xE1l\xE1sa s\xEDk\xE1gyas vagy hengeres stancg\xE9peken.",
    steps: [
      {
        title: "1. Szersz\xE1m behelyez\xE9s & ellen\u0151rz\xE9s",
        description: "A r\xE9tegelt falemezre szerelt stanck\xE9s (stancszersz\xE1m) beilleszt\xE9se a g\xE9p stanckeret\xE9be (chase). Ellen\u0151rizni kell a k\xE9lmagass\xE1got, a gumi kiemel\u0151ket \xE9s a ritzel\u0151 / b\xEDgel\u0151 cs\xEDkokat."
      },
      {
        title: "2. Illeszt\xE9s & Regiszter be\xE1ll\xEDt\xE1s",
        description: "Front- \xE9s oldalfektet\u0151k (vagy tol\xF3 oldalilleszt\xE9k) pontos millim\xE9teres be\xE1ll\xEDt\xE1sa az \xEDv nyomtat\xE1si jeleihez k\xE9pest."
      },
      {
        title: "3. Nyom\xE1spr\xF3ba & ellenlemez felrak\xE1s",
        description: "V\xE9kony pr\xF3banyomat k\xE9sz\xEDt\xE9se. Sz\xFCks\xE9g eset\xE9n ellenlemez (pertinax cs\xEDk vagy b\xEDgel\u0151 csatorna) felragaszt\xE1sa a b\xEDgel\xE9si vonalak \xE9less\xE9g\xE9\xE9rt \xE9s a karton t\xF6r\xE9s\xE9nek elker\xFCl\xE9s\xE9\xE9rt."
      },
      {
        title: "4. Kit\xF6r\xE9si be\xE1ll\xEDt\xE1s (ha relev\xE1ns)",
        description: "EasyMatrix 106 CS eset\xE9n a kit\xF6r\u0151 t\xFCsk\xE9k \xE9s szersz\xE1mok pozicion\xE1l\xE1sa a bels\u0151 hullad\xE9k automatikus lev\xE1laszt\xE1s\xE1hoz."
      }
    ],
    technicalDetails: [
      { label: "Stancol\xE1si nyom\xE1s (EasyMatrix)", value: "ak\xE1r 2,6 MN (~260 t)" },
      { label: "Pap\xEDrvastags\xE1g tartom\xE1ny", value: "80 g/m\xB2 \u2013 4 mm hull\xE1mkarton" },
      { label: "G\xE9p opci\xF3k", value: "EasyMatrix 106 C/CS, Heidelberg Cylinderek, ML-1040 T\xE9gely" }
    ],
    proTips: [
      "Mindig ellen\u0151rizd a Partner Szab\xE1lyokat! (PrimeRate, Via Surface, Promitor eset\xE9n egyedi kit\xF6r\xE9si \xE9s elsz\xE1mol\xE1si szab\xE1lyok vannak!)",
      "2mm-es sz\xFCrkelemezhez vagy kem\xE9ny m\u0171anyaghoz haszn\xE1ld az ML-1040 t\xE9gelysajt\xF3t!",
      "V\xE9kony pap\xEDrokhoz \xE9s \xF6ntapad\xF3 etikettek ritzel\xE9s\xE9hez a Heidelberg SBG 33x77 a leggyorsabb \xE9s legpontosabb v\xE1laszt\xE1s."
    ]
  },
  {
    id: "preg-es-dombor",
    title: "Pr\xE9gel\xE9s & Dombor\xEDt\xE1s (Meleg F\xF3liapr\xE9gel\xE9s)",
    category: "preg",
    icon: "Flame",
    shortSummary: "Arany, ez\xFCst, hologramos \xE9s sz\xEDnes f\xF3li\xE1k meleg \xE1tvitele, valamint vakdombor mint\xE1k pr\xE9sel\xE9se felhev\xEDtett klis\xE9kkel.",
    steps: [
      {
        title: "1. Klis\xE9 r\xF6gz\xEDt\xE9se a f\u0171t\u0151lapra",
        description: "S\xE1rgar\xE9z vagy magn\xE9zium klis\xE9 r\xF6gz\xEDt\xE9se a pr\xE9gel\u0151asztal f\u0171t\u0151lemez\xE9re. Sz\xFCks\xE9g eset\xE9n ellenklis\xE9 (pozit\xEDv/negat\xEDv) felhelyez\xE9se dombor\xEDt\xE1sn\xE1l."
      },
      {
        title: "2. H\u0151m\xE9rs\xE9klet felf\u0171t\xE9s",
        description: "A pr\xE9gel\u0151egys\xE9g felf\u0171t\xE9se 90 \xB0C \u2013 150 \xB0C k\xF6z\xE9 a felhaszn\xE1lt f\xF3lia (Kurtz / Lemmaco) \xE9s alapanyag specifik\xE1ci\xF3ja alapj\xE1n."
      },
      {
        title: "3. F\xF3lia bef\u0171z\xE9s & el\u0151tol\xE1s",
        description: "A pr\xE9gel\u0151f\xF3lia bef\u0171z\xE9se a tekercstart\xF3r\xF3l a cs\xE9v\xE9l\u0151 tengelyre. Az el\u0151tol\xE1si l\xE9p\xE9sk\xF6z pontos be\xE1ll\xEDt\xE1sa a f\xF3liapocs\xE9kl\xE1s elker\xFCl\xE9s\xE9re."
      },
      {
        title: "4. Pr\xE9gnyom\xE1s finomhangol\xE1sa",
        description: "A henger pr\xE9snyom\xE1s\xE1nak \xE9s a kontaktid\u0151nek a finom\xEDt\xE1sa a t\u0171\xE9les, elken\u0151d\xE9smentes f\xE9mes fel\xFClet el\xE9r\xE9s\xE9\xE9rt."
      }
    ],
    technicalDetails: [
      { label: "H\u0151m\xE9rs\xE9klet tartom\xE1ny", value: "90 \xB0C \u2013 150 \xB0C" },
      { label: "F\xF3lia Besz\xE1ll\xEDt\xF3k", value: "Lemmaco, Kurtz" },
      { label: "Alkalmazhat\xF3 G\xE9pek", value: "Heidelberg SBB 56\xD777, Heidelberg Original 56\xD782" }
    ],
    proTips: [
      "F\xE9m- \xE9s hologramos f\xF3li\xE1kn\xE1l mindig haszn\xE1lj v\xE9d\u0151keszty\u0171t a klis\xE9k felrak\xE1s\xE1n\xE1l a felforr\xF3sodott asztal miatt!",
      "Vakpr\xE9gel\xE9sn\xE9l (f\xF3lia n\xE9lk\xFCl) alacsonyabb h\u0151fok \xE9s nagyobb nyom\xE1s sz\xFCks\xE9ges a m\xE9ly domborhat\xE1shoz."
    ]
  },
  {
    id: "szita-uv-lakkozas",
    title: "Szita UV-Lakkoz\xE1s (Spot & Teljes fel\xFClet)",
    category: "lakkozas",
    icon: "Sparkles",
    shortSummary: "R\xE9szleges (Spot UV) vagy teljes fel\xFClet\u0171 magasf\xE9ny\u0171 \xE9s dombor lakk felvitele Jimbao JB-1020 automata szitanyom\xF3 g\xE9pen.",
    steps: [
      {
        title: "1. Szitakeret behelyez\xE9se",
        description: "A kisz\xEDtott 1140\xD71280 mm-es szitakeret r\xF6gz\xEDt\xE9se a stop-cilinderes lakkoz\xF3 egys\xE9gbe."
      },
      {
        title: "2. Rakli \xE9s d\xF6rzsrakli be\xE1ll\xEDt\xE1sa",
        description: "A rakli d\u0151l\xE9ssz\xF6g\xE9nek, nyom\xE1s\xE1nak \xE9s a lakkter\xEDt\u0151 d\xF6rzsrakli magass\xE1g\xE1nak \xE1ll\xEDt\xE1sa a lakkr\xE9teg vastags\xE1g\xE1hoz."
      },
      {
        title: "3. UV lakk adagol\xE1s & viszkozit\xE1s",
        description: "Az UV lakkoz\xF3 folyad\xE9k bet\xF6lt\xE9se. Ellen\u0151rizni kell a viszkozit\xE1st \xE9s a bubor\xE9kmentess\xE9get."
      },
      {
        title: "4. UV sz\xE1r\xEDt\xF3 alag\xFAt kalibr\xE1ci\xF3",
        description: "Az UV l\xE1mp\xE1k teljes\xEDtm\xE9ny\xE9nek \xE9s a sz\xE1ll\xEDt\xF3szalag sebess\xE9g\xE9nek \xF6sszehangol\xE1sa a t\xF6k\xE9letes lakk-kem\xE9nyed\xE9s\xE9rt."
      }
    ],
    technicalDetails: [
      { label: "Max \xEDvm\xE9ret", value: "1020 \xD7 720 mm (B1)" },
      { label: "Form\xE1tum", value: "Stop-cilinderes s\xEDk\xE1gyas szita" },
      { label: "Sebess\xE9g", value: "1 000 \u2013 3 000 \xEDv/\xF3ra" }
    ],
    proTips: [
      "Dombor UV lakk hat\xE1sn\xE1l lassabb szalagsebess\xE9g \xE9s vastagabb szitasz\xF6vet sz\xFCks\xE9ges!",
      "F\xF3li\xE1zott fel\xFCletre t\xF6rt\xE9n\u0151 lakkoz\xE1sn\xE1l tesztelni kell a lakk tapad\xE1s\xE1t (cross-hatch teszt)."
    ]
  },
  {
    id: "kasirozas-lamina",
    title: "\xCDves Kas\xEDroz\xE1s (Lamina System 1110SA)",
    category: "kasirozas",
    icon: "Layers",
    shortSummary: "Nyomtatott pap\xEDr vagy karton \xEDv \xF6sszeragaszt\xE1sa mikrohull\xE1mkartonnal vagy vastag sz\xFCrkelemezzel kiv\xE1l\xF3 regiszterpontoss\xE1ggal.",
    steps: [
      {
        title: "1. Als\xF3 hordoz\xF3 & fels\u0151 \xEDv adagol\xF3 felt\xF6lt\xE9se",
        description: "Als\xF3 hull\xE1mkarton vagy sz\xFCrkelemez behelyez\xE9se a v\xE1kuumos berak\xF3ba, nyomtatott pap\xEDr\xEDv be\xE1ll\xEDt\xE1sa a fels\u0151 regiszterhez."
      },
      {
        title: "2. Ragaszt\xF3 r\xE9tegvastags\xE1g finom\xEDt\xE1sa",
        description: "V\xEDzb\xE1zis\xFA hidegragaszt\xF3 (PVAc) ter\xEDt\xE9se a ragaszt\xF3hengerekkel. T\xFAl sok ragaszt\xF3 p\xFApod\xE1st okoz, a kev\xE9s elv\xE1l\xE1st."
      },
      {
        title: "3. Illeszt\xE9si regiszter \xE1ll\xEDt\xE1sa",
        description: "Fotocell\xE1s \xE9s mechanikus regiszter finomhangol\xE1sa a maximum \xB10,2 mm-es illeszt\xE9si pontoss\xE1g el\xE9r\xE9s\xE9hez."
      },
      {
        title: "4. Pr\xE9sel\xE9s & Pressure Belt (Nyom\xF3szalag)",
        description: "Az \xF6sszeragasztott \xEDvek \xE1tvezet\xE9se a nyom\xF3szalagon az \xE1lland\xF3 pr\xE9sel\xE9s alatti bubor\xE9kmentes sz\xE1rad\xE1shoz."
      }
    ],
    technicalDetails: [
      { label: "Regiszter pontoss\xE1g", value: "\xB10,2 mm" },
      { label: "Ragaszt\xF3 t\xEDpus", value: "V\xEDzb\xE1zis\xFA hidegragaszt\xF3 (PVA)" },
      { label: "Als\xF3 hordoz\xF3k", value: "Mikrohull\xE1m, EB hull\xE1m, Sz\xFCrkelemez, Habkarton" }
    ],
    proTips: [
      "A Pressure Belt (pr\xE9sel\u0151 szalag) elengedhetetlen a p\xFApod\xE1s- \xE9s bubor\xE9kmentes s\xEDk fel\xFClethez!",
      "Gondoskodj a kl\xEDmatiz\xE1lt sz\xE1rad\xE1sr\xF3l, nehogy a hull\xE1mkarton meghajoljon sz\xE1rad\xE1s k\xF6zben."
    ]
  },
  {
    id: "dobozragasztas-smartfolder",
    title: "Kartondoboz Ragaszt\xE1s (Smartfolder 650)",
    category: "ragasztas",
    icon: "Package",
    shortSummary: "Nagy sebess\xE9g\u0171 automata kartondoboz hajtogat\xE1s \xE9s ragaszt\xE1s gy\xF3gyszeripari, kozmetikai \xE9s \xE9lelmiszeripari dobozokhoz.",
    steps: [
      {
        title: "1. Adagol\xF3 sz\xEDjak & vezet\u0151 l\xE9cek be\xE1ll\xEDt\xE1sa",
        description: "A 6 db 30mm-es feeder sz\xEDj t\xE1vols\xE1g\xE1nak \xE9s a rezg\u0151 \xEDvadagol\xE1snak a finom\xEDt\xE1sa a folyamatos \xEDvbead\xE1s\xE9rt."
      },
      {
        title: "2. El\u0151hajt\xF3 szekci\xF3 kalibr\xE1l\xE1s",
        description: "A doboz t\xF6r\xE9svonalainak el\u0151hajt\xE1sa a k\xE9s\u0151bbi k\xF6nny\u0171 \xE9s pontos \xF6sszez\xE1r\xF3d\xE1s \xE9rdek\xE9ben."
      },
      {
        title: "3. Ragaszt\xF3 t\xE1rcsa / f\xFAv\xF3ka pozicion\xE1l\xE1s",
        description: "Hidegragaszt\xF3 pontos felvitele a ragaszt\xF3f\xFClre. Megfelel\u0151 ragaszt\xE1si sz\xE9less\xE9g be\xE1ll\xEDt\xE1sa."
      },
      {
        title: "4. Trombone pr\xE9sel\u0151 szalag hossza & HMI monitoroz\xE1s",
        description: "XP3101C HMI pult \xE1ttekint\xE9se (Carrier setting, Backfold setting), Trombone pr\xE9sel\u0151 p\xE1lya hossz\xE1nak \xE1ll\xEDt\xE1sa."
      }
    ],
    technicalDetails: [
      { label: "Max sebess\xE9g", value: "350 \u2013 400 m/perc" },
      { label: "Doboz t\xEDpusok", value: "1 pont, 3 pont, crash-lock (automata fen\xE9k), dupla fal" },
      { label: "Vez\xE9rl\xE9s", value: "XP3101C HMI \xC9rint\u0151k\xE9perny\u0151 + PLC" }
    ],
    proTips: [
      "Rendszeresen ellen\u0151rizd az adagol\xF3 sz\xEDjak (6 db 30x2000-2300 mm) kopotts\xE1g\xE1t, mert ez a g\xE9p legf\u0151bb kop\xF3alkatr\xE9sze!",
      "Crash-lock (automata fenek\u0171) dobozokn\xE1l k\xFCl\xF6n\xF6sen fontos a visszahajt\xF3 (Backfold) prec\xEDz id\u0151z\xEDt\xE9se."
    ]
  },
  {
    id: "foliazas-laminalas",
    title: "F\xF3li\xE1z\xE1s & Meleglamin\xE1l\xE1s (Autobond 105 & Mini T/P 74)",
    category: "foliazas",
    icon: "ShieldCheck",
    shortSummary: "V\xE9d\u0151 \xE9s eszt\xE9tikai f\xF3li\xE1k (OPP, PET, Soft-Touch) h\u0151lamin\xE1l\xE1sa egy- vagy k\xE9toldalas kiszerel\xE9sben.",
    steps: [
      {
        title: "1. H\u0151m\xE9rs\xE9klet & Nyom\xE1s be\xE1ll\xEDt\xE1sa",
        description: "A v\xEDzf\u0171t\xE9ses/elektromos kr\xF3mhenger felf\u0171t\xE9se (60\u2013140 \xB0C) \xE9s a pneumatikus hengernyom\xE1s be\xE1ll\xEDt\xE1sa (ak\xE1r 6 tonna)."
      },
      {
        title: "2. F\xF3liatekercs felhelyez\xE9se & fesz\xEDt\xE9s",
        description: "L\xE9gfesz\xEDt\xE9ses tengellyel a f\xF3liatekercs befog\xE1sa, feszess\xE9g \xE9s perfor\xE1l\xF3 k\xE9sek finomhangol\xE1sa."
      },
      {
        title: "3. Adagol\xF3 & Anti-curl r\xFAd poz\xEDcion\xE1l\xE1sa",
        description: "Magasrakat adagol\xF3 be\xE1ll\xEDt\xE1sa, anti-curl r\xFAd finomhangol\xE1sa a pap\xEDr felp\xF6nd\xF6r\xF6d\xE9s\xE9nek megel\u0151z\xE9s\xE9re."
      },
      {
        title: "4. Burst Separator (L\xF6k\u0151g\xF6rg\u0151s lev\xE1laszt\xE1s)",
        description: "A folyamatos f\xF3li\xE1zott \xEDvszalag sz\xE9tv\xE1laszt\xE1sa az \xEDvek tal\xE1lkoz\xE1si perfor\xE1ci\xF3j\xE1n\xE1l."
      }
    ],
    technicalDetails: [
      { label: "Lamin\xE1l\xF3 h\u0151fok", value: "60 \xB0C \u2013 140 \xB0C" },
      { label: "F\xF3lia t\xEDpusok", value: "OPP (f\xE9nyes, matt, soft-touch, karc\xE1ll\xF3), PET" },
      { label: "Perfector funkci\xF3", value: "Autobond Mini T/P 74 (k\xE9toldalas 1 menetben)" }
    ],
    proTips: [
      "Soft-Touch f\xF3li\xE1n\xE1l kiss\xE9 magasabb h\u0151fok \xE9s \xF3vatosabb lev\xE1laszt\xE1s aj\xE1nlott a karcok elker\xFCl\xE9s\xE9re!",
      "S\xF6t\xE9t t\xF3nus\xFA nyomatokn\xE1l teszteld a lamin\xE1l\xE1s tapad\xE1s\xE1t a fest\xE9k pusk\xE1z\xE1s\xE1nak megel\u0151z\xE9s\xE9re."
    ]
  },
  {
    id: "mappak-petretto",
    title: "Mappa & Dosszi\xE9 Gy\xE1rt\xE1s (Gumis & Gy\u0171r\u0171s Mapp\xE1k)",
    category: "ragasztas",
    icon: "FolderOpen",
    shortSummary: "Gumis mapp\xE1k, irattart\xF3 dosszi\xE9k \xE9s kem\xE9nyt\xE1bl\xE1s mappaelemek stancol\xE1sa, b\xEDgel\xE9se \xE9s ragaszt\xE1sa Petretto \xE9s t\xE9gely g\xE9peken.",
    steps: [
      {
        title: "1. Kiv\xE1g\xE1s \xE9s B\xEDgel\xE9s",
        description: "Mappa \xEDvek stancol\xE1sa \xE9s t\xF6bbsz\xF6r\xF6s b\xEDg\xE9l\xE9se ML-1040 vagy EasyMatrix g\xE9pen."
      },
      {
        title: "2. F\xF3li\xE1z\xE1s / UV Lakkoz\xE1s (opcion\xE1lis)",
        description: "Autobond lamin\xE1l\xE1s vagy Spot UV lakkoz\xE1s a mappa bor\xEDt\xF3j\xE1n a tart\xF3s v\xE9delem\xE9rt."
      },
      {
        title: "3. Zseb & F\xFClek hajt\xE1sa \xE9s ragaszt\xE1sa",
        description: "PETRATTO ragaszt\xF3g\xE9pen a f\xFClet behajtva hidegragaszt\xF3val vagy hotmelt-tel r\xF6gz\xEDtj\xFCk a zsebet."
      },
      {
        title: "4. Gumiszalag / Gy\u0171r\u0171s szerkezet behelyez\xE9s",
        description: "Gumis mapp\xE1kn\xE1l a sarokgumik bef\u0171z\xE9se, gy\u0171r\u0171s mapp\xE1kn\xE1l a f\xE9m szerkezet szegecsel\xE9se."
      }
    ],
    technicalDetails: [
      { label: "Ragaszt\xF3 pontoss\xE1g", value: "\xB10,5 mm (Petretto)" },
      { label: "Term\xE9kek", value: "Gumis mappa, irattart\xF3 dosszi\xE9, gy\u0171r\u0171s mappa, flexi bor\xEDt\xF3" }
    ],
    proTips: [
      "F\xF3li\xE1zott mappa f\xFClekn\xE9l mindenk\xE9pp haszn\xE1lj speci\xE1lis f\xF3liaragaszt\xF3t a Petretto-n!"
    ]
  }
];

// server.ts
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var aiClient = null;
function getGenAI() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not configured");
    }
    aiClient = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
async function generateWithFallback(ai, params) {
  const models = ["gemini-3.6-flash", "gemini-flash-latest", "gemini-3.1-flash-lite", "gemini-3.1-pro-preview"];
  let lastError = null;
  for (const model of models) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          ...params,
          model
        });
        return response;
      } catch (err) {
        lastError = err;
        const status = err?.status || (err?.message?.includes("503") ? 503 : null);
        if (status === 503) {
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
var SYSTEM_INSTRUCTION = `
Te a DPD Stanc\xFCzem (2049 Di\xF3sd, Ipar utca 11/A) hivatalos szakmai AI Asszisztense vagy, kifejezetten a Gy\xE1rt\xE1sel\u0151k\xE9sz\xEDt\u0151k (GYEK) \xE9s g\xE9pkezel\u0151k munk\xE1j\xE1t seg\xEDted.

A DPD Stanc\xFCzem g\xE9pparkja \xE9s technol\xF3giai adatai:
${JSON.stringify(MACHINES_DATA, null, 2)}

Partner-specifikus szab\xE1lyok (Kiemelten fontos elsz\xE1mol\xE1skor \xE9s gy\xE1rt\xE1skor!):
${JSON.stringify(PARTNER_RULES, null, 2)}

Munkafolyamat \xE9s technol\xF3giai \xFAtmutat\xF3k:
${JSON.stringify(WORKFLOWS_DATA, null, 2)}

Szab\xE1lyok az v\xE1laszad\xE1skor:
1. Mindig szakmai, seg\xEDt\u0151k\xE9sz, k\xF6zvetlen magyar nyelven v\xE1laszolj.
2. Ha a felhaszn\xE1l\xF3 egy g\xE9pre, m\xE9retre, sebess\xE9gre, alapanyagra vagy technol\xF3gi\xE1ra k\xE9rdez r\xE1, adj pontos m\u0171szaki adatokat a fenti adatb\xE1zisb\xF3l.
3. Kiemelten h\xEDvd fel a figyelmet a Partner Szab\xE1lyokra (pl. PrimeRate/ExtraM\xE9dia: kit\xF6r\xE9st csak k\xE9r\xE9sre; Via Surface: form\xE1t \u0151k hoznak, kit\xF6r\xE9s/v\xE1g\xE1s 0 Ft; Promitor: kit\xF6r\xE9st bepip\xE1lni munkalapon, de nem elsz\xE1molni).
4. Ha a felhaszn\xE1l\xF3 g\xE9pv\xE1laszt\xE1si tan\xE1csot k\xE9r (pl. 2mm sz\xFCrkelemezhez vagy hull\xE1mkartonhoz), aj\xE1nld a megfelel\u0151 g\xE9pet (pl. ML-1040 t\xE9gely a 2mm sz\xFCrkelemezhez; SBG 33x77 pap\xEDrhoz; EasyMatrix hull\xE1mkartonhoz 4mm-ig).
5. Tarts r\xF6vid, l\xE9nyegret\xF6r\u0151, j\xF3l olvashat\xF3 form\xE1tumot pontokba szedve.
`;
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", company: "DPD Stanc\xFCzem" });
});
app.post("/api/parse-quote-email", async (req, res) => {
  try {
    const { emailText } = req.body;
    if (!emailText || typeof emailText !== "string") {
      return res.status(400).json({ error: "K\xE9rj\xFCk adjon meg \xE9rv\xE9nyes \xE1raj\xE1nlat sz\xF6veget." });
    }
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({
        error: "A GEMINI_API_KEY nincs be\xE1ll\xEDtva a k\xF6rnyezeti v\xE1ltoz\xF3kban. K\xE9rj\xFCk \xE1ll\xEDtsa be az AI Studio Secrets men\xFCben."
      });
    }
    const ai = getGenAI();
    const prompt = `
Elemzed a k\xF6vetkez\u0151 \xE1raj\xE1nlat k\xE9r\xE9st, \xE9s nyerj ki minden m\u0171szaki, megrendel\u0151i \xE9s gy\xE1rt\xE1si param\xE9tert a DPD Stanc\xFCzem g\xE9pparkja, technol\xF3giai sorrendje \xE9s partner szab\xE1lyai alapj\xE1n.

\xC1raj\xE1nlat k\xE9r\xE9s sz\xF6vege:
"""
${emailText}
"""

G\xE9ppark lelt\xE1r \xE9s specifik\xE1ci\xF3k:
${JSON.stringify(MACHINES_DATA, null, 2)}

Partner szab\xE1lyok:
${JSON.stringify(PARTNER_RULES, null, 2)}

M\u0171veleti opci\xF3k azonos\xEDt\xF3i (ezek k\xF6z\xFCl v\xE1lassz a param\xE9terekn\xE9l):
- M\u0171velet azonos\xEDt\xF3k (opId): 'foliazas_1oldal', 'foliazas_2oldal', 'bigeles', 'vagas_egyenes', 'kasirozas', 'ragasztas_doboz', 'ragasztas_mappa', 'preg_f\xE9m', 'ricceles', 'perforalas', 'lakkozas_spot', 'stanc', 'lakkozas_teljes', 'domboritas'
- Alapanyag azonos\xEDt\xF3k (materialId): 'szurkelemez_0_5mm', 'szurkelemez_1mm', 'szurkelemez_1_5mm', 'szurkelemez_2mm', 'szurkelemez_2_5mm', 'szurkelemez_3mm', 'folia_laminalt', 'hullamkarton', 'mikrohullam', 'ontapado_etikett', 'karton_standard', 'karton_vastag', 'papir_vekony'
- Partner azonos\xEDt\xF3k (partnerId): 'primerate-extramedia', 'promitor', 'via-surface', 'standard'

A v\xE1laszod kiz\xE1r\xF3lag egy JSON objektum legyen a k\xF6vetkez\u0151 strukt\xFAr\xE1val:
{
  "summary": "R\xF6vid, 1-2 mondatos szakmai \xF6sszefoglal\xF3 magyarul...",
  "extractedParams": {
    "partnerId": "primerate-extramedia",
    "partnerName": "PrimeRate / ExtraM\xE9dia",
    "materialId": "karton_standard",
    "materialName": "Standard Karton GC1 / GC2",
    "opId": "stanc",
    "opName": "Stancol\xE1s / Formakiv\xE1g\xE1s",
    "quantity": 5000,
    "width": 700,
    "height": 500,
    "sheetPreset": "custom"
  },
  "workflowSequence": [
    {
      "step": 1,
      "operationName": "M\u0171velet megnevez\xE9se (pl. F\xF3li\xE1z\xE1s)",
      "machineId": "autobond-mini-tp-74",
      "machineName": "Autobond Mini T/P 74 F\xF3li\xE1z\xF3",
      "building": "zold",
      "buildingLabel": "\u{1F7E2} Z\xF6ld \xC9p\xFClet",
      "reasoning": "Mi\xE9rt ezen a g\xE9pen \xE9s ebben a l\xE9p\xE9sben fut?",
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
    "reasoning": "A pr\xE9gel\xE9shez klis\xE9 sz\xFCks\xE9ges. Az e-mail alapj\xE1n ellen\u0151rizend\u0151, hogy n\xE1lunk van-e vagy rendelend\u0151."
  },
  "partnerAlerts": [
    "Partner szab\xE1ly figyelmeztet\xE9s, ha van"
  ],
  "technologicalWarnings": [
    "Technol\xF3giai vagy \xE9p\xFCletk\xF6zi mozgat\xE1si figyelmeztet\xE9s"
  ],
  "recommendations": [
    "Szakmai javaslat a GYEK-es sz\xE1m\xE1ra"
  ]
}
`;
    const response = await generateWithFallback(ai, {
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.1
      }
    });
    const parsedData = JSON.parse(response.text || "{}");
    res.json(parsedData);
  } catch (error) {
    console.error("Email quote parsing error:", error);
    const isUnavailable = error?.message?.includes("503") || error?.message?.includes("UNAVAILABLE") || error?.status === 503;
    res.status(503).json({
      error: isUnavailable ? "Az AI szolg\xE1ltat\xE1s jelenleg t\xFAlterhelt. K\xE9rj\xFCk pr\xF3b\xE1ld \xFAjra p\xE1r m\xE1sodperc m\xFAlva!" : error?.message || "Hiba t\xF6rt\xE9nt az \xE1raj\xE1nlat feldolgoz\xE1sa sor\xE1n."
    });
  }
});
app.post("/api/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "\xC9rv\xE9nytelen prompt k\xE9r\xE9s." });
    }
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({
        error: "A GEMINI_API_KEY nincs be\xE1ll\xEDtva az k\xF6rnyezeti v\xE1ltoz\xF3kban. K\xE9rj\xFCk \xE1ll\xEDtsa be az AI Studio Secrets men\xFCben."
      });
    }
    const ai = getGenAI();
    const response = await generateWithFallback(ai, {
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3
      }
    });
    res.json({ text: response.text });
  } catch (error) {
    console.error("Gemini API hiba:", error);
    const isUnavailable = error?.message?.includes("503") || error?.message?.includes("UNAVAILABLE") || error?.status === 503;
    res.status(503).json({
      error: isUnavailable ? "Az AI szolg\xE1ltat\xE1s jelenleg t\xFAlterhelt. K\xE9rj\xFCk pr\xF3b\xE1ld \xFAjra p\xE1r m\xE1sodperc m\xFAlva!" : error?.message || "Hiba t\xF6rt\xE9nt a v\xE1lasz gener\xE1l\xE1sa sor\xE1n."
    });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`DPD Stanc\xFCzem szerver elindult a 3000-es porton.`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
