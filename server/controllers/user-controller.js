const User = require('../modal/User')

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
}
