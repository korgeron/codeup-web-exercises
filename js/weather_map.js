const URL = "https://api.openweathermap.org/data/2.5/onecall";
mapboxgl.accessToken = MAPBOX_API_KEY;

const MAP = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 9 // starting zoom
});


let click;
let testing;
$('#map-button-ID').click(function () {
    //FUNCTIONALITY FOR REMOVING A MARKER FOR A NEW ONE
    let searchAddress = $('#map-search-ID').val();
    if (click > 0 && searchAddress) {
        testing.remove()
    }

    geocode(searchAddress, MAPBOX_API_KEY).then(function (coordinates) {
        //FUNCTIONALITY FOR INCREASING CLICK / ADDITION TO REMOVING MARKER FUNCTIONALITY
        click = 0;
        click++

        $.get(URL, {
            appid: OPEN_WEATHER_KEY,
            lat: coordinates[1],
            lon: coordinates[0],
            unit: 'imperial'
        }).done(function (weather) {
            console.log(weather);
        })

        const MARKER = new mapboxgl.Marker()
            .setLngLat([coordinates[0], coordinates[1]])
            .addTo(MAP);
        testing = MARKER;
        //ADDS FLY TO FUNCTIONALITY
        MAP.flyTo({
            center: [coordinates[0], coordinates[1]],
            zoom: 10,
            speed: 1,
            curve: 1
        })
        console.log(click);

    })
});


