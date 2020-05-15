import React, { useState } from 'react'
import axios from 'axios'
import Register from './Register'
export default function RegisterContainer ({ registerModal, displayLogin, registerClose }) {
  // state to hold our user Info from our Register Input
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  // onChange get user's email registration input
  const getEmail = (e) => {
    const userEmail = e.target.value
    setUserInfo(prev => {
      return { ...prev, email: userEmail }
    })
  }
  // onChange get user's password registration input
  const getPassword = (e) => {
    const userPassword = e.target.value
    setUserInfo(prev => {
      return { ...prev, password: userPassword }
    })
  }
  // onChange get user's confirmed Password registration input
  const getConfirmedPassword = (e) => {
    const userConfirmedPassword = e.target.value
    setUserInfo(prev => {
      return { ...prev, confirmPassword: userConfirmedPassword }
    })
  }

  console.log(userInfo)
  // post to database userInfo using axios
  const registerUrl = 'http://localhost:3001/api/register'

  const postRegisteration = async (e) => {
    e.preventDefault()
    const registerData = await axios.post(registerUrl, userInfo)
    try {
      console.log(registerData.data.message)
    } catch (e) {
      console.log(e)
    }
  }

  // return the view to our Home Component
  return (
    <Register
      registerModal={registerModal}
      displayLogin={displayLogin}
      registerClose={registerClose}
      handleRegisteration={postRegisteration}
      email={userInfo.email}
      password={userInfo.password}
      confirmPassword={userInfo.confirmPassword}
      handleEmail={getEmail}
      handlePassword={getPassword}
      handleConfirmPassword={getConfirmedPassword}    />
  )
}
