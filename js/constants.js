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
zoomStart = 12.3; //zoom d'un pc pour voir tous les circuits
if (smartphone == true) {
  zoomStart = 10.8; //zoom d'un smartphone pour voir tous les circuits
}

/* --------------------------------- Circuits --------------------------------- */

// Liste des circuits VTT avec ces coordonnées
const listeCircuitsVttWithCoords = [
  { id: "circuit49", coords: coordsCircuitVtt49 },
  { id: "circuit43", coords: coordsCircuitVtt43 },
  { id: "circuit37", coords: coordsCircuitVtt37 },
  { id: "circuit27", coords: coordsCircuitVtt27 },
  { id: "circuit19", coords: coordsCircuitVtt19 },
];

const listeCircuitsMarcheWithCoords = [
  { id: "circuit17", coords: coordsCircuitMarche17 },
  { id: "circuit13", coords: coordsCircuitMarche13 },
  { id: "circuit8", coords: coordsCircuitMarche8 }
];

// constantes selon le type de carte : couleurs, offset et opacité
const colorsCircuitsOut = {
  "VTT" : ['rgb(30, 196, 233)', 
          'rgb(0, 166, 147)', 
          'rgb(255, 228, 0)', 
          'rgb(255, 143, 0)',
          'rgb(196, 94, 189)'],
  "Marche" : ['rgb(0, 166, 147)', 
              'rgb(129, 97, 154)', 
              'rgb(236, 75, 75)', 
              'rgb(0, 166, 147)']
}

const colorsCircuitsSat = {
  "VTT" : ['rgb(30, 196, 233)', 
           'rgb(0, 166, 147)', 
           'rgb(255, 228, 0)', 
           'rgb(255, 143, 0)', 
           'rgb(196, 94, 189)'],

  "Marche" : ['rgb(58, 218, 85)', 
              'rgb(255, 0, 120)', 
              'rgb(252, 143, 128)']
}

const lineWidthsCircuit = {
  All_Out: 2.5,
  All_Sat: 3,
  NotAll_Out: 5,
  NotAll_Sat: 5
};

const offsets = {
  All_Out: 0.00015,
  All_Sat: 0.0003,
  NotAll_Out: 0.00008,
  NotAll_Sat: 0.00005
};

lineOpacityCircuit = 1;
lineOpacityBackCircuit = 0.15;
offsetLineWithCircuit = 2;

if (type == 'all') {
  if (mapStyle == 'mapbox://styles/mapbox/outdoors-v12') {
    lineWidthCircuit = lineWidthsCircuit.All_Out;
    offset = offsets.All_Out;
  } else {
    lineWidthCircuit = lineWidthsCircuit.All_Sat;
    offset = offsets.All_Sat;
  }
} else {
  if (mapStyle == 'mapbox://styles/mapbox/outdoors-v12') {
    lineWidthCircuit = lineWidthsCircuit.NotAll_Out;
    offset = offsets.NotAll_Out;
  } else {
    lineWidthCircuit = lineWidthsCircuit.NotAll_Sat;
    offset = offsets.NotAll_Sat;
  }
}

// Décalage des traces
signe = 1;
j = 0;
for (let i = 0; i < listeCircuitsVttWithCoords.length; i++) {
  // Centré au milieu, la trace du milieu de tableau sera au milieu (coordonnées non décalées)
  // let currentOffset = (offset * i)-offset*(listeCircuitsVttWithCoords.length/2);

  // Le premier au milieu, les autres autour
  if ((i+1)%2 == 0) {
    j++;
  }
  signe = signe * -1;
  let currentOffset = (offset * j)*signe;
  
  for (let j = 0; j < listeCircuitsVttWithCoords[i].coords.length; j++) {
    listeCircuitsVttWithCoords[i].coords[j][0] += currentOffset;
    listeCircuitsVttWithCoords[i].coords[j][1] += currentOffset;
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

lineWitdhPortions = 15;
lineWitdhPortionsPoly = 20;
lineOpacityPortions = 0.6;

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
  "ravitoKerbellec": "20 - 5<sup>e</sup> km<br>27 - 11<sup>e</sup> km<br>49 - 11<sup>e</sup> km",
  "ravitoBallTrap": "37 - 16<sup>e</sup> km<br>43 - 18<sup>e</sup> km<br>49 - 24<sup>e</sup> km<br>",
  "ravitoCudel": "20 - 11<sup>e</sup> km<br>27 - 17<sup>e</sup> km<br>37 - 27<sup>e</sup> km<br>43 - 29<sup>e</sup> km<br>49 - 35<sup>e</sup> km<br>",
};

const listePortions = [
  { id: "verger1", type: "cotes", coords: verger1, color: colorsPortions.cotes, descriptions: descriptions["verger1"] },
  { id: "verger2", type: "cotes", coords: verger2, color: colorsPortions.cotes, descriptions: descriptions["verger2"] }
];

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

distanceBetweenFleches = 0.6;

const listeChoosenFleches = [
  { id: "circuit49", points: [70, 100, 200, 400] },
  { id: "circuit43", points: [55, 100, 200, 400] },
  { id: "circuit37", points: [45, 100, 200, 400] },
  { id: "circuit27", points: [38, 100, 200, 400] },
  { id: "circuit19", points: [35, 100, 200, 400] },
]

/* --------------------------------- Polygons --------------------------------- */

colorFleche19 = colorsCircuitsOut['VTT'][0];
colorFleche27 = colorsCircuitsOut['VTT'][1];
colorFleche37 = colorsCircuitsOut['VTT'][2];
colorFleche43 = colorsCircuitsOut['VTT'][3];
colorFleche49 = colorsCircuitsOut['VTT'][4];
colorFleche = 'rgb(155, 155, 155)';