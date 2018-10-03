const db = require('./models');

const tasks = [
  {
    task: 'Wash dishes',
    description: 'Rinse everything, drop in dishwasher.',
    isCompleted: false
  },
  {
    task: 'Feed rabbit',
    description: '1/4 pellets, 1 cup greens, and grass',
    isCompleted: false
  }
];

db.Todo.create(tasks, (err, newTask) =>{
  //if there's an error, log it out
  if(err){
    return console.log(err);
  }
  console.log(`Saved new Task: ${newTask}`);
  //if everything is fine, log it out
});
