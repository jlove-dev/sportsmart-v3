const express = require('express');
const router = express.Router();
const items = require('./items'); //child

//Import controllers
const sellersController = require('../controllers/seller.controller');

router.route('/').get(sellersController.findSeller).post(sellersController.addSeller);

router.route('/item/:barCode').get(sellersController.getItem);

router.route('/vendor/:vendorID').put(sellersController.addItem).get(sellersController.checkVendor);

//child route
router.use('/:vendorID/items', items);

module.exports = router;
