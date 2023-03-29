const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  phone: String,
  email: {
    type: String,
    require: true,
  },
  usertype: String,
  password: {
    type: String,
    require: true,
  },
})

const Users = mongoose.model('Users', userSchema)
module.exports = Users
