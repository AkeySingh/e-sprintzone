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
  bcrypt.hash(req.body.password, 1, (err, hash) => {
    if (err) {
      res.status(501).json({ error: err })
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: hash,
        phone: req.body.phone,
        email: req.body.email,
        userType: req.body.userType,
      })

      user
        .save()
        .then((result) => {
          res.status(201).json({
            new_user: result,
          })
        })
        .catch((err) => {
          res.send({
            message: err,
          })
        })
    }
  })
}

const updateUser = async function (req, res) {
  const data = await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone,
        email: req.body.email,
        userType: req.body.userType,
      },
    }
  )
  return res.send(data)
}

const deleteUser = async (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.id })
    .exec()
    .then((response) => res.json())
    .catch((err) => next(err))
}

module.exports = {
  getAllUser,
  updateUser,
  addAllUser,
  deleteUser,
}
