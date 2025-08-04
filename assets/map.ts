import { Popup, Source, Marker, Map, IControl, NavigationControlOptions, NavigationControl } from 'maplibre-gl';

function addMap(container: HTMLElement, center: [number, number], zoom: [number]) {
  var map = new Map({
    style: '../malazan_seven_cities.json',
    pitch: 20,
    bearing: 0,
    container: container,
    center: center,
    zoom: zoom
  });
}

function addMaps() {
  const maps = document.querySelectorAll(".map");
  for (const mapElt of maps) {
    const center = JSON.parse(mapElt.dataset.center);
    const zoom = JSON.parse(mapElt.dataset.zoom);
    addMap(mapElt, center, zoom);
  }
}

window.addEventListener('DOMContentLoaded', async (event) => {
  addMaps();
});
