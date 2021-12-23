const mongoose = require('mongoose');
const model = mongoose.model('users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {getKeyStatus} = require("./auth.controller");

const saltRounds = 5;

RSA_KEY = getKeyStatus();

const login = async(req, res) => {

  //Find username and retrieve hashed password
  await model.find({userName: req.query.userName})
    .exec((err, user) => {
      if(!user) {
        return res.status(404).json({'message': 'user doesn\'t exist!'});
      } else if ((!user) || (user.length <= 0)) {
        return res.status(404).json({'message': 'user doesn\'t exist!'});
      } else {

        //User found, compare the hashed password to passed in password
        bcrypt.compare(req.query.password, user[0]['password'], function(err, result) {
          if(result === false){
            return res.status(404).json({'message': 'wrong username or password!'});
          } else {
            const jwtBearerToken = jwt.sign({}, RSA_KEY, null, {
              algorithm: 'HS256',
              expiresIn: 86400,
              subject: req.body.userName
            });
            //Return the JWT to the client
            return res.status(200).json({
              idToken: jwtBearerToken,
              expiresIn: 86400
            });
          }
        })
      }
    })
};

const createUser = async(req, res) => {

  //salt and hash password, then create user
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.params.password, salt, async function (err, hash) {
      await model.create({
        userName: req.body.params.userName,
        password: hash
      },
        (err, user) => {
          if (err) {
            return res.status(404).json({'message': 'user already exists!'});
          } else if ((!user) || (user.length <= 0)) {
            return res.status(404);
          } else {
            return res.status(200).json({'success': 'Creation success'});
          }
        }
    )});
  });
}

module.exports = {
  login,
  createUser
};
