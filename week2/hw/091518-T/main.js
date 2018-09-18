/*
	Part 1: We have an array of people's ages, saved in the variable "ages".
	Write a for-loop that will print each of the elements to the console.
*/

var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];

ages.forEach(function(currentValue, i, arr) {
  console.log(currentValue);
});

/*
	Part 2: Let's create a new variable, "younger", which holds an empty array.
	Using a for-loop, populate the "younger" array with numbers from the "ages"
	array which are less than or equal to 20.
	Hint: Use the for-loop to go through each element in the "ages" array.
	Hint: Use the array.push() method to add an element to the end of an array.
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*/

var younger = [];
ages.forEach(function(currentValue, i, arr) {
  if (currentValue <= 20) younger.push(currentValue);
});
console.log(younger);


/*
	Part 3: We're comfortable going through an element from beginning to end, but let's
	flip this around. With the new "younger" array you created in the last part,
	print out the elements so that the last element is printed out first, and the
	first element is printed out last.
	Hint: What should the index for your for-loop be initialized to if we want to start
	at the end of the array?
	Hint: What would the conditional for your for-loop look like?
*/

for (let i = younger.length - 1; i > -1; i--) {
  console.log(younger[i]);
}

/*
	Part 4: Now that you've finished the first 3 parts using a for-loop, repeat the same exercises
	(Part 1, Part 2, and Part 3) using a while-loop.
*/

//Part 1
let i = 0;
while (i < ages.length) {
  console.log(ages[i]);
  i++;
}

//Part 2
var younger2 = [];
i = 0;
while (i < ages.length) {
  if (ages[i] <= 20) younger2.push(ages[i]);
  i++;
};
console.log(younger2);

//Part 3
i = ages.length - 1;
while (i > -1) {
  console.log(ages[i]);
  i--;
}
/*
	Part 5: Create a function, getDayOfWeek, that will tell you what day of the week it is.
	For example, getDayOfWeek(1) would return "Monday", and getDayOfWeek(5) would return "Friday".
	An invalid day of the week should return the string, "Please enter a valid day of the week".
	Hint: Using a "switch" statement might result in cleaner code
*/

const getDayOfWeek = (num) => {
  if (num < 1 || num > 7) return "Please enter a valid day of the week";
  switch (num) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
  }
}

console.log(getDayOfWeek(2));
console.log(getDayOfWeek(0));
console.log(getDayOfWeek(6));
console.log(getDayOfWeek(8));
/*
	Bonus - Part 6: All this work is making me hungry. Let's create a new function, addPepperoniToPizza,
	that accepts an array of pizza ingredients. If the array of ingredients already contains
	pepperoni, then return the pizza ingredients without doing anything to it. If the array of
	ingredients does not contain pepperoni, then add pepperoni to the array and return it.
	For example, addPepperoniToPizza(['onions', 'olives', 'pineapple']) should return
	['onions', 'olives', 'pineapple', 'pepperoni'].
	And addPepperoniToPizza(['spinach', 'pepperoni', 'mushrooms']) should return
	['spinach', 'pepperoni', 'mushrooms'].
	Hint: Take a look at the array.indexOf() method. How can we use this to check if we have pepperoni
	in our array?
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
*/

let toppings =["bell pepper", "onions", "sausage"];
let newTopping = "pepperoni";

const addPepperoniToPizza = (arr, topping) => {
  if(arr.indexOf(topping) === -1) {
    arr.push(topping);
    return;
  }  else {
    console.log("You already have this on your pizza");
  }
}

addPepperoniToPizza(toppings, newTopping);
console.log(toppings);