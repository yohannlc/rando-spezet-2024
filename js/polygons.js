// Fonctions
function addPolygon(polygonName, polygonCoordinates, polygonColor) {
  map.addSource(polygonName, {
    'type': 'geojson',
    'data': {
      "type": "Feature",
      "properties": {
        "name": polygonName
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": polygonCoordinates
      }
    }
  });
  map.addLayer({
    'id': polygonName,
    'type': 'fill',
    'source': polygonName,
    'paint': {
      'fill-color': polygonColor,
      'fill-opacity': 1
    }
  });

}

function addPolygonsVTT() {
  addPolygon("flecheDepart", flecheDepart, colorFleche27);
  addPolygon("flecheVersKerbellec", flecheVersKerbellec, colorFleche49);
  addPolygon("flecheFiles", flecheFiles, colorFleche49);
  addPolygon("flecheDebutPetitCircuit", flecheDebutPetitCircuit, colorFleche19);
  addPolygon("flechePatateSaintGoazec", flechePatateSaintGoazec, colorFleche37);
  addPolygon("flecheVillaLesPins", flecheVillaLesPins, colorFleche43);
  addPolygon("flecheDescSaintGoazec", flecheDescSaintGoazec, colorFleche49);
  addPolygon("remonterRouteSaintGoazec", remonterRouteSaintGoazec, colorFleche43);
  addPolygon("monterVersJojo", monterVersJojo, colorFleche27);
}

function addPolygonsMarche() {
  //
}