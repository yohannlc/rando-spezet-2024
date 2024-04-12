// Fonction qui permet de mettre l'opacité de tous les circuits à lineOpacityBackCircuit sauf celui en argument
function setOnlyOneTrace(circuitName, circuitState, circuitItem) {
    console.log("circuitName: " + circuitName + " circuitState: " + circuitState + " circuitItem: " + circuitItem);
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
            divs[i].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' +  colorsCircuitsOut['VTT'][listeCircuitsVttWithCoords.length-1-i] + '; height: 3px;');
        }

        for (let i = 0; i < (listeCircuitsMarcheWithCoords.length); i++) {
            divs[i+listeCircuitsVttWithCoords.length].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorsCircuitsOut['Marche'][i] + '; height: 3px;');
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
            divs[i].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' +  colorsCircuitsOut['VTT'][listeCircuitsVttWithCoords.length-1-i] + '; height: 3px;');
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

// Fonction qui change le width de la line et sa légende en argument en bold et met reset le reste 
function stateLine(name, state, ite) {
    if (state) {
        map.setPaintProperty(name, 'line-width', lineWitdhCircuit+5);
        ite.classList.add('bold');
    } else {
        map.setPaintProperty(name, 'line-width', lineWitdhCircuit);
        ite.classList.remove('bold');
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