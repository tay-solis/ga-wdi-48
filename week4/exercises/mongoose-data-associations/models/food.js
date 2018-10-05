const mongoose = require ('mongoose');
let Schema = mongoose.Schema;

const FoodSchema = new Schema({
  name: {
    type: String,
    default: ""
  },
  ingredients:[{
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
  }]
});

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;
