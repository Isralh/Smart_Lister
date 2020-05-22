const Properties = require('../../models/properties')
const PropertyImages = require('../../models/propertyImages')
const upload = require('./ImageUploadConfig')
const Users = require('../../models/users')
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
  if (req.body === null || undefined) {
    return res.status(400).send({ message: 'No information recieved, please input data again' })
  }

  // destructure the request to identify which will be added to the different tables
  const firstForm = req.body[0].firstForm
  const secondForm = req.body[0].secondForm
  const imageUrl = req.body[0].imageUrl // this is an array
  const user = req.body[0].user

  // first check if there is an existing property
  const property = await Properties.findOne({
    where: {
      address: firstForm.address,
      cityState: firstForm.cityState,
      zipcode: firstForm.zipcode
    }
  })
  try {
    if (property) return res.status(200).send({ message: 'Property listing already exists' })
    else {
      const userId = await Users.findOne({
        where: {
          email: user.email
        }
      })
      Properties.create({
        address: firstForm.address,
        cityState: firstForm.cityState,
        zipcode: firstForm.zipcode,
        lat: firstForm.latitude,
        lng: firstForm.longitude,
        Beds: secondForm.beds,
        Baths: secondForm.baths,
        SqFt: secondForm.sqFt,
        Garages: secondForm.garages,
        Price: secondForm.price,
        PropertyType: secondForm.propertyType,
        users_id: userId.id
      }).then(property => {
        for (let i = 0; i < imageUrl.length; i++) {
          PropertyImages.create({
            imageUrl: imageUrl[i],
            address: property.address,
            properties_id: property.id
          })
        }
      }).catch(e => console.log(e))
    }
    return res.status(201).send({ message: 'Property list created successfully' })
  } catch (e) {
    return res.status(404).send({ message: 'Error ' })
  }
}
