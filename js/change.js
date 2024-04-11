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

        divs[0].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color19_Sat + '; height: 3px;');
        divs[1].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color26_Sat + '; height: 3px;');
        divs[2].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color35_Sat + '; height: 3px;');
        divs[3].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color42_Sat + '; height: 3px;');
        divs[4].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color8_Sat + '; height: 3px;');
        divs[5].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color13_Sat + '; height: 3px;');
        divs[6].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color17_Sat + '; height: 3px;');
        divs[7].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorDebrou_Sat + '; height: 3px;');
        divs[8].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorSouff_Sat + '; height: 3px;');
        divs[9].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorTronco_Sat + '; height: 3px;');
        divs[10].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorPY_Sat + '; height: 3px;');
    } else {
        //enlever la classe "legend-satellite" à la div d'id "legend"
        divLegend.classList.remove("legend-satellite");
        divParams.classList.remove("params-satellite");

        divs[0].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color19_Out + '; height: 3px;');
        divs[1].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color26_Out + '; height: 3px;');
        divs[2].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color35_Out + '; height: 3px;');
        divs[3].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color42_Out + '; height: 3px;');
        divs[4].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color8_Out + '; height: 3px;');
        divs[5].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color13_Out + '; height: 3px;');
        divs[6].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + color17_Out + '; height: 3px;');
        divs[7].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorDebrou_Out + '; height: 3px;');
        divs[8].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorSouff_Out + '; height: 3px;');
        divs[9].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorTronco_Out + '; height: 3px;');
        divs[10].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorPY_Out + '; height: 3px;');
    }
    divs[11].getElementsByTagName('span')[0].setAttribute('style', 'background-color: ' + colorCotes + '; height: 3px;');
}

function changeConstants() {
    if (mapStyle == 'mapbox://styles/mapbox/outdoors-v12') {
        color42 = color42_Out;
        color19 = color19_Out;
        color26 = color26_Out;
        color35 = color35_Out;
        color8 = color8_Out;
        color13 = color13_Out;
        color17 = color17_Out;
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

        colorFleche1 = color42_Out;
        colorFleche2 = color26_Out;
    } else { // mapbox://styles/mapbox/satellite-streets-v12
        color42 = color42_Sat;
        color19 = color19_Sat;
        color26 = color26_Sat;
        color35 = color35_Sat;
        color8 = color8_Sat;
        color13 = color13_Sat;
        color17 = color17_Sat;

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

        colorFleche1 = color42_Sat;
        colorFleche2 = color26_Sat;
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