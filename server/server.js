// const express = require('express')
// const cors = require('cors')
// const mongoose = require('mongoose')
// const app = express()

// app.use(express.json())
// app.use(cors())

// // app.use('/api', require('./routes/user-routes'))
// // app.use('/api', require('./routes/todo-list-routes'))
// // app.use('/api', require('./routes/product-routes'))

// app.get('/', (req, res) => {
//   res.send('Your applicaton is runnig')
// })

// mongoose.set('strictQuery', false)
// mongoose
//   .connect('mongodb+srv://akey9009:akey9009@cluster0.qjeeoad.mongodb.net/?retryWrites=true&w=majority')
//   .then(() => {
//     console.log('connected to MongoDB')
//     app.listen(8000, () => {
//       console.log(`Node API app is running on port 8000`)
//     })
//   })

//   .catch((error) => {
//     console.log(error)
//   })

//-------------------------------------------------------------------------------------------------------------------

const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')
// const authJwt = require('./helpers/jwt')
const errorHandler = require('./helpers/error-handler')

app.use(cors())
app.options('*', cors())

//middleware
app.use(express.json())
app.use(morgan('tiny'))
// app.use(authJwt())
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))
app.use(errorHandler)

//Routes
const categoriesRoutes = require('./routes/categories')
const productsRoutes = require('./routes/products')
const usersRoutes = require('./routes/users')
const ordersRoutes = require('./routes/orders')

// const api = process.env.API_URL
const api = 'api'

app.use('/api/categories', require('./routes/categories'))
// app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/products`, productsRoutes)
app.use(`/${api}/users`, usersRoutes)
app.use(`${api}/orders`, ordersRoutes)

//Database
mongoose
  // .connect(process.env.CONNECTION_STRING,

  .connect(
    'mongodb+srv://akey9009:akey9009@cluster0.qjeeoad.mongodb.net/?retryWrites=true&w=majority',

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'eshop-database',
    }
  )
  .then(() => {
    console.log('Database Connection is ready...')
  })
  .catch((err) => {
    console.log(err)
  })

//Server
app.listen(8000, function (err) {
  if (err) console.log('Error in server setup')
  console.log('Server listening on Port', 8000)
})
