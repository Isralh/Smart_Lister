import React from 'react'
import { Container, ModalWrapper, Content, ButtonWrapper } from './RegisterStyling'
function Register ({
  registerModal, handleRegisteration, firstName, lastName, email, password, confirmPassword, handleChange, displayLogin,
  registerClose
}) {
  return (
    <Container show={registerModal}>
      <ModalWrapper>
        <Content>
          <h1>Register</h1>
          <form onClick={handleRegisteration}>
            <input type='text' name='firstName' value={firstName} placeholder='First Name' required onChange={handleChange} /> <br />
            <input type='text' name='lastName' value={lastName} placeholder='Last Name' required onChange={handleChange} /> <br />
            <input type='text' name='email' value={email} placeholder='Email' required onChange={handleChange} /> <br />
            <input type='text' name='password' value={password} placeholder='Password' required onChange={handleChange} /> <br />
            <input type='text' name='confirmPassword' value={confirmPassword} placeholder='Confirm Password' required onChange={handleChange} /> <br />
            <ButtonWrapper>
              <p>Already a member? <span onClick={displayLogin}>Login</span></p>
              <button type='submit'>Sign Up</button>
            </ButtonWrapper>
          </form>
        </Content>
      </ModalWrapper>
    </Container>
  )
}
export default Register
// <p onClick={registerClose}>Close</p>
