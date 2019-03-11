const express = require('express')
const mongoose = require('mongoose')
const databaseConfig = require('./config/database')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production' // Development, Production, Testing

    //  Make sure to follow the exact calling order bellow
    this.database()
    this.middlewares()
    this.routes()
  }

  database () {
    //  connection string expected format:
    //  mongodb://usuario:senha@localhost:27017/databasename
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true, // node-version-specific mongoose instructions
      useNewUrlParser: true // node-version-specific mongoose instructions
    })
  }

  middlewares () {
    //  'teaches' express how to interpret json from 'req.body' for eg.
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

//  exports only the object of interest (aka express) of an instance of 'App'
module.exports = new App().express
