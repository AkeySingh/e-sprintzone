const express = require('express')
const { addProduct, getAllProducts, updatesProduct, deleteProduct } = require('../controllers/product-controller')

const router = express.Router()

router.post('/add/product', addProduct)
router.get('/get/product', getAllProducts)
router.put('/update/product/:id', updatesProduct)
router.delete('/delete/product/:id', deleteProduct)

module.exports = router
