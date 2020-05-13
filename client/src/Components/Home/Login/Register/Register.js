import React, { useState, useEffect } from 'react'
import { Container, ModalWrapper, Content } from './RegisterStyling'
export default function Register ({ registerModal, displayLogin, registerClose }) {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const handleFirstName = (e) => {
    const userFirstName = e.target.value
    setUserInfo(prev => {
      return { ...prev, firstName: userFirstName }
    })
  }
  const handleLastName = (e) => {
    const userLastName = e.target.value
    setUserInfo(prev => {
      return { ...prev, lastName: userLastName }
    })
  }
  const handleEmail = (e) => {
    const userEmail = e.target.value
    setUserInfo(prev => {
      return { ...prev, email: userEmail }
    })
  }
  const handlePassword = (e) => {
    const userPassword = e.target.value
    setUserInfo(prev => {
      return { ...prev, password: userPassword }
    })
  }
  const handleConfirmPassword = (e) => {
    const confirmUserPassword = e.target.value
    setUserInfo(prev => {
      return { ...prev, confirmPassword: confirmUserPassword }
    })
  }

  useEffect(() => {
    console.log(userInfo)
  })
  return (
    <Container show={registerModal}>
      <ModalWrapper>
        <Content>
          <h1>Register</h1>
          <form>
            <input type='text' name='First Name' value={userInfo.firstName} placeholder='First Name' required onChange={handleFirstName} />
            <input type='text' name='Last Name' value={userInfo.lastName} placeholder='Last Name' required onChange={handleLastName} />
            <input type='text' name='Email' value={userInfo.email} placeholder='Email' required onChange={handleEmail} />
            <input type='text' name='Password' value={userInfo.password} placeholder='Password' required onChange={handlePassword} />
            <input type='text' name='Confirm Password' value={userInfo.confirmPassword} placeholder='Confirm Password' required onChange={handleConfirmPassword} />
            <button type='submit'>Sign Up</button>
          </form>
          <p>Already a member? <span onClick={displayLogin}>Login</span></p>
          <p onClick={registerClose}>Close</p>
        </Content>
      </ModalWrapper>
    </Container>
  )
}
