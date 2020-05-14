const express = require('express')
const router = express.Router()
const usersController = require('../../Controller/Users/usersController')

router.post('/register', usersController.register)

module.exports = router
