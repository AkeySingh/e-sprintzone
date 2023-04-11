const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: String,
  password: {
    type: String,
    require: true,
  },
  confirmPassword: String,
})

const Users = mongoose.model('Users', userSchema)
module.exports = Users
