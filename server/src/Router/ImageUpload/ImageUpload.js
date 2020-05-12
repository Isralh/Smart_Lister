// const express = require('express')
// const path = require('path')
// const router = express.Router()
// const property_Image = require('../../models/property_image')
// const ImageUploader = require('../../Controller/ImageUpload/ImageUploader')
// const multer = require('multer')
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './images')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   }
// })
// const upload = multer({ storage: storage })

// router.post('/api/imageUpload', upload.single('propertyImage'), async (req, res) => {
//   const clientRequest = req.file
//   const cleanPath = clientRequest.path.replace(/([^:])(\/\/+)/g, '$1/')
//   console.log(cleanPath)
//   const { name, propertyImage } = req.body
//   property_Image.create({
//     name: name,
//     image: cleanPath
//   }).then(res.send('success')).catch(e => console.log(e))
// })
// router.get('/api', async (req, res) => {
//   const data = await property_Image.findAll({ raw: true })
//   try {
//     if (data) {
//       res.send(data)
//     }
//   } catch (e) {
//     res.send(e)
//   }
// })
// module.exports = router
