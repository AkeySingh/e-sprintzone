const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },
})

const Users = mongoose.model('Users', userSchema)
module.exports = Users
