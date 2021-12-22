const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {type: String, required: true, index: true},
  password: {type: String, required: true}
});

mongoose.model('users', userSchema);
