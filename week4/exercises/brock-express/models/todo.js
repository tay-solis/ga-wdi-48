const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Build a schema for a to-do list item
const TodoSchema = new Schema({
  task: String,
  description: String,
  isCompleted: Boolean
});

//Creates a to-do item model based on the schema
const Todo = mongoose.model('Todo', TodoSchema);

//Export the to-do item model we just created
module.exports = Todo;
