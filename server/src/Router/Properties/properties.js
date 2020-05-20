const express = require('express')
const router = express.Router()
const properties = require('../../Controller/Properties/propertiesController')

router.post('/propertyInfo', properties.propertyInfo)
router.post('/image', properties.imageupload)

module.exports = router
