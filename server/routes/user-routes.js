const express = require('express')
const { getAllUser, updateUser, addAllUser } = require('../controllers/user-controller')

const router = express.Router()

router.get('/getalluser', getAllUser)
router.get('/addalluser', addAllUser)
router.put('/updateuser/:id', updateUser)

module.exports = router
