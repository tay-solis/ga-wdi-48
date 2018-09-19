//Lecture Practice
const catTalk = () => {
  console.log("Meow");
}
catTalk();

const area = (width, length) => {
  return width * length;
}
console.log(area(3, 15));

const disney = (villain, movie) => {
  console.log(`${villain} is the villain of ${movie}`);
}
disney("Jafar", "Lion King");

//Lab
const maxOfTwoNumbers = (x, y) => {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log(maxOfTwoNumbers(40, 2));

const maxOfThree = (x, y, z) => {
  let big;
  if (x > y && x > z) return x;
  if (y > x && y > z) return y;
  if (z > x && z > y) return z;
}
console.log(maxOfThree(3, 20, 500));

const isCharacterAVowel = (char) => {
  if (char.length > 1) return false;
  if (char === "a" ||
    char === "e" ||
    char === "i" |
    char === "o" ||
    char === "u" ||
    char === "A" ||
    char === "E" ||
    char === "I" |
    char === "O" ||
    char === "U") {
    return true;
  } else {
    return false;
  }
}
console.log(isCharacterAVowel('E'));
console.log(isCharacterAVowel('W'));

const sumArr = (arr) =>{
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

const productArr = (arr) =>{
  let product;
  for(let i = 0; i < arr.length; i++){
    if(i == 0) {
      product = arr[i];
    } else {
    product *= arr[i];
    }
  }
  return product;
}

let array = [8, 9, 2, -3, -1];
console.log(sumArr(array));
console.log(productArr(array));

const numArgs = function (a,b,c,d,e,f,g,h,i,j,k){
  return arguments.length;
}
console.log(numArgs(4,3,3,3,3,3))

const reverseString=(string)=>{
  let rev = "";
  for(let i = string.length - 1; i > -1; i--){
    rev += string[i];
  }
  return rev;
}
console.log(reverseString("january"));

const findLongestWord = (arr) => {
  let longest = "";
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > longest.length) longest = arr[i];
    if(arr[i].length === longest.length) return "There is more than one longest word.";
  }
  return longest;
}
console.log(findLongestWord(['banana', 'worm', 'friend']));

const filterLongWords = (arr, i) =>{
  let longWords =[];
  for(let j = 0; j < arr.length; j++){
    if(arr[j].length > i) longWords.push(arr[j]);
  }
  return longWords;
}

console.log(filterLongWords(['banana', 'worm', 'friend'], 5));

const countChars = (str) =>{
  let count = new Object();
  for (let i = 0; i < str.length; i++){
    let char = str[i].toLowerCase();
    if (count[char] !== undefined) {
      count[char] += 1;
    } else{
      count[char] = 1;
    }
  }
  return count;
}

console.log(countChars("sSSSSsSSsssmmmmSMMSMSM"));

//Google Shopping Lab

//Needs import of local JSON

let fs= require('fs');
let myJSON = fs.readFileSync('products.json')

//getItems(objData) inputs a json object and returns an array of itemsPerPage

const getItems = (objData) => {
  let arr = JSON.parse(objData);
  console.log(arr.items.length);
  return arr.items;
}
//getItemsByBrand(arr, brand) inputs an array of items, category to filter with, and a filter, and returns an array of items of that brand
const getItemsByBrand = (items, brand) => {
  let newArr = [];
  items.forEach(function(currentValue, i, arr){
    if(currentValue.product.brand === brand) newArr.push(currentValue);
  });
  return newArr;
}
//getItemsByAuthor(arr, author) inputs an array of items and an author to filter and
const getItemsByAuthor = (items, author) => {
  let newArr = [];
  items.forEach(function(currentValue, i, arr){
    if(currentValue.product.author.name === author) newArr.push(currentValue);
  });
  return newArr;
}
//getAvailableProducts inputs an array of items and returns an array of items that are getAvailableProducts
const getAvailableProducts = (items) => {
  let newArr = [];
  items.forEach(function(currentValue, i, arr){
    if(currentValue.product.inventories[0].availability === "inStock") newArr.push(currentValue);
  });
  return newArr;
}



/*
All items made by Sony.
All items made by Sony that are available.
All available items by the author "Adorama Camera."
All items made by Nikon with the author "eBay."
*/
let itemList = getItems(myJSON);


 let avail = getAvailableProducts(itemList);
 console.log(avail.length);
 console.log(getItemsByBrand(avail,"Sony").length);
 console.log(getItemsByAuthor(getItemsByBrand(itemList, "Nikon"), "eBay"));
