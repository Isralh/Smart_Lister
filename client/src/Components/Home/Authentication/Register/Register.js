import React from 'react'
import { Container, ModalWrapper, Content } from './RegisterStyling'
import Services from './Services'

function Register ({ registerModal, displayLogin, registerClose, userInfo, getEmail, getPassword, getConfirmedPassword, postRegisteration }) {
  const [user, handleEmail, handlePassword, handleConfirmPassword, handleRegisteration] = Services({ userInfo, getEmail, getPassword, getConfirmedPassword, postRegisteration })

  return (
    <Container show={registerModal}>
      <ModalWrapper>
        <Content>
          <h1>Register</h1>
          <form onSubmit={handleRegisteration}>
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