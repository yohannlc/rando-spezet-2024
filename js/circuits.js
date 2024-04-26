function addCircuitsVTT() {
    for (let i = 0; i < listeCircuitsVttWithCoords.length; i++) {
        drawPortion(listeCircuitsVttWithCoords[i].id, "circuit", listeCircuitsVttWithCoords[i].coords, lineWitdhCircuit, lineOpacityCircuit, colorsCircuitsOut['VTT'][listeCircuitsVttWithCoords.length-1-i]);
    }
}

function addCircuitsMarche() {
    for (let i = 0; i < listeCircuitsMarcheWithCoords.length; i++) {
        drawPortion(listeCircuitsMarcheWithCoords[i].id, "circuit", listeCircuitsMarcheWithCoords[i].coords, lineWitdhCircuit, lineOpacityCircuit, "red");
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
    for (let i = 0; i < listeCircuitsVttWithCoords.length; i++) {
        map.removeLayer(listeCircuitsVttWithCoords[i].id);
        map.removeSource(listeCircuitsVttWithCoords[i].id);
    }
}

// Fonction pour changer l'épaissseur des portions
function changeLineWidthCircuit(lineWidth) {
    for (let i = 0; i < listeCircuitsVttWithCoords.length; i++) {
        map.setPaintProperty(listeCircuitsVttWithCoords[i].id, 'line-width', lineWidth);
    }
    
    if (type == "all") {
        for (let i = 0; i < listeCircuitsMarcheWithCoords.length; i++) {
            map.setPaintProperty(listeCircuitsMarcheWithCoords[i].id, 'line-width', lineWidth);
        }
    }
}