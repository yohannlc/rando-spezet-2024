// Ajouter des flèches le long des circuits

function getFlechesByEuclidienneDistance(listeCircuitsVttWithCoords, distanceBetweenFleches) {
    let listeFlechesCircuitsVtt = [] // [[x, y, angle], ...]
    for (let i = 0; i < listeCircuitsVttWithCoords.length; i++) {
        let last_retained_coords = listeCircuitsVttWithCoords[i].coords[0];
        let somme_distance = 0;

        // On parcourt les coordonnées du circuit sauf les 50 dernières
        for (let j = 0; j < listeCircuitsVttWithCoords[i].coords.length - 50; j++) {
            current_coords = listeCircuitsVttWithCoords[i].coords[j];

            // Ajout de la distance entre les deux points à la somme
            somme_distance += Math.sqrt((current_coords[0] - last_retained_coords[0]) ** 2 + (current_coords[1] - last_retained_coords[1]) ** 2);

            // Si la somme des distances est supérieure à la fréquence des flèches, on ajoute une flèche
            if (somme_distance > distanceBetweenFleches) {

                next_coords = listeCircuitsVttWithCoords[i].coords[j + 1];

                let angle = 0;
        
                // Selon les coordonnées des deux points, on calcul l'angle de la flèche
                if (current_coords[0] < next_coords[0] && current_coords[1] < next_coords[1]) {
                    angle = Math.atan((next_coords[1] - current_coords[1]) / (next_coords[0] - current_coords[0])) * 180 / Math.PI;
                } else if (current_coords[0] < next_coords[0] && current_coords[1] > next_coords[1]) {
                    angle = Math.atan((next_coords[1] - current_coords[1]) / (next_coords[0] - current_coords[0])) * 180 / Math.PI;
                } else if (current_coords[0] > next_coords[0] && current_coords[1] < next_coords[1]) {
                    angle = Math.atan((next_coords[1] - current_coords[1]) / (next_coords[0] - current_coords[0])) * 180 / Math.PI + 180;
                } else if (current_coords[0] > next_coords[0] && current_coords[1] > next_coords[1]) {
                    angle = Math.atan((next_coords[1] - current_coords[1]) / (next_coords[0] - current_coords[0])) * 180 / Math.PI + 180;
                } else if (current_coords[0] == next_coords[0] && current_coords[1] < next_coords[1]) {
                    angle = 90;
                } else if (current_coords[0] == next_coords[0] && current_coords[1] > next_coords[1]) {
                    angle = 270;
                } else if (current_coords[0] < next_coords[0] && current_coords[1] == next_coords[1]) {
                    angle = 0;
                } else if (current_coords[0] > next_coords[0] && current_coords[1] == next_coords[1]) {
                    angle = 180;
                }

                middleCoords = [(current_coords[0] + next_coords[0]) / 2, (current_coords[1] + next_coords[1]) / 2];
                
                circuitName = listeCircuitsVttWithCoords[i].id;
                listeFlechesCircuitsVtt.push([middleCoords[0], middleCoords[1], angle, circuitName]);

                // On réinitialise la somme des distances
                somme_distance = 0;
                // On garde les coordonnées actuelles pour les comparer avec les prochaines
                last_retained_coords = current_coords;
            }
        }
    }

    return listeFlechesCircuitsVtt;
}

function getFlechesChoosingCoords(listeCircuitsVttWithCoords, listeChoosenFleches) {
    let listeFlechesCircuitsVtt = [] // [[x, y, angle], ...]

    for (let i = 0; i < listeCircuitsVttWithCoords.length; i++) {

        // On parcourt les coordonnées du circuit sauf les 50 dernières
        for (let j = 0; j < listeCircuitsVttWithCoords[i].coords.length - 50; j++) {
            current_coords = listeCircuitsVttWithCoords[i].coords[j];

            // Si c'est un point choisi, on ajoute une flèche
            if (listeChoosenFleches[i].points.includes(j)) {

                next_coords = listeCircuitsVttWithCoords[i].coords[j + 1];

                let angle = 0;
        
                // Selon les coordonnées des deux points, on calcul l'angle de la flèche
                if (current_coords[0] < next_coords[0] && current_coords[1] < next_coords[1]) {
                    angle = Math.atan((next_coords[1] - current_coords[1]) / (next_coords[0] - current_coords[0])) * 180 / Math.PI;
                } else if (current_coords[0] < next_coords[0] && current_coords[1] > next_coords[1]) {
                    angle = Math.atan((next_coords[1] - current_coords[1]) / (next_coords[0] - current_coords[0])) * 180 / Math.PI;
                } else if (current_coords[0] > next_coords[0] && current_coords[1] < next_coords[1]) {
                    angle = Math.atan((next_coords[1] - current_coords[1]) / (next_coords[0] - current_coords[0])) * 180 / Math.PI + 180;
                } else if (current_coords[0] > next_coords[0] && current_coords[1] > next_coords[1]) {
                    angle = Math.atan((next_coords[1] - current_coords[1]) / (next_coords[0] - current_coords[0])) * 180 / Math.PI + 180;
                } else if (current_coords[0] == next_coords[0] && current_coords[1] < next_coords[1]) {
                    angle = 90;
                } else if (current_coords[0] == next_coords[0] && current_coords[1] > next_coords[1]) {
                    angle = 270;
                } else if (current_coords[0] < next_coords[0] && current_coords[1] == next_coords[1]) {
                    angle = 0;
                } else if (current_coords[0] > next_coords[0] && current_coords[1] == next_coords[1]) {
                    angle = 180;
                }

                middleCoords = [(current_coords[0] + next_coords[0]) / 2, (current_coords[1] + next_coords[1]) / 2];
                
                circuitName = listeCircuitsVttWithCoords[i].id;
                listeFlechesCircuitsVtt.push([middleCoords[0], middleCoords[1], angle, circuitName]);
            }
        }
    }

    return listeFlechesCircuitsVtt;
}

