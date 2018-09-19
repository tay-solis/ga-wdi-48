// Print 'Hello world' on the console.
console.log("Hello World");

// declare a number variable
let num;

// assign value to that variable
num = 5;

// reassign the variable
num = 1;

// declare a string variable
let str = "Hopscotch";

// console log the value using string interpolation (hint: remember the back-ticks ``)
console.log(`I made a new cocktail out of IPA and scotch I call it the ${str}`);

// declare a boolean variable and assign it a boolean value
let bool = true;

// declare and initialize an array of strings
let array = ["let's", "practice", "javascript", 'and', 'eat', 'oatmeal'];

// Log the value of 3rd element of the array
console.log(array[2]);

// update a value in the array:
array[1] = "forget";

// print all the elements of the array using a for-loop
for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}

// Using a while loop, print the element of the array if the first letter is a vowel
// example: while(condition){ ...code... w/ incrementor}
var counter = 0;
var vowels = ['a','e','i','o','u'];
while (counter < array.length){
  if(vowels.includes(array[counter][0])){
    console.log(array[counter]);
  }
  counter++;
}


// iterate through the array using forEach() and print each item
// use an anonymous function for the forEach callback - no need to name it when called in iterator
array.forEach(function(currentValue, i, arr){
  console.log(currentValue);
});

// create a NEW list using map() (allowing us to make changes) with just the first letter of every element
let newArray = array.map(string => string[0]);
console.log(array[0][0]);
console.log(newArray);

// use filter to find elements with oatmeal in the above declared array
let twoArray = array.filter(string => string === "oatmeal");
console.log(twoArray);

// use reduce() to find the sum of all the elements of the given array
var numbers = [4, 7, 2, 9, 29, 11, 9, -4, -4, 2];
const reducer = (sum, currentValue) => sum + currentValue;
console.log(numbers.reduce(reducer));



// boolean logic
var truthTable = `
  true  || true  = ${true || true}\n
  true  || false = ${true || false}\n
  false || true  = ${false || true}\n
  false || false = ${false || false}\n
  -------------------------------------
  true  && true  = ${true && true}\n
  true  && false = ${true && false}\n
  false && true  = ${false && true}\n
  false && false = ${false && false}\n
  --------------------------------------
  truthy/falsy values:
  TRUTHY:
  Strings: 'apple' => ${Boolean('apple')}
  Non-zero numbers: -4 => ${Boolean(-4)}
  true => ${Boolean(true)}
  FALSY:
  Empty String: '' => ${Boolean('')}
  Zero: 0 => ${Boolean(0)}
  undefined => ${Boolean(undefined)}
  null => ${Boolean(null)}
  NaN => ${Boolean(NaN)}
  false => ${Boolean(false  )}
  NOT:
  !true  => ${!true} // negates boolean opposite
  !!true => ${!!true}
  !545   => ${!545}
  !!545  => ${!!545} // coerces the truthy/falsy value into an actual boolean
`;

//console.log(truthTable)


// if/else
// if(condition){ ..code.. }
// if sunnyOutside, print "I think I'll go for a walk"
// if a good movie is showing, print 'I wanna go see The Predator!'
// otherwise print "I think I'll just stay inside today"
var sunnyOutside = true;
var aMovieIsShowing = true;

if (sunnyOutside) {
  console.log("I'll go for a walk.");
} else if (aMovieIsShowing) {
  console.log("I'll watch a good movie instead of The Predator today!");
} else {
  console.log("I think I'll stay inside");
}



// use ternary
// if sunny outside, print go for a walk; else stay inside.
sunnyOutside ? console.log("I'll go for a walk.") : console.log("I think I'll stay inside");

// FUNCTION DECLARATIONS

// function declarations - hoisting: loads variables and function in memory during creation phase.
// declare a function that returns 'hello World'
const hello = () =>{
  return "Hello world";
}
console.log(hello());


// using function declaration write a function that
// repeats a phrase (n) number of times. phrase and (n) are input parameters
// phrase is required but, if the user does not provide (n), default it's value to 1
const repeatAfterMe = (phrase, n) =>{
  if (n === undefined) n = 1;
  for (let i = 0; i < n; i++){
    console.log(phrase);
  }
}

repeatAfterMe("Hello");
repeatAfterMe("World", 3);


// function expression - hoisting: remember, the variable holding the function is loaded into memory, but it has an initial value of 'undefined'.
// using a function expression return 'Goodbye World!'
// call the function using string interpolation and print the value to the console.
const byebye=()=>{
  return "Goodnight moon";
}
console.log(`Hello world, ${byebye()}`);


// es6
//Arrow functions
// no parameter
let superCool = () => "I'm so fancy"

// one parameter
let squareAValue = number => number**2

// two parameters
let raiseToAPower = (number, exponent) => number**exponent

// two parameters with explicit return
let pythagoreanTheorem = (a, b) => {
  let cSquared = squareAValue(a) + squareAValue(b);
  return Math.sqrt(cSquared);
}

// console.log(`raiseToAPower(2,3) => ${raiseToAPower(2,3)}`)
// console.log(`squareAValue(4) => ${squareAValue(4)}`)
// console.log(`pythagoreanTheorem(3,4) => ${pythagoreanTheorem(3,4)}`)
