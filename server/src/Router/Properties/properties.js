const express = require('express')
const router = express.Router()
const properties = require('../../Controller/Properties/propertiesController')

router.post('/post/propertyImages', properties.imageupload)
router.post('/post/propertyInfo', properties.propertyInfo)

module.exports = router
