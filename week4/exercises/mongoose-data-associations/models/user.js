const mongoose = require ('mongoose');
let Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    default: ""
  },
  tweets:[{
    type: Schema.Types.ObjectId,
    ref: 'Tweet'
  }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
