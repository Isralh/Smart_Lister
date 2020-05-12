const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const uploadImage = require('./Router/ImageUpload/uploadImage')
const getProperties = require('./Router/Properties/getProperties')
app.use(express.json())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(express.static('images'))
// router
app.use('/', uploadImage)
app.use('/api', getProperties)
const PORT = process.env.PORT || 3001
app.listen(PORT, (e) => e ? console.log(e) : console.log(`successfully connected to ${PORT}`))
