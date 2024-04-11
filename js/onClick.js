// Fonction qui permet de cliquer sur les circuits
function circuitsClick(circuitName, map) {
    map.on('click', circuitName, function(e) {                // Lors d'un click sur le circuit
        if(boolCircleCliq) {                                      // Si la case "Circuits Cliquables" est cochée
        for (let i of Object.values(tabStatesCircuits)) {         // Pour chaque circuit du tableau tabStatesCircuits
            if (i[1] == circuitName) {                                // Si le nom du circuit est le même que celui du circuit cliqué
            if (i[0] == false) {                                      // Si le circuit n'est pas activé
                i[0] = true;                                              // On active le circuit
                afficherDivTexteId(circuitName);                          // On affiche le texte du circuit
                //stateLine(e.features[0].properties.name, i[0], items[Object.values(tabStatesCircuits).indexOf(i)]); // On met en gras le texte de la légende
                setOnlyOneTrace(e.features[0].properties.name, i[0], items[Object.values(tabStatesCircuits).indexOf(i)])
            } else {                                                  // Sinon
                i[0] = false;                                             // On désactive le circuit
                cacherDivTexteId();                                       // On cache le texte du circuit
                //stateLine(e.features[0].properties.name, i[0], items[Object.values(tabStatesCircuits).indexOf(i)]); // On met en normal le texte de la légende
                setOnlyOneTrace(e.features[0].properties.name, i[0], items[Object.values(tabStatesCircuits).indexOf(i)])
            }
            }
        }
        }
    });
  }