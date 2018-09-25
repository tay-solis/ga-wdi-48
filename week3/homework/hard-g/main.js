const giphyUrl = 'http://api.giphy.com/v1/gifs/search?q=';
const key = 'CKU2G88o3wsshAZsHsKUmMOGv0NZY6Pt';
const limit = 25;

// $(document).on("ready", function(){
  $('.search').on("submit", function(e){
    e.preventDefault();

    let search = $('.gif-input').val();
    $.ajax({
      method:'GET',
      url:`${giphyUrl}${search}&api_key=${key}&limit=${limit}`,
      success: function(response){
        console.log(search);
        console.log(response);
        $('.gif-gallery').html('');
        for(let i = 0; i < response.data.length; i++){      
          $('.gif-gallery').append(`<img src="https://media.giphy.com/media/${response.data[i].id}/giphy.gif" />`);
        }
      }
    });
  });
// });
