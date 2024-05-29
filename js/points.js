// Fonctions
function addPoint(pointName, pointType, pointCoordinates, pointColor) {
  map.addSource(pointName, {
    'type': 'geojson',
    'data': {
      "type": "Feature",
      "properties": {
        "name": pointName
      },
      "geometry": {
        "coordinates": pointCoordinates,
        "type": "Point"
      }
    }
  });
  map.addLayer({
    'id': pointName,
    'type': 'circle',
    'source': pointName,
    'paint': {
      'circle-radius': circleRadius,
      'circle-color': pointColor
    }
  });

  if(pointType === "ravito") {
    pointHoverEnter(pointName);
    pointHoverLeave(pointName);
  }
}

function addPoints() {
  addPoint("ravitoTrevillyHuella", "ravito", ravitoTrevilyHuella, colorRavito);
  addPoint("ravitoVirageStGoazec", "ravito", ravitoVirageStGoazec, colorRavito);
  addPoint("ravitoCudel", "ravito", ravitoCudel, colorRavito);
  addPoint('ravitoValentin', 'ravito', ravitoValentin, colorRavito);
  addPoint('ravitoMarion', 'ravito', ravitoMarion, colorRavito);
}