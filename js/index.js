/**
 * Note: JQuery in use
 * Author: Somtochukwu Ezerioha
 */

// Initialize and add the map
function initMap() {
    $.getJSON('https://ipapi.co/json/', function (data) {
        if (data.error) {
            console.log(data.error);
        } else {
            var address = data.ip;
            $('#card-body-IP').html(address);
            $('#card-body-location').html(`${data.city}, ${data.country_name}`);
            console.log(data)
            // api.openweathermap.org/data/2.5/weather?lat=35&lon=139
            $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&APPID=3ccc4c738883a33d8b32d9751899f575&units=metric`, function (body) {
                $('#card-body-report').html(` It is currently ${body.main.temp}°C out here in ${body.name}, ${body.sys.country} with ${body.weather[0].description}.`);
                console.log(body)
            })

            // The location of Client
            var location = {
                lat: data.latitude,
                lng: data.longitude
            };
            // The map, centered at Uluru
            var map = new google.maps.Map(
                document.getElementById('map'), {
                    zoom: 16,
                    center: location
                });
            // The marker, positioned at Uluru
            var marker = new google.maps.Marker({
                position: location,
                map: map
            });

        }
    })

}

// Button event for refreshing the page
$(".uk-button").click(function () {
    location.reload(true);
});


/**
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Playground +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

// Map Config

// var myLatlng = new google.maps.LatLng(data.latitude, data.longitude);
// var myOptions = {
//     zoom: 16,
//     center: myLatlng,
//     disableDefaultUI: true,
//     panControl: true,
//     zoomControl: true,
//     zoomControlOptions: {
//         style: google.maps.ZoomControlStyle.DEFAULT
//     },

//     mapTypeControl: true,
//     mapTypeControlOptions: {
//         style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
//     },
//     streetViewControl: true,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
// }
// var map = new google.maps.Map(document.getElementById("myGmaps"), myOptions);
// var marker = new google.maps.Marker({
//     position: myLatlng,
//     map: map,
//     title: "Your Location"
// }); 