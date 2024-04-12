function resetAllTraces() {
    let j = 0;
    for (let circuit of Object.values(tabStatesCircuits)) {               // Pour chaque circuit
      if (circuit[0]) {                                                     // Si la trace est activée
        circuit[0] = false;                                                   // On remet l'état de la trace à false
        map.setPaintProperty(circuit[1], 'line-width', lineWitdhCircuit);     // On remet la largeur de la ligne à la normale
        stateLine(circuit[1], circuit[0], items[j]);                                
        cacherDivTexteId();
      } else {
        if (!(type !="all" && (circuit[1] == "circuit8" || circuit[1] == "circuit13" || circuit[1] == "circuit17"))) {
          map.setPaintProperty(circuit[1], 'line-opacity', lineOpacityCircuit); // On remet l'opacité de la ligne à la normale
        }
        
      } 
      j++;                                                            // Permet de suivre quel élément du tableau tabStatesCircuits on est en train de traiter
    }
  
    // Pour chaque portion du tableau tabStatesPortions
    // reset = true;
    // for (let i = 0; i < tabStatesPortions.length; i+=2) {
    //   if (tabStatesPortions[i+1]) {                                                     // Si la trace est activée
    //     tabStatesPortions[i+1] = false;                                                   // On remet l'état de la trace à false
    //     cacherDivTexteId();
    //     map.setPaintProperty(tabStatesPortions[i], 'line-width', lineWitdhPortions);      // On remet la largeur de la ligne à la normale
    //   }
    // }
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