const express = require('express')
const { getAllUser, updateUser, addAllUser, deleteUser } = require('../controllers/user-controller')

const router = express.Router()

router.get('/user/get', getAllUser)
router.post('/user/add', addAllUser)
router.put('/user/udate/:id', updateUser)
router.delete('/user/delete/:id', deleteUser)

module.exports = router
