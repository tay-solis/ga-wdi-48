/*
Duocodo is an educational game inspired by Duolingo's drag and drop exercises.
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
const shuffle =(arr)=>{
    for(let i = 0; i < arr.length; i++){
      let j = Math.floor(Math.random() * arr.length);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
}

const checkSolution = (level) =>{

  let checkThis = "";
  for (let i = 0; i < puzzleBox.children.length; i++){
    checkThis += puzzleBox.children[i].getAttribute("id");
  }
  console.log(`${checkThis} is being compared to ${level.solution}`);
  if (checkThis === level.solution) {
    return true;
  } else {
    return false;
  }

}

class Level{
  constructor(language, nodes, solution){
    this.language = language;
    this.nodes = nodes;
    this.nodesElms = [];
    this.solution = solution;
  }
  createLevel() {
    shuffle(this.nodes);
    for(let i = 0; i < this.nodes.length; i++){
      let nodeText = this.nodes[i]
      let newNode = document.createElement("li");
      newNode.setAttribute("id", nodeText);
      newNode.innerHTML = nodeText;
      newNode.addEventListener("click", function(){
        if(instructions.style.display !== "none") instructions.style.display = "none";
        message.innerHTML = "";
        if(newNode.parentElement === codeSnippets){
          codeSnippets.removeChild(newNode);
          puzzleBox.appendChild(newNode);
        } else{
          puzzleBox.removeChild(newNode);
          codeSnippets.appendChild(newNode);
        }

      });
      this.nodesElms.push(newNode);
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
  ["<", "/>", ">", "a", "src=", "href=", "link", "#url.com", "url", "url.com", "\'", "\'", "This is my link", " ", "/", "<", ">", "/a", "/link"],
  "<a href=\'url.com\'>This is my link</a>"
);

let levels = [levelOne, levelTwo];

const reset = (level) =>{
  puzzleBox.innerHTML = "";
  codeSnippets.innerHTML = "";
  message.innerHTML = "";
  setUpGame(level);
}

const setUpGame = (level) =>{
  level.createLevel();
}

const init =() =>{
  let level = levels[0];
  startBtn.addEventListener("click", function(){
    header.style.display = "none";
    main.style.display = "block";
    setUpGame(levels[0]);
  });

  checkBtn.addEventListener("click", function(){
    if(checkSolution(levels[levelCount])){
      if(levelCount === levels.length - 1){
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

  nextBtn.addEventListener("click", function(){
    checkBtn.style.display = "inline";
    nextBtn.style.display = "none";
    levelCount++;
    reset(levels[levelCount]);
  });

  resetBtn.addEventListener("click", function(){
    reset(levels[levelCount]);
  });

  winBtn.addEventListener("click", function(){
    levelCount = 0;
    win.style.display = "none";
    game.style.display = "block";
    reset(levels[0]);
  })
}

init();