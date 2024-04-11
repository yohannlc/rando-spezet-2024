// window.addEventListener('DOMContentLoaded', function() {
//   var popup = document.getElementById('popup');
//   var closeButton = popup.querySelector('.close');

//   function hidePopup() {
//     popup.style.opacity = '0';
//     setTimeout(function() {
//       popup.style.display = 'none';
//     }, 500); // Durée de transition définie dans la propriété "transition" en CSS (0.5s)
//   }

//   popup.style.display = 'block';
//   closeButton.addEventListener('click', hidePopup);
//   setTimeout(hidePopup, 8000);
// });

// Enregistrer les éléments de la légende dans une variable
const legendItems = document.querySelectorAll('#legendCircuitsVTT div');

let items = [];
for (let i of legendItems) {
  items.push(i);
}

// Ajouter un événement de clic à chaque élément de la légende
legendItems.forEach(function(item, index) {
  item.addEventListener('click', function() {
    resetAllTraces();
    switch(index) {
      case 0:
        tabStatesCircuits.stateCircuit19[0] = !tabStatesCircuits.stateCircuit19[0];
        //afficherDivTexteId('Circuit 19');
        setOnlyOneTrace('circuit19', tabStatesCircuits.stateCircuit19[0], item);
        break;
      case 1:
        tabStatesCircuits.stateCircuit26[0] = !tabStatesCircuits.stateCircuit26[0];
        //afficherDivTexteId('Circuit 26');
        //ajouter la class "legendColor" à TOUTES les divs qui ont pour parent la div d'id "legendCircuitsVTT"
        document.getElementById("legendCircuitsVTT").querySelectorAll("div").forEach(function(item) {item.classList.add("legendColor");});
        setOnlyOneTrace('circuit26', tabStatesCircuits.stateCircuit26[0], item);
        break;
      case 2:
        tabStatesCircuits.stateCircuit35[0] = !tabStatesCircuits.stateCircuit35[0];
        //afficherDivTexteId('Circuit 35');
        setOnlyOneTrace('circuit35', tabStatesCircuits.stateCircuit35[0], item);
        break;
      case 3:
        tabStatesCircuits.stateCircuit42[0] = !tabStatesCircuits.stateCircuit42[0];
        //afficherDivTexteId('Circuit 42');
        setOnlyOneTrace('circuit42', tabStatesCircuits.stateCircuit42[0], item);
        break;
      default:
        return;
    }
  });
});

// Voir si on a coché la case "Circuits Cliquables"
// let checkboxCircCliq = document.getElementById("cirqCliq");
// checkboxCircCliq.checked = false;
boolCircleCliq = false;