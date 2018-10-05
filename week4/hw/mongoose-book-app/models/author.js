const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: String,
  isAlive: Boolean,
  image: String,
  books:[{
    type: Schema.Types.ObjectId,
    ref: 'Book' 
  }]
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
