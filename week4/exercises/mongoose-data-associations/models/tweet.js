const mongoose = require ('mongoose');
let Schema = mongoose.Schema;

const TweetSchema = new Schema({
  message: {
    type: String,
    default: ""
  },
  date: Date
});

const Tweet = mongoose.model('Tweet', TweetSchema);

module.exports = Tweet;
