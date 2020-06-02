const express = require('express')
const router = express.Router()
const properties = require('../../Controller/Properties/propertiesController')

router.post('/post/propertyImages', properties.imageupload)
router.post('/post/propertyInfo', properties.propertyInfo)
router.get('/get/allProperties', properties.getAllProperties)
router.get('/get/property/:id', properties.getPropertyByUseId)
router.get('/get/user/properties/:id', properties.getPropertyByUseId)
router.post('/delete/property/:id', properties.deleteProperty)
module.exports = router
