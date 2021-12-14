const express = require('express');
const router = express.Router();
const items = require('./items');

router.get('/', function(req, res) {
  res.send('API works!');
});

router.get('/:vendorID', function(req, res) {
  res.send(`Found vendor #${req.params.vendorID}`);
})

//child route
router.use('/:vendorID/items', items);

module.exports = router;
