const Properties = require('../../models/properties')
const upload = require('./ImageUploadConfig')
const Users = require('../../models/users')

// function to handle posting images to amazon web services
exports.imageUpload = async (req, res) => {
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

// function to handle property posting to the database
exports.postProperty = async (req, res) => {
  if (req.body === null || undefined) {
    return res.status(204).send({ message: 'No information received, please input data again' })
  }

  // destructor the request to identify which will be added to the different tables
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

  // if there is a property already with the same address, city and state return a message with "Property listing already exists"
  // if not create a new property and save to the database
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
        lat: firstForm.lat,
        lng: firstForm.lng,
        Beds: firstForm.beds,
        Baths: firstForm.baths,
        SqFt: secondForm.sqFt,
        Garages: secondForm.garages,
        Price: secondForm.price,
        images: JSON.stringify([imageUrl]),
        users_id: userId.id
      })
    }
    return res.status(201).send({ message: 'Property list created successfully' })
  } catch (e) {
    return res.status(500).send({ message: 'server error ' })
  }
}

// function that gets all the properties and sends to the user
exports.getAllProperties = async (req, res) => {
  // bring all the properties and images from the db
  const properties = await Properties.findAll({ raw: true })

  try {
    if (properties) {
      return res.status(200).send({ message: 'sucess', data: properties })
    }
    return req.status(200).send({ message: 'no proprties found' })
  } catch (e) {
    return res.status(500).send({ error: 'Server Error' })
  }
}

/* function that gets propeties by the userId posted */
exports.getPropertyByUserId = async (req, res) => {
  /* get the requester userId then find the id from the properties table and send the property 
   with the corresponding userId */
  const userId = await req.params.id
  const userProperty = await Properties.findAll({
    where: { users_id: userId }
  })
  try {
    if (userProperty) return res.status(200).send({ data: userProperty, message: 'Successfully found property' })
  } catch (e) {
    return res.status(500).send({ message: 'Server Error' })
  }
}

// function to get properties by the city
exports.getPropertyByCity = async (req, res) => {
  // get the requested city (if all send all the properties) (else get the property by city from the properties table)
  // then send the data to the user
  const cityName = await req.params.id
  if (cityName === 'All') {
    const allProperties = await Properties.findAll({ raw: true })
    try {
      if (allProperties) return res.status(200).send({ message: 'successfull', data: allProperties })
      return res.status(204).send({ message: 'no content found' })
    } catch (e) {
      return res.status(500).send({ message: 'Server error' })
    }
  } else {
    const properties = await Properties.findAll({
      where: { cityState: `${cityName}, PA` }
    })
    try {
      if (properties) return res.status(200).send({ message: 'success', data: properties })
      return res.status(204).send({ message: 'no content found' })
    } catch (e) {
      return res.status(500).send({ message: 'Server error' })
    }
  }
}

// function to get property by address, sometimes we will recieve request for a bunch of addresses together
// if that's the case loop over the addresses and put each property in the property array and send
// the data to the user
exports.getPropertyByAddress = async (req, res) => {
  const addressRequest = await req.params.id
  if (addressRequest === 'All') {
    const property = await Properties.findAll({ raw: true })
    try {
      if (property) {
        return res.status(200).send({ message: 'Success', data: property })
      }
      return res.status(204).send({ message: 'content Not Found ' })
    } catch (e) {
      return res.status(500).send({ message: 'Server error' })
    }
  }
  const address = addressRequest.split(', ')
  const properties = []
  for (let i = 0; i < address.length; i++) {
    const property = await Properties.findOne({
      where: { address: address[i] }
    })
    properties.push(property)
  }
  console.log(properties.length)
  return res.status(200).send({ message: 'Success', data: properties })
}

// function to delete user's property listing from the database
exports.deleteProperty = async (req, res) => {
  // get the property Id throught the request params and find it in the properties table then delete
  const propertyId = req.params.id
  const property = await Properties.findByPk(propertyId)
  try {
    if (property) {
      await property.destroy()
      return res.status(200).send({ message: 'Successfully deleted property' })
    }
    return res.status(404).send({ message: 'Unable to find property' })
  } catch (e) {
    return res.status(500).send({ message: 'server error' })
  }
}
