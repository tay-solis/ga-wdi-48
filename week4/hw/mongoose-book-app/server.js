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

// get all books
app.get('/api/books', (req, res) =>{
  db.Book.find((err, allBooks) =>{
    if (err) throw err;
    res.json(allBooks);
  });
});


// get one book
app.get('/api/books/:id', function(req, res) {
  // find one book by its id
  console.log('books show', req.params);
  let bookId = req.params.id;
  db.Book.findOne({ _id: bookId})
          .populate('author')
          .exec((err, foundBook) => {
            if (err) throw err;
            res.json(foundBook);
          });
});

// create new book
app.post('/api/books', function(req, res) {
  db.Book.create({title: req.body.title}, (err, newBook) =>{
    if (err) throw err;
    db.Author.findOne({name: req.body.author}, (err, foundAuthor) =>{
      if(err) throw err;
      newBook.author = foundAuthor;
      newBook.save((err, savedBook) =>{
        if(err) throw err;
        console.log(`Created ${savedBook}`);
        res.json(newBook);
      });
    });
    console.log('Author not found');
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

app.listen(process.env.PORT || 3000, function() {
  console.log('Book app listening at http://localhost:3000/');
});
