let rows = [];
let steps = 15;

let pascal = (steps) => {
  for(let i = 0; i < steps; i++){
    let newRow = [];
    newRow.push(1);
    if(rows.length > 0){
      let prevRow = rows[rows.length - 1];
      for (let j = 1; j < prevRow.length; j++){
        newRow.push(prevRow[j-1] + prevRow[j]);
      }
      newRow.push(1)
    }
    rows.push(newRow);
  }
}
pascal(steps);

console.log(rows);
