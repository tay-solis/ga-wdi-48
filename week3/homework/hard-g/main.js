const giphyUrl = 'http://api.giphy.com/v1/gifs/search?q=';
const key = 'CKU2G88o3wsshAZsHsKUmMOGv0NZY6Pt';
const limit = 25;
let offset = 0;
let currentSearch = "";


$('.search').on("submit", function(e) {
  e.preventDefault();

  let newSearch = $('.gif-input').val();
  if (newSearch == currentSearch) offset += limit;
  currentSearch = newSearch;
  $.ajax({
    method: 'GET',
    url: `${giphyUrl}${currentSearch}&api_key=${key}&limit=${limit}&offset=${offset}`,
    success: function(response) {
      $('.gif-gallery').html('');
      if(response.data.length == 0){
        $('.gif-gallery').html('<img src="https://media.giphy.com/media/MJTOHmGiGPHgI/giphy.gif" /><h1>We couldn\'t find anything...</h1>')
      }
      for (let i = 0; i < response.data.length; i++) {
        $('.gif-gallery').append(`<img src="https://media.giphy.com/media/${response.data[i].id}/giphy.gif" />`);
      }
    },
    error: function(){
      $('.gif-gallery').html(`<img src="https://media.giphy.com/media/f0BaErqmljUd2/giphy.gif" /> <h1>Something went wrong!</h1>`)
    }
  });
});
