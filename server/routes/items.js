const express = require('express');
const itemsRouter = express.Router();

itemsRouter.get('/', function(req, res) {
  res.send(`You've hit that item baby`);
});

itemsRouter.get('/:itemID', function(req, res) {
  res.send(`Hit specific item: ${req.params.itemID}`);
});

module.exports = itemsRouter;
