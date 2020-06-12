const NewsLetters = require('../../models/NewsLetters')

const addSubscription = async (req, res) => {
  const { firstName, lastName, email } = req.body
  console.log(email)
  const existingSub = await NewsLetters.findOne({
    where: { email: email }
  })
  if (existingSub) return res.status(200).send({ message: 'user already subscribed' })

  const newSub = await NewsLetters.create({
    firstName: firstName,
    lastName: lastName,
    email: email
  })

  try {
    if (newSub) return res.status(201).send({ message: 'successfully created new subscription ' })
    return res.status(400).send({ message: 'unable to subscribe user ' })
  } catch (e) {
    console.log(e)
  }
}

module.exports = addSubscription
