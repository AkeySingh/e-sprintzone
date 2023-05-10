const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', require('./routes/user-routes'))
app.use('/api', require('./routes/todo-list-routes'))
app.use('/api', require('./routes/product-routes'))

app.get('/', (req, res) => {
  res.send('Your applicaton is runnig')
})

mongoose.set('strictQuery', false)
mongoose
  .connect('mongodb+srv://akey9009:akey9009@cluster0.qjeeoad.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('connected to MongoDB')
    app.listen(8000, () => {
      console.log(`Node API app is running on port 8000`)
    })
  })

  .catch((error) => {
    console.log(error)
  })
