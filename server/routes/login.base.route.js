const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.controller');

//Routes utilize the checkAuth middleware
//TODO - need to add checkAuth for production on post
router.route('/').get(loginController.login).post(loginController.createUser);

module.exports = router;
