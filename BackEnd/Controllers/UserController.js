const express = require('express')
// const Router = express.Router()

class UserController {
  async index(req, res) {
    res.send("testing")
  }
}

module.exports = new UserController()

