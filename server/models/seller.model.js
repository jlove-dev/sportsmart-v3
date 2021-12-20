const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  barCode: {type: String, required: true, index: true},
  category: {type: String, required: true},
  price: {type: Number, required: true}
});

const itemTotalSchema = new mongoose.Schema({
  active: [itemSchema],
  sold: [itemSchema]
});

const salesFigureSchema = new mongoose.Schema({
  totalSold: {type: Number, required: true},
  vendorCut: {type: Number, required: true},
  troopCut: {type: Number, require: true},
})

//FIXME - there's probably some better types out there than just strings?
const sellerSchema = new mongoose.Schema({
  vendorID: {type: String, required: true, unique: true, index: true}, //Index based off of the vendorID since it's always unique
  phoneNum: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  address: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  zipCode: {type: String, required: true},
  salesFigures: salesFigureSchema,
  items: itemTotalSchema
})

mongoose.model('sellers', sellerSchema);
