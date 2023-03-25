const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.set('strictQuery', false)
mongoose
  .connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.o6319wy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
      console.log(`Node API app is running on port 3000`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
