// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
//let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

// Accessing the airport GeoJSON URL
let torontoHoods  = "https://raw.githubusercontent.com/ElizMishina/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satalliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps = {
    "Streets" : streets,
    "Satellite Streets": satalliteStreets,
};

  // Create the map object with center, zoom level and default layer.
  let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);