// Dessiner les flèches selon le tableau listeFlechesCircuitsVtt
function calculateFlecheCoords(listeFlechesCircuitsVtt) {
    let listeFlechesCircuitsVttWithCoords = [];

    for (let i = 0; i < listeFlechesCircuitsVtt.length; i++) {
        let x = listeFlechesCircuitsVtt[i][0];
        let y = listeFlechesCircuitsVtt[i][1];
        let angle = listeFlechesCircuitsVtt[i][2];

        // Longueur de la flèche
        let arrowLength = 0.0008;

        // Calcul des coordonnées des points de départ et d'arrivée des flèches
        let xf1 = x + arrowLength * Math.cos((angle + 135) * Math.PI / 180);
        let yf1 = y + arrowLength * Math.sin((angle + 135) * Math.PI / 180);

        let xf2 = x;
        let yf2 = y;

        let xf3 = x + arrowLength * Math.cos((angle - 135) * Math.PI / 180);
        let yf3 = y + arrowLength * Math.sin((angle - 135) * Math.PI / 180);

        circuitName = listeFlechesCircuitsVtt[i][3];
        listeFlechesCircuitsVttWithCoords.push([xf1, yf1, xf2, yf2, xf3, yf3, circuitName]);
    }

    return listeFlechesCircuitsVttWithCoords;
}


// Utiliser drawPortion pour dessiner les flèches
function drawFleches(listeFlechesCircuitsVttWithCoords) {
    // drawPortion(
    //     portionName, 
    //     portionType, 
    //     portionCoordinates, 
    //     portionLineWitdh, 
    //     portionLineOpacity, 
    //     portionColor
    // );

    for (let i = 0; i < listeFlechesCircuitsVttWithCoords.length; i++) {
        // Définir la couleur en fonction du nom du circuit et du tableau colorsCircuitsOut
        let circuitName = listeFlechesCircuitsVttWithCoords[i][6];
        for (let j = 0; j < listeCircuitsVttWithCoords.length; j++) {
            if (listeCircuitsVttWithCoords[j].id == circuitName) {
                color = colorsCircuitsOut['VTT'][listeCircuitsVttWithCoords.length-1-j];
            }
        }
        

        drawPortion(
            "fleche" + i,
            "fleche",
            [
                [
                    listeFlechesCircuitsVttWithCoords[i][0],
                    listeFlechesCircuitsVttWithCoords[i][1],
                    100
                ],
                [
                    listeFlechesCircuitsVttWithCoords[i][2],
                    listeFlechesCircuitsVttWithCoords[i][3],
                    100
                ],
                [
                    listeFlechesCircuitsVttWithCoords[i][4],
                    listeFlechesCircuitsVttWithCoords[i][5],
                    100
                ]
            ],
            5,
            1,
            color
        );
    }
}

// Fonction pour ajouter les flèches
function addFleches() {
    let listeFlechesCircuitsVtt = [] // [[x, y, angle], ...]

    let listeFlechesCircuitsVttWithCoords = [] // [[x, y, angle, xf1, yf1, xf2, yf2, xf3, yf3], ...]

    // listeFlechesCircuitsVtt = getFlechesByEuclidienneDistance(listeCircuitsVttWithCoords, distanceBetweenFleches);
    listeFlechesCircuitsVtt = getFlechesChoosingCoords(listeCircuitsVttWithCoords, listeChoosenFleches);
    listeFlechesCircuitsVttWithCoords = calculateFlecheCoords(listeFlechesCircuitsVtt);
    drawFleches(listeFlechesCircuitsVttWithCoords);
}