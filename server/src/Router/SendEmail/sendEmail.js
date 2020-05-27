const express = require('express')
const router = express.Router()
const sendEmail = require('../../Controller/Emails/sendEmail')

router.post('/post/userInquiry', sendEmail.clientEmail)

module.exports = router
