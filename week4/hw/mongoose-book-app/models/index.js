var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/book-app", {useNewUrlParser: true});

module.exports.Character = require('./character');
module.exports.Book = require('./book');
module.exports.Author = require('./author')
