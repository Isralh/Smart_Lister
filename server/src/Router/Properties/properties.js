const express = require('express')
const router = express.Router()
const properties = require('../../Controller/Properties/propertiesController')
const updateProperty = require('../../Controller/Properties/UpdateProperty')
// routers to post and get properties
router.post('/post/propertyImages', properties.imageUpload)
router.post('/post/propertyInfo', properties.postProperty)
router.get('/get/allProperties', properties.getAllProperties)
router.get('/get/property/city/:id', properties.getPropertyByCity)
router.get('/get/property/address/:id', properties.getPropertyByAddress)
router.get('/get/user/properties/:id', properties.getPropertyByUserId)
router.delete('/delete/property/:id', properties.deleteProperty)
router.put('/update/property/:id', updateProperty)
module.exports = router
