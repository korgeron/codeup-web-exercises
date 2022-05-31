const URL = "https://api.openweathermap.org/data/2.5/onecall";
mapboxgl.accessToken = MAPBOX_API_KEY;

const MAP = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

const BEGINNING_MARKER = new mapboxgl.Marker()
    .setLngLat([-98.4946, 29.4252])
    .addTo(MAP);

$.get(URL,{
    appid: OPEN_WEATHER_KEY,
    lon: -98.4946,
    lat: 29.4252,
    units: 'imperial'

}).done(function (results){
    console.log(results);

//TODO: adds icons to card
    $('card:nth-child(1)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[0].weather[0].icon + ".png')");
    $('card:nth-child(2)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[1].weather[0].icon + ".png')");
    $('card:nth-child(3)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[2].weather[0].icon + ".png')");
    $('card:nth-child(4)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[3].weather[0].icon + ".png')");
    $('card:nth-child(5)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[4].weather[0].icon + ".png')");

    //TODO: adds weather description to card
    $('card:nth-child(1)').children('cardbody').children('description').html(results.daily[0].weather[0].description);
    $('card:nth-child(2)').children('cardbody').children('description').html(results.daily[1].weather[0].description);
    $('card:nth-child(3)').children('cardbody').children('description').html(results.daily[2].weather[0].description);
    $('card:nth-child(4)').children('cardbody').children('description').html(results.daily[3].weather[0].description);
    $('card:nth-child(5)').children('cardbody').children('description').html(results.daily[4].weather[0].description);

    //TODO: adds temp to card
    $('card:nth-child(1)').children('cardbody').children('temp').html('max: ' + results.daily[0].temp.max.toFixed(0) + '°F' + '\nmin: ' + results.daily[0].temp.min.toFixed(0) + '°F');
    $('card:nth-child(2)').children('cardbody').children('temp').html('max: ' + results.daily[1].temp.max.toFixed(0) + '°F' + '\nmin: ' + results.daily[1].temp.min.toFixed(0) + '°F');
    $('card:nth-child(3)').children('cardbody').children('temp').html('max: ' + results.daily[2].temp.max.toFixed(0) + '°F' + '\nmin: ' + results.daily[2].temp.min.toFixed(0) + '°F');
    $('card:nth-child(4)').children('cardbody').children('temp').html('max: ' + results.daily[3].temp.max.toFixed(0) + '°F' + '\nmin: ' + results.daily[3].temp.min.toFixed(0) + '°F');
    $('card:nth-child(5)').children('cardbody').children('temp').html('max: ' + results.daily[4].temp.max.toFixed(0) + '°F' + '\nmin: ' + results.daily[4].temp.min.toFixed(0) + '°F');

    //TODO: adds feelslike value to cards
    $('card:nth-child(1)').children('cardbody').children('feelslike').html('Feels like \n' + results.daily[0].feels_like.day.toFixed(0) + '°F');
    $('card:nth-child(2)').children('cardbody').children('feelslike').html('Feels like \n' + results.daily[1].feels_like.day.toFixed(0) + '°F');
    $('card:nth-child(3)').children('cardbody').children('feelslike').html('Feels like \n' + results.daily[2].feels_like.day.toFixed(0) + '°F');
    $('card:nth-child(4)').children('cardbody').children('feelslike').html('Feels like \n' + results.daily[3].feels_like.day.toFixed(0) + '°F');
    $('card:nth-child(5)').children('cardbody').children('feelslike').html('Feels like \n' + results.daily[4].feels_like.day.toFixed(0) + '°F');


    //TODO: adds humidity values to card
    $('card:nth-child(1)').children('cardbody').children('humidity').html('humidity: ' + results.daily[0].humidity + '%');
    $('card:nth-child(2)').children('cardbody').children('humidity').html('humidity: ' + results.daily[1].humidity + '%');
    $('card:nth-child(3)').children('cardbody').children('humidity').html('humidity: ' + results.daily[2].humidity + '%');
    $('card:nth-child(4)').children('cardbody').children('humidity').html('humidity: ' + results.daily[3].humidity + '%');
    $('card:nth-child(5)').children('cardbody').children('humidity').html('humidity: ' + results.daily[4].humidity + '%');

    //TODO: add values to current weather card
    $('currenthead').css("background-image", "url('http://openweathermap.org/img/w/" + results.current.weather[0].icon + ".png')");
    $('currentdescription').html(results.current.weather[0].description);
    $('currenttemp').html(results.current.temp.toFixed(0) + '°F');
    $('currentfeelslike').html('feels like: ' + results.current.feels_like.toFixed(0) + '°F');
    $('currenthumidity').html('humidity: ' + results.current.humidity.toFixed(0) + '%');
})

//TODO: click counter initiation for removing markers
let click;
let marker;



