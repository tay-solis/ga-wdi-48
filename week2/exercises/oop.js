let currentlyListening = {
  album: "Wild Honey",
  artist: "The Beach Boys",
  releaseDate: "1967",
  label: "Capitol Records"
}

let currentlyListening2 = new Object();
currentlyListening2.album = "Wild Honey";
currentlyListening2.artist = "The Beach Boys";
currentlyListening2.releaseDate = 1967;
currentlyListening2.label = "Capitol Records";

// var currentlyListening = new Object();
// currentlyListening["album"] = "Wild Honey";
// currentlyListening["artist"] = "The Beach Boys";
// currentlyListening["releaseDate"] = 1967;
// currentlyListening["label"] = "Capitol Records";

//

function Flower(color, petals, smell){
  this.color = color;
  this.petals = petals;
  this.smell = smell;
};

Flower.prototype = {
  bloom: function (){
    console.log("Hewwo");
  },
  wilt: function(){
    this.petals -= 1;
  },
  water: function(){
    this.petals += 1;
  }
}

let rose = new Flower("red", 100, "good");
console.log(rose);
rose.wilt();
console.log(rose.petals);
rose.water();
console.log(rose.petals);
