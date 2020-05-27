exports.emailOutput = (senderEmail, address, name, email, message) => {
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
