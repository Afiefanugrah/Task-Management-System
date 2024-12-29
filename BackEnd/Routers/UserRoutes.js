const express = require('express')
const Router = express.Router()
const UserController = require('../Controllers/UserController')

Router.get('/', async (req, res) => UserController.index(req, res))

module.exports = Router