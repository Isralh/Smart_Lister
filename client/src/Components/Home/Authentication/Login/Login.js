import React from 'react'
import { Container, ModalWrapper, Content } from './LoginStyling'
export default function Login ({ loginModal, displayRegister, handleSubmit, handleEmail, handlePassword, loginClose }) {
  return (
    <Container show={loginModal}>
      <ModalWrapper>
        <Content>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type='text' name='Email' placeholder='Email' required onChange={handleEmail} />
            <input type='text' name='Password' placeholder='Password' required onChange={handlePassword} />
            <button type='submit'>Login</button>
          </form>
          <p onClick={loginClose}>Close </p>
          <p>Need an account? <span onClick={displayRegister}>Register</span></p>
        </Content>
      </ModalWrapper>
    </Container>
  )
}
