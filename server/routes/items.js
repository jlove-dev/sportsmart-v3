const express = require('express');
const itemsRouter = express.Router();


//Accessible at /sellers/:vendorID/items
itemsRouter.get('/', function(req, res) {
  res.send(`You've hit that item baby`);
});

//Accessible at /sellers/:vendorID/items/:itemID
itemsRouter.get('/:itemID', function(req, res) {
  res.send(`Hit specific item: ${req.params.itemID}`);
});

module.exports = itemsRouter;
