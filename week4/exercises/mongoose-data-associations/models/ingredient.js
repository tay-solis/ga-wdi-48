const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  title:{
    type: String,
    default: ""
  },
  origin: {
    type: String,
    default: ""
  }
});

const Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;
