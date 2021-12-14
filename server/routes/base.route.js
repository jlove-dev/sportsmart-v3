const express = require('express');
const router = express.Router();
const items = require('./items'); //child

//Import controllers
const sellersController = require('../controllers/seller.controller');

router.route('/').post(sellersController.addSeller);

//Add a new vendor
router.route('/:vendorID').get(function(req, res) {
  res.send(`Found vendor #${req.params.vendorID}`);
});

//child route
router.use('/:vendorID/items', items);

module.exports = router;
