import React from 'react'
import { Container, Heading, FormContainer, Input, Message, Button } from './InquiryStyling'

const InquiryForm = ({ handleSubmit, handleInput, isSubmitting }) => {
  return (
    <Container>
      <Heading>
        <p>Contact Seller</p>
      </Heading>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <label>Name</label><br />
          <Input name='name' required onChange={handleInput} /> <br />
          <label>Email</label><br />
          <Input name='email' required onChange={handleInput} /><br />
          <label>Phone Number (Optional)</label><br />
          <Input name='phone' onChange={handleInput} /><br />
          <label>Message</label><br />
          <Message name='message' required onChange={handleInput} minLength='5' /><br />
          {isSubmitting ? <Button type='submit'>Sending...</Button> : <Button type='submit'>Send</Button>}
        </form>
      </FormContainer>
    </Container>
  )
}

export default InquiryForm
