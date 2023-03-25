const express = require('express')
const { getAllUser, updateUser } = require('../controllers/user-controller')

const router = express.Router()

router.get('/getalluser', getAllUser)
router.put('/updateuser/:id', updateUser)

module.exports = router
