const Favorties = require('../../models/FavoriteProperty')
const Users = require('../../models/users')
const Properties = require('../../models/properties')

// function to users favorites search to the database
exports.addFavorites = async (req, res) => {
  const propertyData = await req.body[0]

  // check the data coming is not null or undefined
  if (propertyData !== null || undefined) {
    const { userInfo } = propertyData
    const { data } = propertyData

    // first check if the favorite search is alread in the database for the user
    const property = await Favorties.findOne({
      where: { user_email: userInfo, propertyId: data.id }
    })
    try {
      if (property > 0) return res.status(200).send({ message: 'property already exist in ysers favorites' })
      if (property < 1) {
        const existingUser = await Users.findOne({
          where: { email: userInfo }
        })
        Favorties.create({
          propertyId: data.id,
          user_email: userInfo,
          user_id: existingUser.id
        })
        return res.status(201).send({ message: 'Successfully added to favorites list ' })
      }
    } catch (e) {
      return res.status(200).send({ message: 'Unable to add to favorites' })
    }
  } else res.status(404).send({ message: 'Please enter valid data' })
}

// function to get users favorite searches from database
exports.getFavorites = async (req, res) => {
  const userId = await req.params.id
  const propertiesId = []
  const favoriteProperty = []

  // first get all of the users favorites property id from the favorites table
  const favoritesList = await Favorties.findAll({
    where: { user_id: userId }
  })

  // if the user has favorites get all the property id and push them to the properties Id array
  // then loop over all of the properties Id and get the properties from the properties table
  // and send the data to the user
  try {
    if (favoritesList) {
      favoritesList.map(list =>
        propertiesId.push(list.propertyId)
      )
      for (let i = 0; i < propertiesId.length; i++) {
        const property = await Properties.findByPk(propertiesId[i])
        try {
          if (property) {
            favoriteProperty.push(property)
          }
        } catch (e) {
          return res.status(404).send({ message: 'Error' })
        }
      }
      return res.status(200).send({ Message: 'success', data: favoriteProperty })
    }
    return res.status(200).send({ Message: 'Unable to find data requested' })
  } catch (e) {
    return res.status(404).send({ message: 'Error' })
  }
}
