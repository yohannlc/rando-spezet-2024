function drawPortion(portionName, portionType, portionCoordinates, portionLineWitdh, portionLineOpacity, portionColor) {    
  console.log(portionName, portionType, portionCoordinates, portionLineWitdh, portionLineOpacity, portionColor);
  
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
  drawPortion("verger1", "cotes", verger1, lineWitdhPortions, lineOpacityPortions, colorCotes);
  drawPortion("verger2", "cotes", verger2, lineWitdhPortions, lineOpacityPortions, colorCotes);
  // drawPortion("stang1", "debrou", stang1, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // drawPortion("hautKarnArVern", "py", hautKarnArVern, lineWitdhPortions, lineOpacityPortions, colorPY_Out);
  drawPortion("cozic1", "tronco", cozic1, lineWitdhPortions, lineOpacityPortions, colorTronco);
  // drawPortion("karnArVern", "py", karnArVern, lineWitdhPortions, lineOpacityPortions, colorPY_Out);
  drawPortion("herbeAvantPoulancerf", "debrou", herbeAvantPoulancerf, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // drawPortion("champLise", "debrou", champLise, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  drawPortion("avantKermariou", "cotes", avantKermariou, lineWitdhPortions, lineOpacityPortions, colorCotes);
  // drawPortion("kerbellec1", "debrou", kerbellec1, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // drawPortion("kerbellec2", "debrou", kerbellec2, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // drawPortion("kerbellec3", "debrou", kerbellec3, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // drawPortion("kerbellec4", "debrou", kerbellec4, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  drawPortion("henry", "debrou", henry, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  drawPortion("derriereCudel", "cotes", derriereCudel, lineWitdhPortions, lineOpacityPortions, colorCotes);
  drawPortion("avantGaecNormand", "cotes", avantGaecNormand, lineWitdhPortions, lineOpacityPortions, colorCotes);
  drawPortion("taquetDuPeintre", "cotes", taquetDuPeintre, lineWitdhPortions, lineOpacityPortions, colorCotes);
  drawPortion("apresCudel", "debrou", apresCudel, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // drawPortion("saintGoazec1", "tronco", saintGoazec1, lineWitdhPortionsPoly, lineOpacityPortions, colorTronco);
  // drawPortion("saintGoazec3", "tronco", saintGoazec3, lineWitdhPortionsPoly, lineOpacityPortions, colorTronco);
  // drawPortion("halage1", "py", halage1, lineWitdhPortions, lineOpacityPortions, colorPY_Out);
  drawPortion("halageAvantPasserelle", "debrou", halageAvantPasserelle, lineWitdhPortions, lineOpacityPortions, colorDebrou_Out);
  // drawPortion("remonterVersPalae", "py", remonterVersPalae, lineWitdhPortions, lineOpacityPortions, colorPY_Out);
  // drawPortion("descenteKerdaffret", "py", descenteKerdaffret, lineWitdhPortions, lineOpacityPortions, colorPY_Out);
  drawPortion("palae", "cotes", palae, lineWitdhPortions, lineOpacityPortions, colorCotes);
  // drawPortion("boisPalae", "tronco", boisPalae, lineWitdhPortions, lineOpacityPortions, colorTronco);
  // drawPortion("parcALapin", "cotes", parcALapin, lineWitdhPortions, lineOpacityPortions, colorCotes);
  // drawPortion("apresPontPierre", "py", apresPontPierre, lineWitdhPortions, lineOpacityPortions, colorPY_Out);
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