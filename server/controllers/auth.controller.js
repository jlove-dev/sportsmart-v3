const expressJWT = require('express-jwt');
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function getKeyStatus () {
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

  return fs.readFileSync(path.join(__dirname, '../keys/private.key'));
}

//FIXME - need to add error handling so that the frontend can display login errors
const checkAuth = expressJWT({
    secret: getKeyStatus(),
    algorithms: ['HS256']
  });

module.exports = {
  getKeyStatus,
  checkAuth
}
