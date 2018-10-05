//Configuration
const port = 3000;

const db = require('./models');

const express = require('express');
const app = express();

//Middleware
app.use(express.static('public'));

//Routes
app.get('/', (req, res) => {
  res.sendFile('/views/index.html', {root: __dirname});
});

app.get('/api/foods', (req,res) =>{
  db.Food.find((err, allfoods) =>{
    if (err) throw err;
    res.json(allfoods);
  });
});

app.get('/api/foods/:name', (req, res) =>{
  db.Food.findOne({name: req.params.name})
    .populate('ingredients')
    .exec((err, food)=>{
      if(err) throw err;
      res.json(food);
    });
});

app.get('/api/users', (req, res) =>{
  db.User.find((err, allusers) =>{
    if (err) throw err;
    res.json(allusers);
  });
});

app.get('/api/users/:name', (req, res) =>{
  db.User.findOne({name: req.params.name})
    .populate('tweets')
    .exec((err, user)=>{
      if(err) throw err;
      res.json(user);
    });
});

app.listen(port, ()=>{
  console.log(`Server is listening at port ${port}`);
})
