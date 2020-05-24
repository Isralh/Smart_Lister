const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const properties = require('./Router/Properties/properties')
const users = require('./Router/Users/Users')
const favorties = require('./Router/Favorties/Favorties')
app.use(express.json())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(express.static('images'))
// router
app.use('/api', properties)
app.use('/api', users)
app.use('/api', favorties)
const PORT = process.env.PORT || 3001
app.listen(PORT, (e) => e ? console.log(e) : console.log(`successfully connected to ${PORT}`))
