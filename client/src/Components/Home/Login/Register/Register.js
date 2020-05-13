import React from 'react'
import { Container, ModalWrapper, Content } from './RegisterStyling'
export default function Register ({ registerModal, displayLogin }) {
  return (
    <Container show={registerModal}>
      <ModalWrapper>
        <Content>
          <h1>Register</h1>
          <form>
            <input type='text' name='First Name' placeholder='First Name' required />
            <input type='text' name='Last Name' placeholder='Last Name' required />
            <input type='text' name='Email' placeholder='Email' required />
            <input type='text' name='Password' placeholder='Password' required />
            <input type='text' name='Confirm Password' placeholder='Confirm Password' required />
            <button type='submit'>Sign Up</button>
          </form>
          <p>Already a member? <span onClick={displayLogin}>Login</span></p>
        </Content>
      </ModalWrapper>
    </Container>
  )
}
