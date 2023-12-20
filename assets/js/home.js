var layouts = [
  "background",
  "hero",
  "profile",
  "page",
  "card"
]


var currentLayout = 0

function switchHomeLayout() {

  var old = currentLayout
  currentLayout = currentLayout == layouts.length - 1 ? 0 : currentLayout + 1

  var oldDiv = document.getElementById(layouts[old])
  var currentDiv = document.getElementById(layouts[currentLayout])
  const layoutCode = document.querySelectorAll("code[id=layout]");

  currentDiv.style.display = "block";
  oldDiv.style.display = "none";
  layoutCode.forEach(function (el) {
    el.innerText = layouts[currentLayout];
  });

}

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("#switch-layout-button").forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      switchHomeLayout();
    })
  );
});

var list_config = [
  "CardViewProse",
  "CardViewScreenWidth",
  "NormalView"
]

var titles = {
  "CardViewProse" : "card view with constrained width",
  "CardViewScreenWidth" : "card view with full width",
  "NormalView" : "standard list view"
}

var currentConfig = 0

function switchList() {

  var old = currentConfig
  currentConfig = currentConfig == list_config.length - 1 ? 0 : currentConfig + 1

  var oldDiv = document.getElementById(list_config[old])
  var currentDiv = document.getElementById(list_config[currentConfig])
  const configCode = document.querySelectorAll("code[id=config]");

  currentDiv.style.display = "block";
  oldDiv.style.display = "none";

  configCode.forEach(function (el) {
    el.innerText = titles[list_config[currentConfig]];
  });

}

// window.addEventListener("DOMContentLoaded", (event) => {
//   document.querySelectorAll("#switch-config-button").forEach((button) =>
//     button.addEventListener("click", function (e) {
//       e.preventDefault();
//       switchList();
//     })
//   );
// });

document.addEventListener("DOMContentLoaded", function () {
  
  // Define variables for the map container and switch button
  var mapContainer_ = document.querySelector(".map"); // selects an HTML element with class map and saves it as "mapContainer_"
  // mapContainer_.style.borderRadius = "0";
  // mapContainer_.style.display = "none";

  var mymap = L.map('map', {
    minZoom: 2 // Set the minimum zoom level
  }).setView([46.5197, 6.6323],10);


  // Set the maximum bounds of the map to prevent repetitions
  var southWest = L.latLng(-90, -180);
  var northEast = L.latLng(90, 180);
  var bounds = L.latLngBounds(southWest, northEast);
  mymap.setMaxBounds(bounds);
  mymap.on('drag', function () {
      mymap.panInsideBounds(bounds, { animate: false });
  });


  // mymap.createPane('labels');
  // mymap.getPane('labels').style.zIndex = 650;
  // mymap.getPane('labels').style.pointerEvents = 'none';


  var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetMap, ©CartoDB'
  }).addTo(mymap);

  positron.setZIndex(10);

  var div = L.DomUtil.get('no-scrolling-clicking');
  L.DomEvent.on(div, 'mousewheel', L.DomEvent.stopPropagation);
  L.DomEvent.on(div, 'click', L.DomEvent.stopPropagation);


  // mapContainer_.addEventListener('mouseover', function() {
  //   mymap.dragging.disable();
  // });

  // mapContainer_.addEventListener('mouseout', function() {
  //   mymap.dragging.enable();
  // });

  mymap.on('dragstart', function (event) {
    event.preventDefault();
  });

  var mapContainer = document.getElementById('map');
  mapContainer.style.zIndex = 1;


});