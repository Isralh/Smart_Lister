import React from 'react'
import { Container, ModalWrapper, Content } from './LoginStyling'
export default function Login ({ loginModal, displayRegister, handleSubmit, handleChange, loginClose }) {
  return (
    <Container show={loginModal}>
      <ModalWrapper>
        <Content>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type='text' name='email' placeholder='Email' required onChange={handleChange} />
            <input type='text' name='password' placeholder='Password' required onChange={handleChange} />
            <button type='submit'>Login</button>
          </form>
          <p onClick={loginClose}>Close </p>
          <p>Need an account? <span onClick={displayRegister}>Register</span></p>
        </Content>
      </ModalWrapper>
    </Container>
  )
}
