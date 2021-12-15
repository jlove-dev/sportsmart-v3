const express = require('express');
const router = express.Router();
const items = require('./items'); //child

//Import controllers
const sellersController = require('../controllers/seller.controller');

router.route('/').get(sellersController.findSeller).post(sellersController.addSeller);

//child route
router.use('/:vendorID/items', items);

module.exports = router;
