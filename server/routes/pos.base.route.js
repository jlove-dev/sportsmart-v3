const express = require('express');
const router = express.Router();
const items = require('./items'); //child

//Import controllers
const posController = require('../controllers/pos.controller');

router.route('/').post(posController.sellItem).get(posController.getItem);

module.exports = router;
