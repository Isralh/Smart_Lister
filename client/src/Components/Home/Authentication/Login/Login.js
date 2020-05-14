import React from 'react'
import { Container, ModalWrapper, Content } from './LoginStyling'
export default function Login ({ loginModal, displayRegister }) {
  return (
    <Container show={loginModal}>
      <ModalWrapper>
        <Content>
          <h1>Login</h1>
          <form>
            <input type='text' name='Email' placeholder='Email' required />
            <input type='text' name='Password' placeholder='Password' required />
            <button type='submit'>Login</button>
          </form>
          <p>Need an account? <span onClick={displayRegister}>Register</span></p>
        </Content>
      </ModalWrapper>
    </Container>
  )
}
