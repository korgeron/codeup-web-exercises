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
        }).done(function (results) {
            console.log(results);
            $('card:nth-child(1)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[0].weather[0].icon + ".png')");
            $('card:nth-child(2)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[1].weather[0].icon + ".png')");
            $('card:nth-child(3)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[2].weather[0].icon + ".png')");
            $('card:nth-child(4)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[3].weather[0].icon + ".png')");
            $('card:nth-child(5)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[4].weather[0].icon + ".png')");

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


$('.map-style').hover(function () {
    $(this).css('padding-right', '4em');
}, function () {
    $(this).css('padding-right', '1em');
})
$('#mapIcon-ID').click(function () {
    $('cardcontent').toggleClass('toggle-cardcontent');
})
