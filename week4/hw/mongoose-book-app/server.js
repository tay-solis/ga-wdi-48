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
app.use(bodyParser.urlencoded({ extended: true }));

const db = require(`./models`);


////////////////////
//  DATA
///////////////////

var newBookUUID = 18;







////////////////////
//  ROUTES
///////////////////




// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// get all books
app.get('/api/books', function (req, res) {
  // send all books as JSON response
  db.Book.find(function(err, books){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(books);
  });
});

// get one book
app.get('/api/books/:id', function (req, res) {
  // find one book by its id
  console.log('books show', req.params);
  let bookId = req.params.id;
  db.Book.findOne({_id: bookId}, (err, foundBook)=>{
    if (err) return console.log(`Error at get one: ${err}`);
    res.json(foundBook);
  });
});

// create new book
app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
  console.log('books create', req.body);
  var newBook = req.body;
  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.image = req.body.image;
  newBook.releaseDate = req.body.releaseDate;

  db.Book.create(newBook, (err, savedBook) =>{
    if (err) return console.log(`Could not create new Book: ${err}`);
    res.json(savedBook);
  })
});

// update book
app.put('/api/books/:id', function(req,res){
// get book id from url params (`req.params`)
  console.log('books update', req.params);
  var bookId = req.params.id;
  let updateBody = req.body;

  db.Book.findOneAndUpdate({_id: bookId}, updateBody, {new:true}, (err, updatedBook) =>{
    if(err) return console.log(`Could not update ${bookId}: ${err}`);
    res.json(updatedBook);
  });
});

// delete book
app.delete('/api/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log('books delete', req.params);
  let bookId = req.params.id;

  db.Book.findOneAndRemove({ _id: bookId }, (err, deletedBook) => {
        res.json(deletedBook);
    });
});



app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
