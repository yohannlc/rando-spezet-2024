function addPortion(portionName, portionType, portionCoordinates, portionLineWitdh, portionLineOpacity) {
  
    if (portionType == "debrou") {
      portionColor = colorDebrou;
    } else if (portionType == "tronco") {
      portionColor = colorTronco;
    } else if (portionType == "py") {
      portionColor = colorPY;
    } else if (portionType == "cotes") {
      portionColor = colorCotes;
    } else if (portionType == "souff") {
      portionColor = colorSouff;
    } else if (portionName == "circuit35") {
        portionColor = color35;
    } else if (portionName == "circuit26") {
      portionColor = color26;
    } else if (portionName == "circuit42") {
      portionColor = color42;
    } else if (portionName == "circuit19") {
      portionColor = color19;
    } else if (portionName == "circuit17") {
      portionColor = color17;
    } else if (portionName == "circuit13") {
      portionColor = color13;
    } else if (portionName == "circuit8") {
      portionColor = color8;
    } else {
      portionColor = colorDebrou;
    }
    
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
  addPortion("verger1", "cotes", verger1, lineWitdhPortions, lineOpacityPortions);
  addPortion("verger2", "cotes", verger2, lineWitdhPortions, lineOpacityPortions);
  // addPortion("stang1", "debrou", stang1, lineWitdhPortions, lineOpacityPortions);
  // addPortion("hautKarnArVern", "py", hautKarnArVern, lineWitdhPortions, lineOpacityPortions);
  addPortion("cozic1", "tronco", cozic1, lineWitdhPortions, lineOpacityPortions);
  // addPortion("karnArVern", "py", karnArVern, lineWitdhPortions, lineOpacityPortions);
  addPortion("herbeAvantPoulancerf", "debrou", herbeAvantPoulancerf, lineWitdhPortions, lineOpacityPortions);
  // addPortion("champLise", "debrou", champLise, lineWitdhPortions, lineOpacityPortions);
  addPortion("avantKermariou", "cotes", avantKermariou, lineWitdhPortions, lineOpacityPortions);
  // addPortion("kerbellec1", "debrou", kerbellec1, lineWitdhPortions, lineOpacityPortions);
  // addPortion("kerbellec2", "debrou", kerbellec2, lineWitdhPortions, lineOpacityPortions);
  // addPortion("kerbellec3", "debrou", kerbellec3, lineWitdhPortions, lineOpacityPortions);
  // addPortion("kerbellec4", "debrou", kerbellec4, lineWitdhPortions, lineOpacityPortions);
  addPortion("henry", "debrou", henry, lineWitdhPortions, lineOpacityPortions);
  addPortion("derriereCudel", "cotes", derriereCudel, lineWitdhPortions, lineOpacityPortions);
  addPortion("avantGaecNormand", "cotes", avantGaecNormand, lineWitdhPortions, lineOpacityPortions);
  addPortion("taquetDuPeintre", "cotes", taquetDuPeintre, lineWitdhPortions, lineOpacityPortions);
  addPortion("apresCudel", "debrou", apresCudel, lineWitdhPortions, lineOpacityPortions);
  // addPortion("saintGoazec1", "tronco", saintGoazec1, lineWitdhPortionsPoly, lineOpacityPortions);
  // addPortion("saintGoazec3", "tronco", saintGoazec3, lineWitdhPortionsPoly, lineOpacityPortions);
  // addPortion("halage1", "py", halage1, lineWitdhPortions, lineOpacityPortions);
  addPortion("halageAvantPasserelle", "debrou", halageAvantPasserelle, lineWitdhPortions, lineOpacityPortions);
  // addPortion("remonterVersPalae", "py", remonterVersPalae, lineWitdhPortions, lineOpacityPortions);
  // addPortion("descenteKerdaffret", "py", descenteKerdaffret, lineWitdhPortions, lineOpacityPortions);
  addPortion("palae", "cotes", palae, lineWitdhPortions, lineOpacityPortions);
  // addPortion("boisPalae", "tronco", boisPalae, lineWitdhPortions, lineOpacityPortions);
  // addPortion("parcALapin", "cotes", parcALapin, lineWitdhPortions, lineOpacityPortions);
  // addPortion("apresPontPierre", "py", apresPontPierre, lineWitdhPortions, lineOpacityPortions);
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