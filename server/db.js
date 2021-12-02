const mongoose = require('mongoose')
require('dotenv').config({ path: './config.env' })

const connectToMongo = () => {
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Connected to mongo successfully')
  })
}

module.exports = connectToMongo
