const Favorties = require('../../models/FavoriteProperty')

const deleteFavorites = async (req, res) => {
  const { property, user } = await req.body

  const userFavorites = await Favorties.findOne({
    where: { propertyId: property, user_id: user }
  })

  try {
    if (userFavorites) {
      try {
        userFavorites.destroy()
        return res.status(200).send({ message: 'property removed from favorites list' })
      } catch (e) {
        console.log(e)
      }
    } else {
      return res.status(400).send({ message: 'Property not found' })
    }
  } catch (e) {
    console.log(e)
  }
}

module.exports = deleteFavorites
