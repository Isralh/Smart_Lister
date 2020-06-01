const express = require('express')
const router = express.Router()
const favorties = require('../../Controller/Favorties/favorites')

router.post('/post/favoriteProperties', favorties.addFavorites)
router.get('/get/favorites/:id', favorties.getFavorites)
module.exports = router
