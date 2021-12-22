const mongoose = require('mongoose');
const model = mongoose.model('users');
const bcrypt = require('bcrypt');

const saltRounds = 5;

const login = async(req, res) => {

  await model.find({userName: req.body.userName})
    .exec((err, user) => {
      if(!user) {
        return res.status(404).json({'message': 'user not found'});
      } else if (err) {
        return res.status(404).json(err);
      } else {
        bcrypt.compare(req.body.password, user[0]['password'], function(err, result) {
          if(err){
            return res.status(404).json(err);
          } else {
            return res.status(200).json(result);
          }
        })
      }
    })
};

const createUser = async(req, res) => {

  //salt and hash password, then create user
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, async function (err, hash) {
      await model.create({
        userName: req.body.userName,
        password: hash
      }),
        (err, user) => {
          if (err) {
            console.log(err);
            return res.status(404).json(err);
          } else {
            return res.status(200);
          }
        };
    });
  });
}

module.exports = {
  login,
  createUser
};
