// Add your event handlers here

function turnRed () {
  document.querySelector('body').className = 'red-theme';
}
function turnWhite () {
  document.querySelector('body').className = 'white-theme';
}
function turnBlue () {
  document.querySelector('body').className = 'blue-theme';
}
function turnYellow () {
  document.querySelector('body').className = 'yellow-theme';
}

function init(){
  document.querySelector("#redButton").addEventListener("click", function(){
    console.log("Turning Red");
    turnRed();
  });
  document.querySelector("#blueButton").addEventListener("click", function(){
    console.log("Turning Blue");
    turnBlue();
  });
  document.querySelector("#whiteButton").addEventListener("click", function(){
    console.log("Turning White");
    turnWhite();
  });
  document.querySelector("#yellowButton").addEventListener("click", function(){
    console.log("Turning Yellow");
    turnYellow();
  });
}

init();
