function addCircuitsVTT() {
    if ( mapStyle == 'mapbox://styles/mapbox/outdoors-v12') {
        for (let i = 0; i < listeCircuitsVtt.length; i++) {
            drawPortion(listeCircuitsVtt[i].id, "circuit", listeCircuitsVtt[i].coords, lineWidthCircuit, lineOpacityCircuit, listeCircuitsVtt[i].colorOut);
        }
    } else {
        for (let i = 0; i < listeCircuitsVtt.length; i++) {
            drawPortion(listeCircuitsVtt[i].id, "circuit", listeCircuitsVtt[i].coords, lineWidthCircuit, lineOpacityCircuit, listeCircuitsVtt[i].colorSat);
        }
    }
}

function addCircuitsMarche() {
    for (let i = 0; i < listeCircuitsMarcheWithCoords.length; i++) {
        drawPortion(listeCircuitsMarcheWithCoords[i].id, "circuit", listeCircuitsMarcheWithCoords[i].coords, lineWidthCircuit, lineOpacityCircuit, "red");
    }

    //display la div d'id =legendCircuitsMarche
    const divTexteId = document.getElementById("legendCircuitsMarche");
    divTexteId.classList.add("show");
}
  
function removeCircuitsMarche() {
    for (let i = 0; i < listeCircuitsMarcheWithCoords.length; i++) {
        map.removeLayer(listeCircuitsMarcheWithCoords[i].id);
        map.removeSource(listeCircuitsMarcheWithCoords[i].id);
    }

    //hide la div d'id =legendCircuitsMarche
    const divTexteId = document.getElementById("legendCircuitsMarche");
    divTexteId.classList.remove("show");
}

function removeCircuitsVTT() {
    for (let i = 0; i < listeCircuitsVtt.length; i++) {
        map.removeLayer(listeCircuitsVtt[i].id);
        map.removeSource(listeCircuitsVtt[i].id);
    }
}

// Fonction pour changer l'épaissseur des portions
function changeLineWidthCircuit(lineWidth) {
    for (let i = 0; i < listeCircuitsVtt.length; i++) {
        map.setPaintProperty(listeCircuitsVtt[i].id, 'line-width', lineWidth);
    }
    
    if (type == "all") {
        for (let i = 0; i < listeCircuitsMarcheWithCoords.length; i++) {
            map.setPaintProperty(listeCircuitsMarcheWithCoords[i].id, 'line-width', lineWidth);
        }
    }
}