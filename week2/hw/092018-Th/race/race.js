const startBtn = document.querySelector(".start");
const game = document.querySelector(".game");
const computer = document.querySelector(".computer");
const planet = document.querySelector(".planet");
const player = document.querySelector(".player");
const startScreen = document.querySelector(".startScreen")

let spin = 45;
let winState = true;

//Vanilla JS alternatives to jQuery fadeIn/fadeOut
const fadeOut = (elm) => {;
  setInterval(function() {
    if (!elm.style.opacity) elm.style.opacity = 1;
    if (elm.style.opacity > 0) {
      elm.style.opacity -= 0.1;
    } else {
      clearInterval();
    }
  }, 100);
  setTimeout(function() {
    elm.style.display = "none";
  }, 1500);
}

const fadeIn = (elm) =>{
  let count = 0;
  setInterval(function(){
    if (!elm.style.opacity) elm.style.opacity = 0;
    if(elm.style.opacity < 1) {
      count += .1
      elm.style.opacity = count;
    } else{
      clearInterval();
    }
  }, 100);
}

//When the game is finished, it stops the animation and tells the user if they won or lost.
const win = () =>{
  computer.style.webkitAnimationPlayState = "paused";
  planet.innerHTML = "Finish";
  setTimeout(function(){
    planet.innerHTML = "You Win";
  }, 3000);

}
const lose = () =>{
  computer.style.webkitAnimationPlayState = "paused";
  planet.innerHTML = "Finish";
  setTimeout(function(){
    planet.innerHTML = "You Lose";
  }, 3000);

}

const init = () => {
  //The game starts with the homescreen -- when the start button is pushed, the homescreen fades and the game begins
  startBtn.addEventListener("click",  function() {
    fadeOut(startScreen);
    setTimeout(function() {
      game.style.display = "block";
      fadeIn(game);
    }, 1600);

    setTimeout(function(){
      winState = false;
      if(spin >- -315) lose();
    }, 45000);

    //The player mashes the spacebar trying to complete a rotation before the computer does.
    window.addEventListener("keydown", function(e){
      if (spin <= -315 && winState != false){
        win();
      } else if (computer.style.transform === "rotate(315)deg"){
        lose();
        return;
      } else if(e.keyCode == "32"){
        spin += -2;
        player.style.transform = `rotate(${spin}deg)`;
      }
    });
  });


}
init();
