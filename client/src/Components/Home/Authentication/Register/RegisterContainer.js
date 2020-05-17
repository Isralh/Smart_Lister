import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import Register from './Register'
import { useHistory } from 'react-router-dom'
import { loggInStatus } from '../../../../App'
export default function RegisterContainer ({ registerModal, displayLogin, registerClose }) {
  // setInputState(prev => ({ ...prev, [e.target.name]: e.target.value }))

  // state to hold our user Info from our Register Input
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  // onChange get user's registration input
  const getUserInput = (e) => {
    e.persist()
    const userInput = e.target.value
    setUserInfo(prev => ({ ...prev, [e.target.name]: userInput }))
  }

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
  useEffect(() => {
    console.log(userInfo)
  }, [userInfo])
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
      handleChange={getUserInput}
    />
  )
}
