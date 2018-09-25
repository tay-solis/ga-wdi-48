var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

var appId = 'ab333b1178a411f24769bfab70823586';

$('form').on('submit', function(e){
  e.preventDefault();
  let city = $('#city').val();

  $.ajax({
    method: 'GET',
    url: `${weatherUrl}${city}&units=imperial&appid=${appId}`,
    success: function(response){
      console.log(response);
      let text = `The weather in ${response.name} is ${response.weather[0].description}, and it is ${response.main.temp} degrees Fahrenheit.`
      $('#temp').html(text);
    },
    error: function(){
      $('#temp').html('Something went wrong, try again.');
    }
  });
});
