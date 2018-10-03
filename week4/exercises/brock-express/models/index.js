const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/todo-app`, {useNewUrlParser: true});

//Exports models (one at a time)
module.exports.Todo = require('./todo');

//OR Export group of models in an export object
// const TodoModel = require('./todo');
//
// module.exports{
//   Todo: TodoModel
// }
