import React from 'react'
import { Container, ModalWrapper, Content } from './RegisterStyling'
function Register ({
  registerModal, handleRegisteration, email, password, confirmPassword, handleChange, displayLogin,
  registerClose
}) {
  return (
    <Container show={registerModal}>
      <ModalWrapper>
        <Content>
          <h1>Register</h1>
          <form onSubmit={handleRegisteration}>
            <input type='text' name='email' value={email} placeholder='Email' required onChange={handleChange} />
            <input type='text' name='password' value={password} placeholder='Password' required onChange={handleChange} />
            <input type='text' name='confirmPassword' value={confirmPassword} placeholder='Confirm Password' required onChange={handleChange} />
            <button type='submit'>Sign Up</button>
          </form>
          <p>Already a member? <span onClick={displayLogin}>Login</span></p>
          <p onClick={registerClose}>Close</p>
        </Content>
      </ModalWrapper>
    </Container>
  )
}
export default Register
