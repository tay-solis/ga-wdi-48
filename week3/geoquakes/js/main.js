var weekly_quakes_endpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

const today = new Date();

let map;

const quakeIcon = {
  url: './img/earthquakephoto.png',
  scaledSize: new google.maps.Size(40, 40)
}

function addMarker(location){
  let marker = new google.maps.Marker({
    position:location,
    map: map,
    icon: quakeIcon
  });
}
/*
Takes in a past date and converts it to a string:
if < 24 hours ago, returns x hours ago
if > 24 hours but < 2 days, returns 1 day ago
if >2 days returns x days ago
*/
function timeAgo(past){
  let time = Math.floor((today - past)/(1000* 60 * 60));
  if (time < 1){
    time = Math.floor((today - past)/(1000* 60));
    return `${time} minutes ago`;
  }
  if (time < 24){
    return`${time} hours ago`;
  } else{
    time = Math.floor(time/24);
    if (time === 1) {
      return `${time} day ago`;
    }else{
      return `${time} days ago`;
    }
  }
}

$.ajax({
  method: "GET",
  url: weekly_quakes_endpoint,
  success: function(response) {
    for (let i = 0; i < response.features.length; i++) {
      let quake = response.features[i];

      let mag = quake.properties.mag;
      let grade = ""
      if (mag < 5){
        grade = 'med';
      } else if (mag >= 5 && mag <6){
        grade = 'big';
      } else {
        grade = 'ultra';
      }

      let place = quake.properties.place
      
      let quakeDate = new Date(quake.properties.time);
      let timeStr = timeAgo(quakeDate);

      $('#info').append(`<p><span class="${grade}">M ${mag}</span> // ${place} // ${timeStr}</p>`);

      addMarker({
        lng: quake.geometry.coordinates[0],
        lat: quake.geometry.coordinates[1]
      });

    }
  }
});

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 37.78,
      lng: -122.44
    },
    zoom: 4
  });
  let marker = new google.maps.Marker({
    position:{
      lat: 37.78,
      lng: -122.44},
    map: map,
  });
}

initMap();
