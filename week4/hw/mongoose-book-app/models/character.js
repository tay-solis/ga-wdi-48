const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: String,
  dies: Boolean
});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;
