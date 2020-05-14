const Users = require('../../models/users')
var bcrypt = require('bcrypt')

exports.register = async (req, res) => {
  const userData = await req.body
  const { email } = userData
  const { password } = userData
  const { confirmPassword } = userData

  // search existing users from our Users database and find any user that has the same email address
  const existingUsers = await Users.findAll({ where: { email: email } })
  if (!email.includes('@')) {
    return res.status(200).send({ message: 'please enter a valid email' })
  }
  if (password.length < 6) {
    return res.status(200).send({ message: 'password has to be at least 6 characters' })
  }
  if (confirmPassword !== password) {
    return res.status(200).send({ message: 'passwords must match' })
  }

  try {
    if (existingUsers.length > 0) {
      return res.status(200).send({ message: 'email account already exists' })
    }
    // if there isn't existing user create a new user
    Users.create({
      email: email,
      password: await bcrypt.hash(password, 8),
      confirmPassword: await bcrypt.hash(confirmPassword, 8)
    })
    return res.status(201).send({ message: 'user created successfully' })
  } catch (e) {
    console.log(e)
    return res.status(404).send({ message: 'server error', e })
  }
}
