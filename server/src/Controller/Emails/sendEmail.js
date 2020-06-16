const User = require('../../models/users')
const nodemailer = require('nodemailer')
const { emailSetting } = require('../../config/email')
// const emailOutput = require('./output')
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailSetting.email,
    pass: emailSetting.pass
  }
})
const emailOutput = (senderEmail, address, name, email, message) => {
  return (
          `<h3> Hello ${senderEmail}, you've got a new inquiry about ${address}. See the inquiries message and contact info below.</h3>
          <h3>Contact Detail</h3>
          <ul>
              <li>Name:  ${name} </li>
              <li>email: ${email}</li>
          </ul>
          <h3>Message</h3>
          <p>${message} </p>`
  )
}
exports.clientEmail = async (req, res) => {
  const sentData = await req.body[0]
  const { property, senderInfo } = sentData
  const listerEmailAddress = []
  const listerInfo = await User.findByPk(property.users_id)

  const mailOptions = {
    from: senderInfo.email,
    to: listerEmailAddress,
    replyTo: senderInfo.email,
    subject: `New inquiry about ${property.address}`,
    html: emailOutput(listerEmailAddress, property.address, senderInfo.name, senderInfo.email, senderInfo.message)
  }
  try {
    if (listerInfo) {
      listerEmailAddress.push(listerInfo.email)
      transporter.sendMail(mailOptions, (err, data) => {
        return err ? console.log(err) : res.status(200).send({ message: 'email sent successfuly', data: data })
      })
    }
  } catch (e) {
    return res.status(404).send({ message: 'Error', e })
  }
}
