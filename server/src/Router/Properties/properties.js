const express = require('express')
const router = express.Router()
const properties = require('../../Controller/Properties/propertiesController')
const updateProperty = require('../../Controller/Properties/UpdateProperty')
// routers to post and get properties
router.post('/post/propertyImages', properties.imageupload)
router.post('/post/propertyInfo', properties.propertyInfo)
router.get('/get/allProperties', properties.getAllProperties)
router.get('/get/property/city/:id', properties.getPropertyByCity)
router.get('/get/property/address/:id', properties.getPropertyByAddress)
router.get('/get/user/properties/:id', properties.getPropertyByUserId)
router.post('/delete/property/:id', properties.deleteProperty)
router.put('/update/property/:id', updateProperty)
module.exports = router
