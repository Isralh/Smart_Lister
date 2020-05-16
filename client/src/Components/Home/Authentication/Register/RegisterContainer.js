import React, { useState, useContext } from 'react'
import axios from 'axios'
import Register from './Register'
import { useHistory } from 'react-router-dom'
import { loggInStatus } from '../../../../App'
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
  const userToken = window.localStorage
  const [userStatus, setStatus] = useContext(loggInStatus)
  const history = useHistory()
  const postRegisteration = async (e) => {
    e.preventDefault()
    const registerData = await axios.post(registerUrl, userInfo)
    try {
      if (registerData.status === 200) {
        console.log(registerData.message)
      }
      if (registerData.status === 201) {
        console.log(registerData.data.message)
        userToken.setItem('token', registerData.data.token)
        history.push('/')
      }
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
