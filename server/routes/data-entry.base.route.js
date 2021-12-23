const express = require('express');
const router = express.Router();

//Import controllers
const sellersController = require('../controllers/seller.controller');
const {checkAuth} = require("../controllers/auth.controller");

//Routes utilize the checkAuth middleware
router.route('/').get(checkAuth, sellersController.findSeller).post(checkAuth, sellersController.addSeller);

router.route('/:vendorID').put(checkAuth, sellersController.addItem).get(checkAuth, sellersController.checkVendor);

module.exports = router;
