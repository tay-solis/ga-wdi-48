/*jQuery Version*/

/*
Receives an image URL from NASA's Astronomy Picture of the Day API and sets it as the header background
If the API is down, it leaves the default background up.
*/
$.ajax({
  method: 'GET',
  url: 'https://api.nasa.gov/planetary/apod?api_key=dcBZXp3YhRP5hfMxGNxJqCVEGHfPENe04CAdJste',
  success: function(response){
    $('header').css("background-image", `url(${response.hdurl})`);
  },
  error: function(){
    $('header').css("background-image"), 'url("../img/default-bg.jpg")'
  }
});
