const Properties = require('../../models/properties')

exports.propertyInfo = async (req, res) => {
  const data = await req.body
  try {
    res.status(200).send(data)
  } catch (e) {
    console.log(e)
  }
  console.log(data)
}

exports.propertyImages = async (req, res) => {
  const data = await req.body
  try {
    res.status(200).send(data)
  } catch (e) {
    console.log(e)
  }
  console.log(data)
}
