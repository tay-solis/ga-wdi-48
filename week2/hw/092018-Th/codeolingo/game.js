/*
Code-o-lingo is an educational game inspired by Duolingo's drag and drop exercises.
It is intended to teach coding structure for HTML, CSS, and Javascript;
*/
const header = document.querySelector("header");
const main = document.querySelector("main");
const game = document.querySelector(".game");
const codeSnippets = document.querySelector(".codeSnippets");
const puzzleBox = document.querySelector(".puzzleBox");
const instructions = document.querySelector(".instructions");
const message = document.querySelector(".message");
const win = document.querySelector(".win");

//Game Buttons
const resetBtn = document.querySelector(".reset");
const checkBtn = document.querySelector(".check");
const startBtn = document.querySelector(".start");
const nextBtn = document.querySelector(".next");
const winBtn = document.querySelector(".winBtn");

//Keeps track of which level the player is on
let levelCount = 0;

//Takes an array and shuffles it
const shuffle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * arr.length);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

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

//Accepts a Level object argument, checks the user's puzzle box against the Level object's solution property.
const checkSolution = (level) => {

  let checkThis = "";
  for (let i = 0; i < puzzleBox.children.length; i++) {
    checkThis += puzzleBox.children[i].getAttribute("id");
  }
  console.log(`${checkThis} is being compared to ${level.solution}`);
  if (checkThis === level.solution) {
    return true;
  } else {
    return false;
  }

}

//A Level has three properties: The language that the level is in, the array of provided nodes, and the solution string.
class Level {
  constructor(language, nodes, solution) {
    this.language = language;
    this.nodes = nodes;
    this.solution = solution;
  }
  //Create level dynamically creates code snippet nodes and populates them into the pieces div.
  createLevel() {
    shuffle(this.nodes);
    for (let i = 0; i < this.nodes.length; i++) {
      let nodeText = this.nodes[i]
      let newNode = document.createElement("li");
      newNode.setAttribute("id", nodeText);
      newNode.innerHTML = nodeText;
      newNode.addEventListener("click", function() {
        if (instructions.style.display !== "none") instructions.style.display = "none";
        message.innerHTML = "";
        if (newNode.parentElement === codeSnippets) {
          codeSnippets.removeChild(newNode);
          puzzleBox.appendChild(newNode);
        } else {
          puzzleBox.removeChild(newNode);
          codeSnippets.appendChild(newNode);
        }
      });
      codeSnippets.appendChild(newNode);
    }
  }
}


//Level Objects
let levelOne = new Level(
  "HTML",
  ["<", "/>", ">", "p", "text", "Hello future programmer!", "<", ">", "/p", "/text"],
  "<p>Hello future programmer!</p>"
);

let levelTwo = new Level(
  "HTML",
  ["<", "/>", ">", "a", "src=", "href=", "link", "#url.com", "url", "url.com", "\'", "\'", "This is my link", " ", "/", "<", ">", "/a", "/link", "ahref="],
  "<a href=\'url.com\'>This is my link</a>"
);

let levelThree = new Level(
  "HTML",
  ["<", "ul", ">", "/>", ">",
  "li", "/li", "a", "src=", "href=", "\'#about\'", "\'about\'", "About", "/a", ">", ">",
  "<", "\</", "<", "<", "ul", ">", "<", ">"],
  "<ul><li><a href=\'#about\'>About</a></li></ul>"
);

let levels = [levelOne, levelTwo, levelThree];

//Resets the board (usually on the current level)
const reset = (level) => {
  puzzleBox.innerHTML = "";
  codeSnippets.innerHTML = "";
  message.innerHTML = "";
  setUpGame(level);
}

const setUpGame = (level) => {
  level.createLevel();
}

const init = () => {
  let level = levels[0];
  startBtn.addEventListener("click", function() {
    fadeOut(header);
    setTimeout(function() {
      main.style.display = "block";
      fadeIn(main);
    }, 1600);
    setUpGame(levels[0]);
  });

  checkBtn.addEventListener("click", function() {
    if (checkSolution(levels[levelCount])) {
      if (levelCount === levels.length - 1) {
        game.style.display = "none";
        win.style.display = "block";
      }
      message.innerHTML = "Correct!";
      checkBtn.style.display = "none";
      nextBtn.style.display = "inline";
    } else {
      message.innerHTML = "Whoops, try again.";
    }
  });

  nextBtn.addEventListener("click", function() {
    checkBtn.style.display = "inline";
    nextBtn.style.display = "none";
    levelCount++;
    reset(levels[levelCount]);
  });

  resetBtn.addEventListener("click", function() {
    reset(levels[levelCount]);
  });

  winBtn.addEventListener("click", function() {
    levelCount = 0;
    win.style.display = "none";
    game.style.display = "block";
    reset(levels[0]);
  })
}

init();
