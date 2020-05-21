const Properties = require('../../models/properties')
const upload = require('./ImageUploadConfig')

exports.imageupload = async (req, res) => {
  const downloadUrl = []
  upload(req, res, err => {
    if (err) return res.status(200).send({ message: 'Error uploading the images' })
    const imageUrl = req.files
    for (let i = 0; i < imageUrl.length; i++) {
      downloadUrl.push(imageUrl[i].location)
    }
    return res.status(201).send(downloadUrl)
  })
}

exports.propertyInfo = async (req, res) => {
  console.log(req.body)
}
