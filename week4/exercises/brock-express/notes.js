// Mongoose Intro
//===============

// Why are we doing this?
//-----------------------
// 1. We want to be able to persist user data and save the changes we make even if our server code changes and we need to restart it.
// 2. To accomplish our first goal, we'll use MongoDB as a starting place. Mongoose is a library that makes it easier to use MongoDB
//    in Express projects.

// What are we getting out of this?
//---------------------------------
// We will be able to:
// - Save and persist data with MongoDB && Mongoose
// - Use Express to configure a server's responses to various HTTP verbs on various routes
// - Access data that comes in on a request from the client-side












// MongoDB vs. Mongoose: What's the difference?
//=============================================
// MongoDB: a no-SQL database
//     - stores data in containers which keep the data safe and organized
//     - stores data in BSON ("Binary JSON format")
//     - has a JavaScript API

// Mongoose: just a library (or wrapper) that gives a bunch of convenience
// methods for working with MongoDB
//     - can be thought of as the jQuery to MongoDB's Javascript
//     - we usually won't work directly with MongoDB, more often we'll work with Mongoose










// Storing Data with MongoDB and Mongoose
//=======================================
// Mongoose presents two key concepts for how data is created and stored in MongoDB:
// 1. Schema
// 2. Models

// Schema
//-------
// A schema is a blueprint referring to a single type of object contained in the database. It doesn't include any methods;
// it only includes placeholders for data we will save to each instance.

// A basic Schema could look like:
const ContactSchema = new Schema({
  firstName: String,
  lastName: String,
  address: String,
  age: Number,
  email: [String],
  isProfessionalContact: Boolean
});

// Given this basic schema, what information can we expect a single contact to have?








// Model
//------
// A model is compiled from a Schema. It takes in the structure and data shape of the Schema and extends it by adding the
// capacity to perform actions. A Schema is analogous to the blueprints of an architect; they are vital to construction
// but they don't do much more than inform.

// A model is actually capable of creating new entries, updating old ones, and retrieving these records from the DB.
// Here is how we might make a Contact model based on the schema we created above:
const Contact = mongoose.model('Contact', ContactSchema);



// Database IDs and Data Types
//============================
// Most DBs require a type of data to be specified for each attribute in a record. Mongoose allows us to use the data
// types from Javascript (and a list of others)

// Let's break down the example from your starter code:

//What a Model File will look like:
// models/contact.js
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const TodoSchema = new Schema({
  task: String,
  description: String,
  isCompleted: Boolean
});

const Todo = mongoose.model('Todo', TodoSchema);

//Export the Todo model to the rest of our App
module.exports = Todo;






// {{ Codealong: MongoDB & Mongoose setup }}
// 1. set up file structure
// 2. `npm install mongoose`
// 3. Add DB connection to models/index.js
// 4. Run local DB with `mongod`



// {{ Codealong: ToDo App Integration }}
// 1. Build the Todo model in `models/todo.js`
// 2. In your model file (e.g. todo.js), create the model schema, use it to make a model, and export the model so that you can require it in other parts of your app.
// 3. Require model in models/index.js
// 4. Next in models/index.js, export the new model.

// {{ Using the model }}
// 1. Make sure mongod is running in a tab of Terminal.
// 2. Create a file named seed.js and make sure to require our models folder at the top.
// 3. Requiring the model and refactoring our index.js to account for more models in the future.






// {{ Independent Practice: CRUD Operations with Mongoose }}






// Conclusion
//===========
// 1. Why is Mongoose useful?
// 2. Compare and contrast a schema with a model.
