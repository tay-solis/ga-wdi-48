/*jQuery Version*/


/* Each slide in the slideshow consists of a header image, a title, an description, and a link to the proper page.*/
class Slide{
  constructor(imgUrl, title, desc, link){
    this.imgUrl = imgUrl;
    this.title = title;
    this.desc = desc;
    this.link = link;
  }
}

const codeolingoSlide = new Slide(
  '../img/slides/codeolingoSlide.png',
  'Code-o-Lingo',
  'A web app for testing beginning coding knowledge modelled after Duolingo\'s language-learning app',
  '#'
);

const syncSlide = new Slide(
  '../img/slides/syncSlide.png',
  'SYNC',
  'A short science fiction comic created for Stack Deck Press\'s We\'re Still Here anthology',
  '#'
);

const christineSlide = new Slide(
  '../img/slides/christineSlide.png',
  'Christine Cueto Portfolio',
  'A portfolio website designed for photographer Christine Cueto on Squarespace',
  '#'
);

const wanderlustSlide = new Slide(
  '../img/slides/wanderlistSlide.png',
  'Wanderlust',
  'A speculative fiction graphic novel about Mars Colonization',
  '#'
);

let slideshow = [];

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
