const Favorties = require('../../models/FavoriteProperty')

const deleteFavorites = async (req, res) => {
    const response = await req.body
  console.log(response)
}

module.exports = deleteFavorites
