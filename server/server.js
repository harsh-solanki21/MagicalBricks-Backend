const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const connectToMongo = require('./db')
const passport = require('passport')
require('dotenv').config({ path: './config.env' })
const users = require('./routes/users')
const properties = require('./routes/properties')

connectToMongo()
const app = express()
const port = process.env.PORT

app.use(express.json()) // middleware to parse data in json
app.use(cors())

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())

// Passport middleware
app.use(passport.initialize())

// Passport config
require('./config/passport')(passport)

// Routes
app.use('/', users)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/', properties.routes)

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`)
})
