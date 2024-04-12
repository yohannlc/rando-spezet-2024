// Fonction qui permet de mettre l'opacité de tous les circuits à lineOpacityBackCircuit sauf celui en argument
function setOnlyOneTrace(circuitName, circuitState, circuitItem) {    
    resetAllTraces();
    stateLine(circuitName, circuitState, circuitItem);
    
    for (let i of Object.values(tabStatesCircuits)) {
        if (i[1] != circuitName) {
            if (!(type !="all" && (i[1] == "circuit8" || i[1] == "circuit13" || i[1] == "circuit17"))) {
                map.setPaintProperty(i[1], 'line-opacity', lineOpacityBackCircuit); // On remet l'opacité de la ligne à la normale
            }
        }
    }
}

function changeLegend() {
    const divLegend = document.getElementById("divLegendId");
    const divParams = document.getElementById("divParamsId");

    var divs = document.getElementsByClassName('legend-circuit');

    if (mapStyle == 'mapbox://styles/mapbox/satellite-streets-v12') {
        //ajouter la classe "legend-satellite" à la div d'id "legend"
        divLegend.classList.add("legend-satellite");
        divParams.classList.add("params-satellite");

        for (let i = 0; i < (listeCircuitsVttWithCoords.length); i++) {
            divs[i].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' +  colorsCircuitsSat['VTT'][i] + '; height: 3px;');
        }

        for (let i = 0; i < (listeCircuitsMarcheWithCoords.length); i++) {
            divs[i+listeCircuitsVttWithCoords.length].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorsCircuitsSat['Marche'][i] + '; height: 3px;');
        }

        divs[8].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorDebrou_Sat + '; height: 3px;');
        divs[9].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorSouff_Sat + '; height: 3px;');
        divs[10].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorTronco_Sat + '; height: 3px;');
        divs[11].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorPY_Sat + '; height: 3px;');
    } else {
        //enlever la classe "legend-satellite" à la div d'id "legend"
        divLegend.classList.remove("legend-satellite");
        divParams.classList.remove("params-satellite");

        for (let i = 0; i < (listeCircuitsVttWithCoords.length); i++) {
            divs[i].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' +  colorsCircuitsOut['VTT'][i] + '; height: 3px;');
        }

        for (let i = 0; i < (listeCircuitsMarcheWithCoords.length); i++) {
            divs[i+listeCircuitsVttWithCoords.length].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorsCircuitsOut['Marche'][i] + '; height: 3px;');
        }

        divs[8].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorDebrou_Out + '; height: 3px;');
        divs[9].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorSouff_Out + '; height: 3px;');
        divs[10].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorTronco_Out + '; height: 3px;');
        divs[11].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorPY_Out + '; height: 3px;');
    }
    divs[11].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorCotes + '; height: 3px;');
}

function resetAllTraces() {
    let j = 0;
    for (let circuit of Object.values(tabStatesCircuits)) {               // Pour chaque circuit
        if (circuit[0] == true) {                                                 // Si la trace est activée
            circuit[0] = false;                                           // On remet l'état de la trace à false                              
            cacherDivTexteId();
        }
        if (type =="all" || (circuit[1] != "circuit8" && circuit[1] != "circuit13" && circuit[1] != "circuit17")) {
            stateLine(circuit[1], circuit[0], items[j]);                  // On remet l'opacité de la ligne à la normale
        }
        j++;                                                              // Permet de suivre quel élément du tableau tabStatesCircuits on est en train de traiter
    }
}

// Fonction qui change le width de la line et sa légende en argument en bold et met reset le reste 
function stateLine(name, state, item) {
    if (state) {
        map.setPaintProperty(name, 'line-width', lineWitdhCircuit+offsetLineWithCircuit);
        item.classList.add('bold');
    } else {
        map.setPaintProperty(name, 'line-opacity', lineOpacityCircuit);
        map.setPaintProperty(name, 'line-width', lineWitdhCircuit);
        item.classList.remove('bold');
    }
}

