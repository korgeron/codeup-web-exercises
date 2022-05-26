const URL = 'https://api.openweathermap.org/data/3.0/onecall?'
$.ajax(URL ,{
    method: 'GET',
    lat: 98.4946,
    lon: 29.4252,
    appid: OPEN_WEATHER_KEY
}).done(function (data){
    console.log(data);
});



mapboxgl.accessToken = MAPBOX_API_KEY;
const MAP = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

