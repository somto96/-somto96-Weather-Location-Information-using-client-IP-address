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

            $.getJSON(`https://api.darksky.net/forecast/3bdd434415b8c7c870aa139be8feed37/${encodeURIComponent(data.latitude)}, ${encodeURIComponent(data.longitude)}?units=si`, function (body) {
                const dailyData = body.daily.data[0];
                $('#card-body-report').html(` ${dailyData.summary} It is currently ${body.currently.temperature}°C out here in ${body.timezone} with a high of ${dailyData.temperatureHigh}°C and a low of ${dailyData.temperatureLow}°C.
            There is a ${body.currently.precipProbability}% chance of rain`);
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