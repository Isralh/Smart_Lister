const express = require('express')
const router = express.Router()
const favorties = require('../../Controller/Favorites/favorites')
const deleteFavorties = require('../../Controller/Favorites/deleteFavorites')
const jwtVerify = require('../../Controller/JwtVerify/JwtVerify')

router.post('/post/favoriteProperties', jwtVerify, favorties.addFavorites)
router.get('/get/favorites/:id', jwtVerify, favorties.getFavorites)
router.post('/delete/favoriteProperties', jwtVerify, deleteFavorties)
module.exports = router
