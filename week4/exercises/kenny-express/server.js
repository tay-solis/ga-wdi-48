//Requirements
const express = require('express');
const bodyParser = require('body-parser');
const app = express(); //Returns a method that has properties, etc.
const port = process.env.PORT || 3000;

//Seed Data
const burgers = [
  "Hamburger", "Cheeseburger", "2x2"
];

const tacos = [
  "Lengua", "Al Pastor", "Carne Asada"];

//Middleware
app.use(express.static('public'));

// Allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Read data
app.use(bodyParser.urlencoded({extender:false}));
app.use(bodyParser.json());

//Routes
app.get('/', (req, res) => {
  res.sendFile('views/index.html', {root: __dirname});
});

//Returns all burgers data
app.get('/api/burgers', (req, res) => {
  res.json(burgers);
});

//Returns all tacos data
app.get('/api/tacos', (req, res) => {
  res.json(tacos)
});

//On taco by ID API Routes
app.get('/api/tacos/:id/:topping', (req,res) =>{
  let index = req.params.id;
  console.log(req.params.topping);
  let choice = tacos[index] || '404 Taco Not Found';
  res.json(choice);
});

//Practice with Name Parameter
app.get('/greeting/:name', (req,res) =>{
  let name = req.params.name;
  res.send(`Hello ${name}`);
});

//Selecting a size of order
app.get('/order', (req, res) =>{
  console.log(req.query);
  let name = req.query.name;
  let size = req.query.size;
  res.send(`Hello, ${name}! You have selected a ${size} order`);
});

//Restaurant data
let restaurants = [
  {
    name: "Uno Dos Tacos",
    location: '595 Market St'},
  {
    name: "Taco Shop at Underdogs",
    location: '1500 Broadway'
  }
]

app.get('/api/restaurants', (req, res) => {
  app.json(restaurants);
})

app.post('/api/restaurants', (req, res) =>{
  console.log('POST request received at /api/restaurants')
  console.log(req.body);
  let name = req.body.name;
  let location = req.body.location;
  let newRestaurant = {name: name, location: location};
  restaurants.push(newRestaurant);
  res.send(restaurants);
})

//Selecting Sides
app.get('/sides', (req,res) =>{
  console.log(req.query);
  let sides = [];
  let nachos = req.query.wantNachos;
  let chips = req.query.chips;
  let guac = req.query.wantGuac;
  sides.push(nachos);
  sides.push(chips);
  sides.push(guac);
  let order = ""
  for(let i = 0; i < sides.length; i++){
    if(sides[i]) {
      if(i < sides.length -1){
        order += sides[i] + ', ';
      } else{
        order += "and " + sides[i] + ".";
      }
    }
  }
  res.send(`Your order includes ${order}`);
});

//Server Start: Takes two arguments(port, callback)
app.listen(port, () => {
  console.log(`HTTP Server listening on port ${port}`);
});
