const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {type: String, required: true, index: true, unique: true},
  password: {type: String, required: true}
});

mongoose.model('users', userSchema);
