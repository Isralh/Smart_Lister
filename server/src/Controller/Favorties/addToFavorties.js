const Favorties = require('../../models/FavoriteProperty')
const Users = require('../../models/users')
exports.getFavorites = async (req, res) => {
  const propertyData = await req.body[0]

  if (propertyData !== null || undefined) {
    const { userInfo } = propertyData
    const { data } = propertyData
    console.log(userInfo)
    console.log(data.id)
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
