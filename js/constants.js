// let type = 'all'; // all = on veut voir toutes les traces en entier, utile pour prendre un screen
let type = 'notAll'; // notAll = plus pour le mode logiciel, ou on peut zoomer donc pas besoin de gros offset
let typePo = 'vttSansPo'; // état initial : on affiche les circuits VTT sans portions

let mapStyle = 'mapbox://styles/mapbox/outdoors-v12';

// Savoir quel est le type d'appareil (pc ou smartphone)
let smartphone = false; //par défaut, on considère que c'est un pc
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //si c'est un smartphone
  smartphone = true;
}

// Zoom de départ en fonction du support
let zoomStart = 12.3; //zoom d'un pc pour voir tous les circuits
if (smartphone == true) {
  zoomStart = 10.8; //zoom d'un smartphone pour voir tous les circuits
}

/* --------------------------------- Circuits --------------------------------- */

// Liste des circuits VTT avec ces coordonnées
const listeCircuitsVtt = [
  { id: "circuit48", coords: coordsCircuitVtt48, colorOut: 'rgb(196, 94, 189)', colorSat: 'rgb(196, 94, 189)'},
  { id: "circuit41", coords: coordsCircuitVtt41, colorOut: 'rgb(255, 143, 0)', colorSat: 'rgb(255, 143, 0)'},
  { id: "circuit36", coords: coordsCircuitVtt36, colorOut: 'rgb(255, 228, 0)', colorSat: 'rgb(255, 228, 0)'},
  { id: "circuit28", coords: coordsCircuitVtt28, colorOut: 'rgb(0, 166, 147)', colorSat: 'rgb(0, 166, 147)'},
  { id: "circuit19", coords: coordsCircuitVtt19, colorOut: 'rgb(30, 196, 233)', colorSat: 'rgb(30, 196, 233)'}
];

let tabStatesCircuits = {
  stateCircuit48: [false, listeCircuitsVtt[0].id],
  stateCircuit41: [false, listeCircuitsVtt[1].id],
  stateCircuit36: [false, listeCircuitsVtt[2].id],
  stateCircuit28: [false, listeCircuitsVtt[3].id],
  stateCircuit19: [false, listeCircuitsVtt[4].id],

  stateCircuit8: [false, "circuit8"],
  stateCircuit13: [false, "circuit13"],
  stateCircuit17: [false, "circuit17"],
};

const listeCircuitsMarcheWithCoords = [
  { id: "circuit17", coords: coordsCircuitMarche17 },
  { id: "circuit13", coords: coordsCircuitMarche13 },
  { id: "circuit8", coords: coordsCircuitMarche8 }
];

// constantes selon le type de carte : couleurs, offset et opacité
const colorsCircuitsOut = {
  "Marche" : ['rgb(0, 166, 147)', 
              'rgb(129, 97, 154)', 
              'rgb(236, 75, 75)', 
              'rgb(0, 166, 147)']
}

const colorsCircuitsSat = {
  "Marche" : ['rgb(58, 218, 85)', 
              'rgb(255, 0, 120)', 
              'rgb(252, 143, 128)']
}

const lineWidthsCircuit = {
  All_Out: 2.5,
  All_Sat: 3,
  NotAll_Out: 5,
  NotAll_Sat: 4
};

const lineWidthsCircuitByZoom = {
  SmallZoom: 1,
  MediumZoom: 1,
  LargeZoom: 1
}

const offsetsCircuits = {
  All_Out: 0.00015,
  All_Sat: 0.0003,
  NotAll_Out: 0.000047,
  NotAll_Sat: 0.00005
};

let lineOpacityCircuit = 1;
let lineOpacityBackCircuit = 0.15;
let offsetLineWithCircuit = 1.2;

if (type == 'all') {
  if (mapStyle == 'mapbox://styles/mapbox/outdoors-v12') {
    lineWidthCircuit = lineWidthsCircuit.All_Out;
    offset = offsetsCircuits.All_Out;
  } else {
    lineWidthCircuit = lineWidthsCircuit.All_Sat;
    offset = offsetsCircuits.All_Sat;
  }
} else {
  if (mapStyle == 'mapbox://styles/mapbox/outdoors-v12') {
    lineWidthCircuit = lineWidthsCircuit.NotAll_Out;
    offset = offsetsCircuits.NotAll_Out;
  } else {
    lineWidthCircuit = lineWidthsCircuit.NotAll_Sat;
    offset = offsetsCircuits.NotAll_Sat;
  }
}

// Décalage des traces
let signe = 1;
let j = 0;
for (let i = 0; i < listeCircuitsVtt.length; i++) {
  // Centré au milieu, la trace du milieu de tableau sera au milieu (coordonnées non décalées)
  // let currentOffset = (offset * i)-offset*(listeCircuitsVtt.length/2);

  // Le premier au milieu, les autres autour
  if ((i+1)%2 == 0) {
    j++;
  }
  signe = signe * -1;
  let currentOffset = (offset * j)*signe;
  
  for (let j = 0; j < listeCircuitsVtt[i].coords.length; j++) {
    listeCircuitsVtt[i].coords[j][0] += currentOffset;
    listeCircuitsVtt[i].coords[j][1] += currentOffset;
  }
}

