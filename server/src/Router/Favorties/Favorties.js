const express = require('express')
const router = express.Router()
const favorties = require('../../Controller/Favorites/favorites')
const deleteFavorties = require('../../Controller/Favorites/deleteFavorites')
// router to post and get users favorite property lists
router.post('/post/favoriteProperties', favorties.addFavorites)
router.get('/get/favorites/:id', favorties.getFavorites)
router.post('/delete/favoriteProperties', deleteFavorties)
module.exports = router
