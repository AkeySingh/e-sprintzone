const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  imageUrl: String,
  discription: String,
  createdAt: Date,
  price: Number,
  rating: Number,
  prePrice: Number,
})

const Product = mongoose.model('Product', userSchema)
module.exports = Product
