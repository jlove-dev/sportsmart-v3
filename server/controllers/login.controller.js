const mongoose = require('mongoose');
const fs = require("fs");
const model = mongoose.model('users');

// const RSA_PRIVATE_KEY = fs.readFileSync('../keys/private.key');

const login = async(req, res) => {

  //Retrieve user and password from request
  const user = req.body.userName;
  const password = req.body.password;

  await model.create({
    user: user,
    password: password
  }),
    (err, user) => {
      if(err){
        console.log(err);
        return res.status(404).json(err);
      } else {
        return res.status(200).json(user);
      }
    }
};

module.exports = {login};
