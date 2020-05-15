const Users = require('../../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../config/jwtConfig.json')

// function to register user
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

// function to login user
exports.login = async (req, res) => {
  const userData = await req.body
  const { email } = userData
  const { password } = userData

  // search from database if the email sent from the user exists
  const existingUser = await Users.findOne({ where: { email: email } })
  try {
  // if email doesn't exist
    if (existingUser < 1) { return res.status(200).send({ message: 'user not found ' }) }
    if (existingUser) {
      bcrypt.compare(password, existingUser.password).then(result => {
        if (result) {
          const token = jwt.sign({
            email: existingUser.email
          }, config.jwtSecret, {
            expiresIn: '1hr'
          })
          return res.status(202).send({ message: 'successfuly signed in', token: token })
        } else { return res.status(200).send({ message: 'incorrect password ' }) }
      }).catch(e => console.log(e))
    }
  } catch (e) {
    console.log(e)
    return res.status(404).send({ message: 'server error' })
  }
}

// try {
//   // if email doesn't exist
//   if (existingUser < 1) { return res.status(200).send({ message: 'user not found ' }) }

//   // if email exists compare the password and authenticate
//   if (existingUser) {
//     bcrypt.compare(password, existingUser.password, (err, result) => {
//       if (err) { return res.status(200).send({ message: 'Incorrect password' }) }
//       if (result) {
//         const token = jwt.sign({
//           email: existingUser.email
//         }, config.jwtSecret, {
//           expiresIn: '1hr'
//         })
//         return res.status(200).send({ message: 'successfuly signed in', token: token })
//       }
//     })
//   }
// } catch (e) {
//   console.log(e)
//   return res.status(404).send({ message: 'server error' })
// }
// }
