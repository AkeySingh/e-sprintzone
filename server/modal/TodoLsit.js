const mongoose = require('mongoose')
// const mongoose = require('mongoose')

const todoListSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  discription: {
    type: String,
    require: true,
  },
})

const TodoList = mongoose.model('List', todoListSchema)
module.exports = TodoList
