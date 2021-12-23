const mongoose = require('mongoose');
const model = mongoose.model('users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require("fs");
const crypto = require('crypto');
const path = require('path');

const saltRounds = 5;

//Check if the private.key exists
let checkKey = fs.existsSync(path.join(__dirname, '../keys/private.key'));

//The private key for RSA doesn't exist, make a new one
if (checkKey === false) {
  fs.writeFileSync(path.join(__dirname, '../keys/private.key'), crypto.randomBytes(20).toString('hex'), function(err, result) {
    if(err){
      console.log(err);
    } else {
      console.log('Wrote:', result);
    }
  })
}

const RSA_PRIVATE_KEY = fs.readFileSync(path.join(__dirname, '../keys/private.key'));

const login = async(req, res) => {

  console.log(req);

  //Find username and retrieve hashed password
  await model.find({userName: req.query.userName})
    .exec((err, user) => {
      if(!user) {
        return res.status(404).json({'message': 'user not found'});
      } else if (err) {
        return res.status(404).json(err);
      } else {

        //User found, compare the hashed password to passed in password
        bcrypt.compare(req.query.password, user[0]['password'], function(err, result) {
          if(err){
            return res.status(404).json(err);
          } else {
            const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, null, {
              algorithm: 'RS256',
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
