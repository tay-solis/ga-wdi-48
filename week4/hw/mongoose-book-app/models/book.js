const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  image: String,
  releaseDate: String
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
