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
    zipCode: req.body.zipCode,
    salesFigures: req.body.salesFigures,
    items: req.body.items,
  }),
    (err, seller) => {
      if(err) {
        console.log(err);
        return res.status(404).json(err);
      } else {
        return res.status(200).json(seller);
      }
    }
};

const findSeller = async(req, res) => {
  model.find({vendorID: req.query.vendorID})
    .exec((err, seller) => {
      if(!seller) {
        return res.status(404).json({"message": "Seller not found"});
      } else if (err) {
        return res.status(404).json('API ERROR:', err);
      } else {
        return res.status(200).json(seller);
      }
    })
};

const addItem = async(req, res) => {
  model.updateOne({vendorID: req.params.vendorID},
    {
      $push: {
        'items.active': {
          barCode: req.body.barCode,
          category: req.body.category,
          price: req.body.price
        }
      }
    },
    null,
    (err, addItem) => {
    if (err) {
      console.log(err);
      return res.status(404).json(err);
    } else {
      return res.status(200).json(addItem);
    }
    }
    )
};

const checkVendor = async(req, res) => {
  model.exists({vendorID: req.query.vendorID}, function (err, doc) {
    if (err) {
      console.log('Error finding vendor', err);
    } else {
      res.send(res.json(doc));
    }
  });
}


module.exports = {
  addSeller,
  findSeller,
  addItem,
  checkVendor
}
