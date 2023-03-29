const User = require('../modal/User')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const getAllUser = async (req, res, next) => {
  let users
  try {
    users = await User.find()
  } catch (error) {
    console.log(error)
  }

  if (!users) {
    return res.status(404).json({ message: 'No user found' })
  }
  console.log()
  return res.status(200).json({ users })
}

const addAllUser = async (req, res, next) => {
  if (false) {
    console.log('if in :', err)
    res.status(501).json({ error: err })
  } else {
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      password: 'hash',
      phone: req.body.phone,
      email: req.body.email,
      userType: req.body.userType,
    })

    user.save().then((result) => {
      res.status(201).json({
        new_user: result,
      })
    })
  }
}

const updateUser = function (req, res) {
  console.log(req.body)
  User.findOneAndUpdate(req.param.id, { $set: req.body }, function (err, result) {
    if (err) {
      console.log(err)
    }
    console.log('RESULT: ' + result)
  })
  res.send('Done')
}

module.exports = {
  getAllUser,
  updateUser,
  addAllUser,
}
