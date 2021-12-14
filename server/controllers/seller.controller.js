const mongoose = require('mongoose');
const express = require('express');
const model = mongoose.model('sellers');

const addSeller = async(req, res) => {
  await model.create({
    vendorID: req.body.vendorID,
    phoneNum: req.body.phoneNum,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode
  }),
    (err, seller) => {
      if(err) {
        console.log(err);
        return res.status(404).json(err);
      } else {
        return res.status(200).json(seller);
      }
    }
}

module.exports = {
  addSeller
}
