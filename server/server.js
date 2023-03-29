const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

app.use('/api/users', require('./routes/user-routes'))
app.use('/api', require('./routes/todo-list-routes'))

mongoose.set('strictQuery', false)
mongoose
  .connect('mongodb+srv://akey9009:akey9009@cluster0.o6319wy.mongodb.net/todo_list?retryWrites=true&w=majority')
  .then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
      console.log(`Node API app is running on port 3000`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