for (let i = 0; i < coordsCircuitMarche17.length; i++) {
  coordsCircuitMarche17[i][0] += offset*1.5;
  coordsCircuitMarche17[i][1] += offset*1.5;
}
for (let i = 0; i < coordsCircuitMarche13.length; i++) {
  coordsCircuitMarche13[i][0] += offset*2;
  coordsCircuitMarche13[i][1] += offset*2;
}
for (let i = 0; i < coordsCircuitMarche8.length; i++) {
  coordsCircuitMarche8[i][0] += offset*2.5;
  coordsCircuitMarche8[i][1] += offset*2.5;
}


/* --------------------------------- Portions --------------------------------- */

let lineWitdhPortions = 15;
let lineWitdhPortionsPoly = 20;
let lineOpacityPortions = 0.6;

const colorsPortions = {
  Debrou_Out: "rgb(0, 174, 255)",
  Debrou_Sat: "rgb(0, 255, 255)",
  Souff_Out: "rgb(184, 21, 21)",
  Souff_Sat: "rgb(255, 0, 0)",
  PY_Out: "rgb(255, 255, 0)",
  PY_Sat: "rgb(255, 255, 0)",
  Tronco_Out: "rgb(88, 61, 21)",
  Tronco_Sat: "rgb(244, 214, 148)",
  Cotes: "rgb(0, 255, 162)"
};

lineOpacityPortions_Out = 0.6;
lineOpacityPortions_Sat = 0.8;

if (mapStyle == 'mapbox://styles/mapbox/outdoors-v12') {
  colorTronco = colorsPortions.Tronco_Out;
  lineOpacityPortions = lineOpacityPortions_Out;
} else { // mapbox://styles/mapbox/satellite-streets-v12
  colorTronco = colorsPortions.Tronco_Sat;
  lineOpacityPortions = lineOpacityPortions_Sat;
}

const descriptions = {
  "verger1": "Faire les côtés avec une débroussailleuse",
  "verger2": "Faire les côtés avec une débroussailleuse",
  "ravitoTrevillyHuella": "28 - 8<sup>e</sup> km<br>48 - 8<sup>e</sup> km",
  "ravitoVirageStGoazec": "37 - 12<sup>e</sup> km<br>41 - 11<sup>e</sup> km<br>48 - 17<sup>e</sup> km<br><br>37 - 14<sup>e</sup> km<br>41 - 16<sup>e</sup> km<br>48 - 22<sup>e</sup> km",
  "ravitoCudel": "20 - 10<sup>e</sup> km<br>28 - 16<sup>e</sup> km<br>37 - 26<sup>e</sup> km<br>41 - 30<sup>e</sup> km<br>48 - 36<sup>e</sup> km<br>",
};

const listePortions = [
  { id: "verger1", type: "cotes", coords: verger1, color: colorsPortions.cotes, descriptions: descriptions["verger1"] },
  { id: "verger2", type: "cotes", coords: verger2, color: colorsPortions.cotes, descriptions: descriptions["verger2"] }
];

let tabStatesPortions = [
  "verger1",false,
  "verger2",false,
  "stang1",false,
  "champLise",false,
  "cozic1",false,
  "kerbellec1",false,
  "kerbellec2",false,
  "kerbellec3",false,
  "saintGoazec1",false,
  "saintGoazec3",false,
  "halage1",false,
  "boisRuisseauCrann",false,
  "remonterVersPalae",false,
  "descenteKerdaffret",false,
  "parcALapin",false,
]

/* --------------------------------- Points --------------------------------- */

const circlesRadius = { 
  out: 10, 
  sat: 15
};

const colorsRavito = {
  out: "rgb(247, 34, 34)",
  sat: "rgb(247, 34, 34)"
}

if (mapStyle == 'mapbox://styles/mapbox/outdoors-v12') {
  colorRavito = colorsRavito.out;
  circleRadius = circlesRadius.out;
} else {
  colorRavito = colorsRavito.sat;
  circleRadius = circlesRadius.sat;
}

/* --------------------------------- Flèches --------------------------------- */

const distanceBetweenFleches = 0.6;
const longueurFleche = 0.00125;
const angleFleche = 140;
const lineWidthFleche = 4;

const listeChoosenFleches = [
  { id: listeCircuitsVtt[0].id, points: [90, 427, 830, 915, 1100, 1435, 2295, 2760, 3093, 3856, 4080] },
  { id: listeCircuitsVtt[1].id, points: [73, 450, 728, 790, 1500, 1950, 2250, 2460, 3000, 3240] },
  { id: listeCircuitsVtt[2].id, points: [14, 51, 87, 250, 517, 588, 825, 1330, 1634, 1746, 2200] },
  { id: listeCircuitsVtt[3].id, points: [59, 400, 760, 900, 1045, 1550, 1605] },
  { id: listeCircuitsVtt[4].id, points: [9, 50, 150, 309, 595, 795] },
]