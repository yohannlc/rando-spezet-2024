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
  addPoint("ravito1Cudel", "ravito", ravito1Cudel, colorRavito);
  addPoint("ravito2BallTrap", "ravito", ravito2BallTrap, colorRavito);
  addPoint("ravito3Kerdaffret", "ravito", ravito3Kerdaffret, colorRavito);
  addPoint("ravitoBisMaguet", "ravito", ravitoBisMaguet, colorRavito);
  // addPoint("ravitoChapelle", "ravito", ravitoChapelle, colorRavito);
  // addPoint("ravitoValentin", "ravito", ravitoValentin, colorRavito);
}