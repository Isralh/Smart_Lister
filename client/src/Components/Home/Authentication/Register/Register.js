import React, { useEffect } from 'react'
import { Container, ModalWrapper, Content } from './RegisterStyling'
import Authentication from '../Authentication/Authentication'

function Register ({
  registerModal, displayLogin, registerClose, userInfo, getEmail,
  getPassword, getConfirmedPassword
}) {
  const [user, handleEmail, handlePassword, handleConfirmPassword] = Authentication({ userInfo, getEmail, getPassword, getConfirmedPassword })
  useEffect(() => {
    console.log(user.email)
    console.log(user.password)
    console.log(user.confirmPassword)
  })
  return (
    <Container show={registerModal}>
      <ModalWrapper>
        <Content>
          <h1>Register</h1>
          <form>
            <input type='text' name='email' value={user.email} placeholder='Email' required onChange={handleEmail} />
            <input type='text' name='password' value={user.password} placeholder='Password' required onChange={handlePassword} />
            <input type='text' name='confirmPassword' value={user.confirmPassword} placeholder='Confirm Password' required onChange={handleConfirmPassword} />
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
