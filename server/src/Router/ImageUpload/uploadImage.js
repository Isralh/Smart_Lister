const express = require('express')
const router = express.Router()
const upload = require('../../Controller/ImageUpload/ImageUploader')

const singleUpload = upload.single('propertyImage')

router.post('/image', singleUpload, (req, res) => {
  singleUpload(req, res, (err) => {
    err ? console.log(err) : res.json({ imageUrl: req.file.location })
  })
})

module.exports = router
