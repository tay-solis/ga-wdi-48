const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/food-app', {useNewUrlParser: true})
        .then(console.log('MongoDB connected on port 27017'));

const Ingredient = require('./ingredient');
const Food = require('./food');
const Tweet = require('./tweet');
const User = require('./user');

module.exports = {
  Ingredient,
  Food,
  Tweet,
  User
}
