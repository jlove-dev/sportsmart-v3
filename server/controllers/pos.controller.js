const mongoose = require('mongoose');
const model = mongoose.model('sellers');

const sellItem = async (req, res) => {

  let result;

  await model.findOne({"items.active.barCode": req.body.barCode}).then((doc) => {
    let iter = doc.items.active;
    //FIXME - wondering if there's a more efficient way to do this
    for (let i = 0; i < iter.length; i++) {
      if (iter[i].barCode === req.body.barCode) {
        result = iter[i];
      }
    }
  });

  await model.updateOne({'items.active.barCode': req.body.barCode},
    {
      $pull: {
        'items.active': {
          barCode: req.body.barCode
        }
      },
      $push: {
        'items.sold': {
          barCode: result.barCode,
          category: result.category,
          price: result.price
        }
      },
      $inc: {
        'salesFigures.totalSold': result.price,
        'salesFigures.vendorCut': result.price * .75,
        'salesFigures.troopCut': result.price * .25
      }
    }).exec((err, item) => {
      if(!item) {
        return res.status(404).json({'message': 'Unable to sell item'})
      } else if (err) {
        return res.status(404).json(err);
      } else {
        return res.status(200).json(item)
      }
  })
};

//FIXME - model.exists

const getItem = async (req, res) => {
  await model.findOne({"items.active.barCode": req.query.barCode})
    .exec((err, item) => {
      if(!item) {
        return res.status(404).json({'message': 'Can\'t find that item!'})
      } else if (err) {
        return res.status(404).json(err);
      } else {
        return res.status(200).json({'message': 'true'});
      }
    });
}

module.exports = {sellItem, getItem};
