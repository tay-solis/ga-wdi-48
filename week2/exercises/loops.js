var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = 0;

// TODO: add a for loop here to add up all of the numbers into the variable sum

numbers.forEach(function(currentValue, i, arr){
  sum += currentValue;
});

console.log('sum = ' + sum);

// add 2 integer arrays (add elements)
function sumOfArrays(a, b) {
  var result = [];
  // TODO: write a for loop that adds the elements of a and b.
  //       and pushes each sum into the result array.
  for(let i = 0; i < a.length; i++){
    result.push(a[i] + b[i]);
  }
  return result;
}

var a = [1, 2, 3];
var b = [4, 6, 8];
console.log("sum of arrays = " + sumOfArrays(a, b));


//Write a program to print the above board in a nice format. Hint: Only use a single for loop (not nested for loops).
var board = [ [ 'X', 'O', 'X' ],
              [ 'O', 'X', 'O' ],
              [ 'X', 'O', 'X' ]
            ];
for(let i = 0; i < board.length; i++){
  console.log(board[i][0] + ' | ' + board[i][0] + ' | ' + board[i][2]);
  if(i != board.length - 1) console.log("---------");
}
