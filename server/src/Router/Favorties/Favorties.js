const express = require('express')
const router = express.Router()
const favorties = require('../../Controller/Favorties/addToFavorties')

router.post('/post/favoriteProperties', favorties.getFavorites)

module.exports = router
