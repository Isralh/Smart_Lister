const Properties = require('../../models/properties')

const updateProperty = async (req, res) => {
  const propertyId = await req.params.id
  const data = req.body

  const properties = await Properties.findByPk(propertyId)

  try {
    if (properties) {
      properties.update({
        address: data.address,
        cityState: data.cityState,
        zipcode: data.zipcode,
        Beds: data.beds,
        Baths: data.baths,
        SqFt: data.sqFt,
        Garages: data.garages,
        Price: data.price,
        images: JSON.stringify([data.imageUrl])
      }).then(propertyData => {
        return res.status(200).send({ data: propertyData, message: 'Success' })
      }).catch(e => { return res.status(404).send({ message: 'Unable to update property data' }) })
    }
  } catch (e) {
    return res.status(500).send({ message: 'Server error' })
  }
}

module.exports = updateProperty
