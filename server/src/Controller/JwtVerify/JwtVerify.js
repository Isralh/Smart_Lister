const jwt = require('jsonwebtoken')
const jwtConfig = require('../../config/jwtConfig.json')
const jwtVerify = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader === undefined) {
    return res.status(403).send({ message: 'forbidden' })
  } else {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, jwtConfig.jwtSecret, (err, user) => {
      if (err) return res.status(403).send({ message: 'forbidden' })
      req.user = user
      next()
    })
  }
}

module.exports = jwtVerify