// Gérer l'affichage de la popup de texte
function afficherDivTexteId(portionName) {
    // Sépare le mot en lettre et en chiffre
    const match = portionName.match(/^([a-zA-Z]+)(\d+)?([a-zA-Z\s]*)/);
    if (!match) {
      // La chaîne ne correspond pas au format attendu
      return;
    }
    const lettre = match[1];
    const chiffre = match[2] || "";
    const texte = match[3] ? match[3].replace(/\d+/g, '').trim() : "";
    
    // Met la première lettre de chaque mot en majuscule
    const lettreMajuscule = lettre.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const texteMajuscule = texte.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    // Affiche le texte dans l'élément HTML
    const textId = document.getElementById("textId");
    textId.innerHTML = `${lettreMajuscule} ${chiffre} ${texteMajuscule}`;
    
    // Affiche la description dans une autre balise HTML
    const descriptionId = document.getElementById("descriptionId");
    if (descriptions.hasOwnProperty(portionName)) {
      descriptionId.innerHTML = descriptions[portionName];
    } else {
      descriptionId.innerHTML = "";
    }
    
    // Affiche la div
    const divTexteId = document.getElementById("divTexteId");
    divTexteId.classList.add("show");
}

function cacherDivTexteId() { // Fonction pour cacher
    divTexteId.classList.remove("show");
    resetAllTraces();
}

function changeConstants() {
    if (mapStyle == 'mapbox://styles/mapbox/outdoors-v12') {
        color49 = colorsCircuitsOut['VTT'][0];
        color43 = colorsCircuitsOut['VTT'][1];
        color37 = colorsCircuitsOut['VTT'][2];
        color27 = colorsCircuitsOut['VTT'][3];
        color19 = colorsCircuitsOut['VTT'][4];
        color8 = colorsCircuitsOut['Marche'][0];
        color13 = colorsCircuitsOut['Marche'][1];
        color17 = colorsCircuitsOut['Marche'][2];
        
        if (type == 'all') {
            lineWitdhCircuit = lineWitdhCircuit_Out_All;
            offset = offset_Out_All;
        } else {
            lineWitdhCircuit = lineWitdhCircuit_Out_NotAll;
            offset = offset_Out_NotAll;
        }

        colorDebrou = colorDebrou_Out;
        colorSouff = colorSouff_Out;
        colorPY = colorPY_Out;
        colorTronco = colorTronco_Out;

        colorRavito = colorRavito_Out;

        colorFleche1 = colorsCircuitsOut['VTT'][0];
        colorFleche2 = colorsCircuitsOut['VTT'][2];
    } else { // mapbox://styles/mapbox/satellite-streets-v12
        color49 = colorsCircuitsSat['VTT'][0];
        color43 = colorsCircuitsSat['VTT'][1];
        color37 = colorsCircuitsSat['VTT'][2];
        color27 = colorsCircuitsSat['VTT'][3];
        color19 = colorsCircuitsSat['VTT'][4];
        color8 = colorsCircuitsSat['Marche'][0];
        color13 = colorsCircuitsSat['Marche'][1];
        color17 = colorsCircuitsSat['Marche'][2];

        if (type == 'all') {
            lineWitdhCircuit = lineWitdhCircuit_Sat_All;
            offset = offset_Sat_All;
        } else {
            lineWitdhCircuit = lineWitdhCircuit_Sat_NotAll;
            offset = offset_Sat_NotAll;
        }

        colorDebrou = colorDebrou_Sat;
        colorSouff = colorSouff_Sat;
        colorPY = colorPY_Sat;
        colorTronco = colorTronco_Sat;

        colorRavito = colorRavito_Sat;

        colorFleche1 = colorsCircuitsSat['VTT'][3];
        colorFleche2 = colorsCircuitsSat['VTT'][1];
    }
}

// Fonction qui change le type de d'affichage
function changeTypeAll(checkboxTypeAll) {
    if (checkboxTypeAll.checked) {
        type = 'all';
        addCircuitsMarche();
    } else {
        type = 'notAll';
        removeCircuitsMarche();
    }
}

function changeType(checkboxType) {
    console.log('Change type');
    if (checkboxType.checked) {
        typePo = 'vttAvecPo';
        addPortions();
        addLegendPortions();
    } else {
        typePo = 'vttSansPo';
        removePortions();
        removeLegendPortions();
    }
}

function changeCheckboxCircCliq() {
    if (document.getElementById("cirqCliq").checked == true) {
        boolCircleCliq = true;
    } else {
        boolCircleCliq = false;
        resetAllTraces();
    }
}

function addLegendPortions() {
    const divTexteId = document.getElementById("legendPortions");
    divTexteId.classList.add("show");
}

function removeLegendPortions() {
    const divTexteId = document.getElementById("legendPortions");
    divTexteId.classList.remove("show");
}