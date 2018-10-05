// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
var express = require('express'),
  bodyParser = require('body-parser');

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({
  extended: true
}));

const db = require(`./models`);


////////////////////
//  ROUTES
///////////////////



// define a root route: localhost:3000/
app.get('/', function(req, res) {
  res.sendFile('views/index.html', {
    root: __dirname
  });
});

////////AUTHOR ROUTES////////
app.get('/api/authors', (req, res) => {
  db.Author.find()
    .populate('book')
    .exec((err, authors) => {
      if (err) throw err;
      res.json(authors);
    });
});


// get one book
app.get('/api/authors/:id', function(req, res) {
  // find one book by its id
  console.log('authors show', req.params);
  let authorId = req.params.id;
  db.Author.findOne({
      _id: authorId
    })
    .populate('book')
    .exec((err, foundAuthor) => {
      if (err) throw err;
      res.json(foundAuthor);
    });
});
////////BOOK ROUTES////////

// get all books
app.get('/api/books', (req, res) => {
  db.Book.find()
    .populate('author')
    .exec((err, books) => {
      if (err) throw err;
      res.json(books);
    });
});


// get one book
app.get('/api/books/:id', function(req, res) {
  // find one book by its id
  console.log('books show', req.params);
  let bookId = req.params.id;
  db.Book.findOne({
      _id: bookId
    })
    .populate('author')
    .exec((err, foundBook) => {
      if (err) throw err;
      res.json(foundBook);
    });
});

// create new book
app.post('/api/books', function(req, res) {
  db.Book.create({
    title: req.body.title
  }, (err, newBook) => {
    if (err) throw err;
    //Looks to see if the book added's author already exists
    db.Author.findOne({name: req.body.author}, (err, foundAuthor) => {
      if (err) throw err;
      //If it does not, it creates a new author and assigns it to the new book
      if (foundAuthor == null) {
        console.log('Author not found')
        db.Author.create({
          name: req.body.author
        }, (err, newAuthor) => {
          if (err) throw err;
          newAuthor.save((err, savedAuthor) => {
            if (err) throw err;
            console.log(`saved ${savedAuthor}`)
          });
          newBook.author = newAuthor;
          newAuthor.books.push(newBook);
          newBook.save((err, savedBook) => {
            if (err) throw err;
            console.log(`Created ${savedBook}`);
            res.json(newBook);
          });
        });
        //If the author does exist, it references that author
      } else {
        console.log(`Author is ${foundAuthor}`);
        newBook.author = foundAuthor;
        foundAuthor.books.push(newBook);
        newBook.save((err, savedBook) => {
          if (err) throw err;
          console.log(`Created ${savedBook}`);
          res.json(newBook);
        });
      }
    });
  });
});


// update book
app.put('/api/books/:id', function(req, res) {
  // get book id from url params (`req.params`)
  console.log('books update', req.params);
  var bookId = req.params.id;
  let updateBody = req.body;

  db.Book.findOneAndUpdate({
    _id: bookId
  }, updateBody, {
    new: true
  }, (err, updatedBook) => {
    if (err) throw err;
    res.json(updatedBook);
  });
});

// delete book
app.delete('/api/books/:id', function(req, res) {
  // get book id from url params (`req.params`)
  console.log('books delete', req.params);
  let bookId = req.params.id;

  db.Book.findOneAndRemove({
    _id: bookId
  }, (err, deletedBook) => {
    res.json(deletedBook);
  });
});

////////CHARACTER ROUTES////////

// app.get('/api/books/:bookId/characters', (req,res) =>{
//
// });

// Create a character associated with a book
app.post('/api/books/:book_id/characters', function(req, res) {
  // Get book id from url params (`req.params`)
  var bookId = req.params.book_id;
  db.Book.findById(bookId)
    .populate('author')
    .exec(function(err, foundBook) {
      if (err) throw err;
      if (foundBook === null) return console.log(`Invalid Id ${bookId}, Book Not Found`);
      // push req.body into characters array
      foundBook.characters.push(res.body);
      foundBook.save((err, savedBook) => {
        if (err) throw err;
        res.json(foundBook);
      });
    });
});

// app.get('/api/books/:bookId/characters/:id', (req,res) =>{
//
// });
//
// app.put('/api/books/:bookId/characters/:id', (req,res) =>{
//
// });
//
// app.delete('/api/books/:bookId/characters:id', (req,res) =>{
//
// });

app.listen(process.env.PORT || 3000, function() {
  console.log('Book app listening at http://localhost:3000/');
});
