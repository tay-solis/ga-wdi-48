const hasntGoneList = document.querySelector('.hasntGoneList');
const hasGoneList = document.querySelector('.hasGoneList');
const chooseBtn = document.querySelector('.choose');
const resetBtn = document.querySelector('.reset');
const nextUp = document.querySelector('.next');

const studentsNames = [
  "Andrew",
  "Craig",
  "Elpi",
  "Emily",
  "Evan",
  "Garrett",
  "Mark",
  "Natasha",
  "Paul",
  "Praveen",
  "Tay",
  "Tirapat"
];

const students =[];

class Student {
  constructor(name, elm){
    this.name= name;
    this.elm = elm;
  }
}

let hasntGone = [];
let hasGone = [];

//Selects a random student
const randomizer=() =>{
  let num = Math.floor(Math.random() * hasntGone.length);
  let currentStudent = hasntGone[num];
  nextUp.innerHTML = currentStudent.name;
  hasntGoneList.removeChild(currentStudent.elm);
  hasGoneList.appendChild(currentStudent.elm)
  hasntGone.splice(num, 1);
  hasGone.push(currentStudent);
}

//Creats a new Student Object given a name string
const createStudent = (name) => {
  let elm = document.createElement("li");
  elm.setAttribute("id",name);
  elm.innerHTML = name;
  return elm;
}

//Creates Student Objects given an array of names. Populates hasntGone with all students
const setUp =()=>{
  for (let i = 0; i < studentsNames.length;i++){
    let newStudent = new Student(studentsNames[i],createStudent(studentsNames[i]));
    hasntGone.push(newStudent);
    hasntGoneList.append(newStudent.elm);
  }
}

const studentRandomizer = () => {
  setUp();
  chooseBtn.addEventListener("click", function(){
    if(hasntGone.length >0) randomizer();
  });
  resetBtn.addEventListener("click", function(){
    nextUp.innerHTML = "";
    hasntGone = [];
    hasntGoneList.innerHTML = "";
    hasGoneList.innerHTML = "";
    setUp();
  });
}

studentRandomizer();
