const mongoose = require('mongoose');
const Character = require('./character');
let Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  characters:[Character.schema],
  mainCharacter: Character.schema,
  image: String,
  releaseDate: String
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
