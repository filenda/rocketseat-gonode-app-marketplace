const express = require('express')
const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

//  the bellow require states imports the object(s) beeing exported
//  from 'index.js'  file on the controllers folder
const controllers = require('./app/controllers')

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

//  Every route declared from this point will use the authMidlleware
routes.use(authMiddleware)

/**
 * Ads
 */
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', controllers.AdController.store)
routes.put('/ads/:id', controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

/**
 * Puchases
 */
routes.post('/purchases', controllers.PurchaseController.store)

module.exports = routes
