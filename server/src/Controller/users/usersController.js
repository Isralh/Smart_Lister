const Users = require('../../models/users')
var bcrypt = require('bcryptjs')

exports.register = async (req, res) => {
  const userData = await req.body
  const { firstName } = userData
  const { lastName } = userData
  const { email } = userData
  const { password } = userData
  const { confirmPassword } = userData

  try {
    if (firstName.length === 0) {
      return res.status(404).send({ message: 'first name field required' })
    }
    if (lastName.length === 0) {
      return res.status(404).send({ message: 'last name field required' })
    }
    if (!email.inculde('@')) {
      return res.status(404).send({ message: 'please enter a valid email' })
    }
    if (password.length < 6) {
      return res.status(404).send({ message: 'password has to be at least 6 characters' })
    }
    if (confirmPassword !== password) {
      return res.status(404).send({ message: 'passwords must match' })
    }

    // check for existing users.... Users return a promise try and catch that too
    Users.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: await bcrypt.hash(password, 8),
      confirmPassword: await bcrypt.hash(confirmPassword, 8)
    })
  } catch (e) {
    console.log(e)
  }
}
