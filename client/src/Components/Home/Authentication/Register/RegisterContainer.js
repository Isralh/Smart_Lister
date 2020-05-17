import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import Register from './Register'
import { useHistory } from 'react-router-dom'
export default function RegisterContainer ({ registerModal, displayLogin, registerClose }) {
  // state to hold our user Info from our Register Input
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
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

  // post to database user's Info using axios
  const registerUrl = 'http://localhost:3001/api/register'
  const userToken = window.localStorage
  const history = useHistory()

  // function that handles our registration and posting to mysql database
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
        history.push('/user')
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
      firstName={userInfo.firstName}
      lastName={userInfo.lastName}
      email={userInfo.email}
      password={userInfo.password}
      confirmPassword={userInfo.confirmPassword}
      handleChange={getUserInput}
    />
  )
}
