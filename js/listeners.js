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
        setOnlyOneTrace('circuit19', tabStatesCircuits.stateCircuit19[0], item);
        break;
      case 1:
        tabStatesCircuits.stateCircuit27[0] = !tabStatesCircuits.stateCircuit27[0];
        setOnlyOneTrace('circuit27', tabStatesCircuits.stateCircuit27[0], item);
        break;
      case 2:
        tabStatesCircuits.stateCircuit37[0] = !tabStatesCircuits.stateCircuit37[0];
        setOnlyOneTrace('circuit37', tabStatesCircuits.stateCircuit37[0], item);
        break;
      case 3:
        tabStatesCircuits.stateCircuit43[0] = !tabStatesCircuits.stateCircuit43[0];
        setOnlyOneTrace('circuit43', tabStatesCircuits.stateCircuit43[0], item);
        break;
      case 4:
        tabStatesCircuits.stateCircuit49[0] = !tabStatesCircuits.stateCircuit49[0];
        setOnlyOneTrace('circuit49', tabStatesCircuits.stateCircuit49[0], item);
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