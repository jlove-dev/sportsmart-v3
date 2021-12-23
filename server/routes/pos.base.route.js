const express = require('express');
const router = express.Router();

//Import controllers
const posController = require('../controllers/pos.controller');
const {checkAuth} = require("../controllers/auth.controller");

//Routes utilize the checkAuth middleware
router.route('/').post(checkAuth, posController.sellItem).get(checkAuth, posController.getItem);

module.exports = router;
