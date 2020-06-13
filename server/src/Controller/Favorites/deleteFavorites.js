const Favorties = require('../../models/FavoriteProperty')

const deleteFavorites = async (req, res) => {
  const { property, user } = await req.body

  const userFavorites = await Favorties.findOne({
    where: { propertyId: property, user_id: user }
  })

  try {
    if (userFavorites) {
      userFavorites.destroy()
      return res.status(200).send({ message: 'property removed from favorites list' })
    } else {
      return res.status(204).send({ message: 'Property not found' })
    }
  } catch (e) {
    return res.status(500).send({message: 'Server error' })
  }
}

module.exports = deleteFavorites
