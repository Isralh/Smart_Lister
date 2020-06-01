const Favorties = require('../../models/FavoriteProperty')
const Users = require('../../models/users')
const Properties = require('../../models/properties')
exports.addFavorites = async (req, res) => {
  const propertyData = await req.body[0]

  if (propertyData !== null || undefined) {
    const { userInfo } = propertyData
    const { data } = propertyData

    const property = await Favorties.findOne({
      where: { user_email: userInfo, propertyId: data.id }
    })
    try {
      if (property > 0) return res.status(200).send({ message: 'property already exist in the favorites' })
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

exports.getFavorites = async (req, res) => {
  const userId = await req.params.id
  const propertiesId = []
  const favoriteProperty = []
  const favoritesList = await Favorties.findAll({
    where: { user_id: userId }
  })
  try {
    if (favoritesList) {
      favoritesList.map(list =>
        propertiesId.push(list.propertyId)
      )
      for (let i = 0; i < propertiesId.length; i++) {
        const favorite = await Properties.findByPk(propertiesId[i])
        try {
          if (favorite) {
            favoriteProperty.push(favorite)
          }
        } catch (e) {
          console.log(e)
        }
      }
      return res.status(200).send({ Message: 'success', data: favoriteProperty })
    }
    return res.status(200).send({ Message: 'Unable to find data requested' })
  } catch (e) {
    console.log(e)
  }
}
