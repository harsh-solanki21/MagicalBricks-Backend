const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Property = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  // images: {
  //   type: String,
  //   required: true,
  // },
  files: [Object],
  totalPrice: {
    type: String,
    required: true,
  },
  sqftPrice: {
    type: String,
    required: true,
  },
  bhk: {
    type: Number,
    required: true,
  },
  carpetArea: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const model = mongoose.model('properties', Property)

module.exports = model
