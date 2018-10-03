//Configuration
const port = process.env.PORT || 3000;

//Grabbing the export models from models/*
const db = require(`./models`);

//Set up express
const express = require('express');
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');

//Middleware
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extender:false}));
app.use(bodyParser.json());

//Routes

//Root route at port (defined above)
app.get('/', (req,res) => {
  res.sendFile('views/index.html', {root: __dirname});
});

//Read alldata
app.get('/api/todos', (req, res) => {
  db.Todo.find({}, (err, allTodos) =>{
    if(err){
      return console.log(`Error at get all: ${err}`)
    }
    res.json({todos: allTodos});
  });
});

//Read one item
app.get('/api/todos/:id', (req,res) => {
  let todoId = req.params.id;
  console.log(`Searching for ${todoId}`);
  db.Todo.findOne({_id: todoId}, (err, foundTodo)=>{
    if (err) return console.log(`Error at get one: ${err}`);
    res.json(foundTodo);
  })
});

//Create new item
app.post('/api/todos', (req, res) =>{
  console.log(req.body);
  let newTodo = {};
  newTodo.task = req.body.task;
  newTodo.description = req.body.description;
  newTodo.isCompleted = false;
  console.log(newTodo);
  db.Todo.create(newTodo, (err, savedTodo) =>{
    if (err) return console.log(`Could not create new todo: ${err}`);
    res.json(savedTodo);
  })
});

//Find one item and update its value
app.put('/api/todos/:id', (req, res) =>{
  let todoId = req.params.id;
  console.log(`Updating ${todoId}...`);
  let updateBody = req.body;

  db.Todo.findOneAndUpdate({_id: todoId}, updateBody, {new:true}, (err, updatedTodo) =>{
    if(err) return console.log(`Could not update ${todoId}: ${err}`);
    res.json(updatedTodo);
  });
});

//Server
const server = app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
