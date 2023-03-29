const express = require('express')
const { getAllUser, updateUser, addAllUser } = require('../controllers/user-controller')

const router = express.Router()

router.get('/user/getalluser', getAllUser)
router.post('/user/adduser', addAllUser)
router.put('/user/updateuser/:id', updateUser)

module.exports = router
