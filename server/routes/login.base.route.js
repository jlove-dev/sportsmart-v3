const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.controller');

router.route('/').get(loginController.login).post(loginController.createUser);

module.exports = router;
