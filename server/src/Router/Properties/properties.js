const express = require('express')
const router = express.Router()
const properties = require('../../Controller/Properties/propertiesController')

router.post('/propertyInfo', properties.propertyInfo)
router.post('/propertyImage', properties.upload.single('houseImage'), function (req, res) {
  res.send('Successfully uploaded ' + req + ' files!')
})

module.exports = router
