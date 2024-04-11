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

function addPolygons() {
  addPolygon("fleche1", fleche1, colorFleche45f);
  addPolygon("fleche2", fleche2, colorFleche35);
  addPolygon("fleche1_25", fleche1_25, colorFleche25);
  addPolygon("fleche2_25", fleche2_25, colorFleche25);
  addPolygon("fleche3_25", fleche3_25, colorFleche25);
  addPolygon("fleche4_25", fleche4_25, colorFleche25);
  addPolygon("fleche2_45", fleche2_45, colorFleche45);
  addPolygon("fleche2_45f", fleche2_45f, colorFleche45f);
  addPolygon("fleche1_35", fleche1_35, colorFleche35);
  addPolygon("fleche3_45", fleche3_45, colorFleche45);
  addPolygon("fleche3_45f", fleche3_45f, colorFleche45f);
  addPolygon("fleche3_35", fleche3_35, colorFleche35);
  addPolygon("fleche4_45f", fleche4_45f, colorFleche45);
  addPolygon("fleche5_45f", fleche5_45f, colorFleche45);
  addPolygon("fleche2_35", fleche2_35, colorFleche35);
  addPolygon("fleche5_25", fleche5_25, colorFleche25);
  addPolygon("fleche4_45", fleche4_45, colorFleche45);
}

function addPolygonsAll() {
  addPolygon("flecheMarche1", flecheMarche1, color13_Sat);
  addPolygon("flecheMarche2", flecheMarche2, color8_Sat);
  addPolygon("flecheMarche3", flecheMarche3, color17_Sat);
}