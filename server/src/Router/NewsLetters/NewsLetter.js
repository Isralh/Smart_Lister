const express = require('express')
const router = express.Router()
const addSubscription = require('../../Controller/NewsLetter/AddSubscription')

router.post('/post/newsubscriber', addSubscription)

module.exports = router
