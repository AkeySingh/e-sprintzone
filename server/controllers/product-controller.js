const Product = require('../modal/Product')
const mongoose = require('mongoose')

const getAllProducts = async (req, res, next) => {
  let products
  try {
    products = await Product.find()
  } catch (error) {
    console.log(error)
  }

  if (!products) {
    return res.status(404).json({ message: 'No user found' })
  }
  console.log()
  return res.status(200).json({ products })
}

const addProduct = async (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    discription: req.body.discription,
    createdAt: req.body.createdAt,
    price: req.body.price,
    rating: req.body.rating,
    prePrice: req.body.prePrice,
  })

  product
    .save()
    .then((result) => {
      res.status(201).json({
        new_product: result,
      })
    })
    .catch((err) => {
      res.send({
        message: err,
      })
    })
}

const updatesProduct = async function (req, res) {
  const data = await Product.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        discription: req.body.discription,
        email: req.body.email,
        createdAt: req.body.createdAt,
        price: req.body.price,
        rating: req.body.rating,
        prePrice: req.body.prePrice,
      },
    }
  )
  return res.send(data)
}

const deleteProduct = async (req, res, next) => {
  Product.findOneAndDelete({ _id: req.params.id })
    .exec()
    .then((response) => res.json())
    .catch((err) => next(err))
}

module.exports = {
  addProduct,
  getAllProducts,
  updatesProduct,
  deleteProduct,
}