//TODO: function data for searching places on the map
$('#map-button-ID').click(function () {

    //FUNCTIONALITY FOR REMOVING A MARKER FOR A NEW ONE
    let searchAddress = $('#map-search-ID').val();
    if (click > 0 && searchAddress) {
        marker.remove()
    }

    geocode(searchAddress, MAPBOX_API_KEY).then(function (coordinates) {
        //FUNCTIONALITY FOR INCREASING CLICK / ADDITION TO REMOVING MARKER FUNCTIONALITY
        click = 0;
        click++;
        //TODO: removes beginning marker here
        if (click === 1){
            BEGINNING_MARKER.remove();
        }
        $.get(URL, {
            appid: OPEN_WEATHER_KEY,
            lat: coordinates[1],
            lon: coordinates[0],
            units: 'imperial'
        }).done(function (results) {


            //TODO: adds icons to card
            $('card:nth-child(1)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[0].weather[0].icon + ".png')");
            $('card:nth-child(2)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[1].weather[0].icon + ".png')");
            $('card:nth-child(3)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[2].weather[0].icon + ".png')");
            $('card:nth-child(4)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[3].weather[0].icon + ".png')");
            $('card:nth-child(5)').children('cardhead').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[4].weather[0].icon + ".png')");

            //TODO: adds weather description to card
            $('card:nth-child(1)').children('cardbody').children('description').html(results.daily[0].weather[0].description);
            $('card:nth-child(2)').children('cardbody').children('description').html(results.daily[1].weather[0].description);
            $('card:nth-child(3)').children('cardbody').children('description').html(results.daily[2].weather[0].description);
            $('card:nth-child(4)').children('cardbody').children('description').html(results.daily[3].weather[0].description);
            $('card:nth-child(5)').children('cardbody').children('description').html(results.daily[4].weather[0].description);

            //TODO: adds temp to card
            $('card:nth-child(1)').children('cardbody').children('temp').html('max: ' + results.daily[0].temp.max.toFixed(0) + '°F' + '\nmin: ' + results.daily[0].temp.min.toFixed(0) + '°F');
            $('card:nth-child(2)').children('cardbody').children('temp').html('max: ' + results.daily[1].temp.max.toFixed(0) + '°F' + '\nmin: ' + results.daily[1].temp.min.toFixed(0) + '°F');
            $('card:nth-child(3)').children('cardbody').children('temp').html('max: ' + results.daily[2].temp.max.toFixed(0) + '°F' + '\nmin: ' + results.daily[2].temp.min.toFixed(0) + '°F');
            $('card:nth-child(4)').children('cardbody').children('temp').html('max: ' + results.daily[3].temp.max.toFixed(0) + '°F' + '\nmin: ' + results.daily[3].temp.min.toFixed(0) + '°F');
            $('card:nth-child(5)').children('cardbody').children('temp').html('max: ' + results.daily[4].temp.max.toFixed(0) + '°F' + '\nmin: ' + results.daily[4].temp.min.toFixed(0) + '°F');

            //TODO: adds feelslike value to cards
            $('card:nth-child(1)').children('cardbody').children('feelslike').html('Feels like \n' + results.daily[0].feels_like.day.toFixed(0) + '°F');
            $('card:nth-child(2)').children('cardbody').children('feelslike').html('Feels like \n' + results.daily[1].feels_like.day.toFixed(0) + '°F');
            $('card:nth-child(3)').children('cardbody').children('feelslike').html('Feels like \n' + results.daily[2].feels_like.day.toFixed(0) + '°F');
            $('card:nth-child(4)').children('cardbody').children('feelslike').html('Feels like \n' + results.daily[3].feels_like.day.toFixed(0) + '°F');
            $('card:nth-child(5)').children('cardbody').children('feelslike').html('Feels like \n' + results.daily[4].feels_like.day.toFixed(0) + '°F');


            //TODO: adds humidity values to card
            $('card:nth-child(1)').children('cardbody').children('humidity').html('humidity: ' + results.daily[0].humidity + '%');
            $('card:nth-child(2)').children('cardbody').children('humidity').html('humidity: ' + results.daily[1].humidity + '%');
            $('card:nth-child(3)').children('cardbody').children('humidity').html('humidity: ' + results.daily[2].humidity + '%');
            $('card:nth-child(4)').children('cardbody').children('humidity').html('humidity: ' + results.daily[3].humidity + '%');
            $('card:nth-child(5)').children('cardbody').children('humidity').html('humidity: ' + results.daily[4].humidity + '%');

            //TODO: add values to current weather card
            $('currenthead').css("background-image", "url('http://openweathermap.org/img/w/" + results.current.weather[0].icon + ".png')");
            $('currentdescription').html(results.current.weather[0].description);
            $('currenttemp').html(results.current.temp.toFixed(0) + '°F');
            $('currentfeelslike').html('feels like: ' + results.current.feels_like.toFixed(0) + '°F');
            $('currenthumidity').html('humidity: ' + results.current.humidity.toFixed(0) + '%');
        })


        const MARKER = new mapboxgl.Marker()
            .setLngLat([coordinates[0], coordinates[1]])
            .addTo(MAP);
        marker = MARKER;
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
    $('cardbox').toggleClass('toggle-cardbox');
    $('currentweatherbox').toggleClass('toggle-currentweatherbox');
})
