const express = require('express')
const { getTodoList, postTodoList } = require('../controllers/todo-list-controller')

const router = express.Router()

router.get('/get/todolist', getTodoList)
router.post('/post/todolist', postTodoList)

module.exports = router
