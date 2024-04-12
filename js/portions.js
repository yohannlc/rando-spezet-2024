function addPortion(portionName, portionType, portionCoordinates, portionLineWitdh, portionLineOpacity, portionColor) {    
    map.addSource(portionName, {
      'type': 'geojson',
      'data': {
        "type": "Feature",
        "properties": {
          "name": portionName
        },
        "geometry": {
          "coordinates": portionCoordinates,
          "type": "LineString"
        }
      }
    });
    map.addLayer({
      'id': portionName,
      'type': 'line',
      'source': portionName,
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': portionColor,
        'line-width': portionLineWitdh,
        'line-opacity': portionLineOpacity
      }
    });
  
    if(portionType === "circuit") {
      circuitHoverEnter(portionName);
      circuitHoverLeave(portionName);
    } else {
      portionsHoverEnter(portionName);
      portionsHoverLeave(portionName);
      //portionsClick(portionName);
    }
}
  
function addPortions() {
  addPortion("verger1", "cotes", verger1, lineWitdhPortions, lineOpacityPortions, colorCotes);
  addPortion("verger2", "cotes", verger2, lineWitdhPortions, lineOpacityPortions, colorCotes);
  // addPortion("stang1", "debrou", stang1, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // addPortion("hautKarnArVern", "py", hautKarnArVern, lineWitdhPortions, lineOpacityPortions, colorPY_Out);
  addPortion("cozic1", "tronco", cozic1, lineWitdhPortions, lineOpacityPortions, colorTronco);
  // addPortion("karnArVern", "py", karnArVern, lineWitdhPortions, lineOpacityPortions, colorPY_Out);
  addPortion("herbeAvantPoulancerf", "debrou", herbeAvantPoulancerf, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // addPortion("champLise", "debrou", champLise, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  addPortion("avantKermariou", "cotes", avantKermariou, lineWitdhPortions, lineOpacityPortions, colorCotes);
  // addPortion("kerbellec1", "debrou", kerbellec1, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // addPortion("kerbellec2", "debrou", kerbellec2, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // addPortion("kerbellec3", "debrou", kerbellec3, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // addPortion("kerbellec4", "debrou", kerbellec4, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  addPortion("henry", "debrou", henry, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  addPortion("derriereCudel", "cotes", derriereCudel, lineWitdhPortions, lineOpacityPortions, colorCotes);
  addPortion("avantGaecNormand", "cotes", avantGaecNormand, lineWitdhPortions, lineOpacityPortions, colorCotes);
  addPortion("taquetDuPeintre", "cotes", taquetDuPeintre, lineWitdhPortions, lineOpacityPortions, colorCotes);
  addPortion("apresCudel", "debrou", apresCudel, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // addPortion("saintGoazec1", "tronco", saintGoazec1, lineWitdhPortionsPoly, lineOpacityPortions, colorTronco);
  // addPortion("saintGoazec3", "tronco", saintGoazec3, lineWitdhPortionsPoly, lineOpacityPortions, colorTronco);
  // addPortion("halage1", "py", halage1, lineWitdhPortions, lineOpacityPortions, colorPY_Out);
  addPortion("halageAvantPasserelle", "debrou", halageAvantPasserelle, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // addPortion("remonterVersPalae", "py", remonterVersPalae, lineWitdhPortions, lineOpacityPortions, colorPY_Out);
  // addPortion("descenteKerdaffret", "py", descenteKerdaffret, lineWitdhPortions, lineOpacityPortions, colorPY_Out);
  addPortion("palae", "cotes", palae, lineWitdhPortions, lineOpacityPortions, colorCotes);
  // addPortion("boisPalae", "tronco", boisPalae, lineWitdhPortions, lineOpacityPortions, colorTronco);
  // addPortion("parcALapin", "cotes", parcALapin, lineWitdhPortions, lineOpacityPortions, colorCotes);
  // addPortion("apresPontPierre", "py", apresPontPierre, lineWitdhPortions, lineOpacityPortions, colorPY_Out);
}

function removePortion(portionName) {
  map.removeLayer(portionName);
  map.removeSource(portionName);
}
  
function removePortions() {
  removePortion("verger1");
  removePortion("verger2");
  // removePortion("hautKarnArVern");
  removePortion("herbeAvantPoulancerf");
  // removePortion("stang1");
  // removePortion("champLise");
  removePortion("avantKermariou");
  removePortion("henry");
  removePortion("derriereCudel");
  removePortion("avantGaecNormand");
  removePortion("taquetDuPeintre");
  removePortion("apresCudel");
  removePortion("cozic1");
  // removePortion("karnArVern");
  // removePortion("kerbellec1");
  // removePortion("kerbellec2");
  // removePortion("kerbellec3");
  // removePortion("kerbellec4");
  // removePortion("saintGoazec1");
  // removePortion("saintGoazec3");
  // removePortion("halage1");
  removePortion("halageAvantPasserelle");
  // removePortion("descenteKerdaffret");
  // removePortion("remonterVersPalae");
  removePortion("palae");
  // removePortion("boisPalae");
  // removePortion("parcALapin");
  // removePortion("apresPontPierre");
}