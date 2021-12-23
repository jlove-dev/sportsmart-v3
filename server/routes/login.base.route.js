const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.controller');
const {checkAuth} = require("../controllers/auth.controller");

//Routes utilize the checkAuth middleware
router.route('/').get(loginController.login).post(checkAuth, loginController.createUser);

module.exports = router;
