import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Login from './Login'
export default function LoginContainer ({ loginModal, displayRegister, loginClose }) {
  // state to hold our user information from login form
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  // function to set the user's email
  const getEmail = (e) => {
    const emailInput = e.target.value
    setUser(prev => { return { ...prev, email: emailInput } })
  }

  // function to set the user's password
  const getPassword = (e) => {
    const passwordInput = e.target.value
    setUser(prev => { return { ...prev, password: passwordInput } })
  }

  const userToken = window.localStorage
  // post to database user's Info using axios to login
  const registerUrl = 'http://localhost:3001/api/login'
  const loginUser = async (e) => {
    e.preventDefault()
    const num = 1
    console.log(num + 1)
    const login = await axios.post(registerUrl, user)
    try {
      if (login.status === 200) {
        console.log(login)
      }
      if (login.status === 202) {
        console.log(login.data.message)
        userToken.setItem('token', login.data.token)
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    console.log(user)
  })
  return (
    <Login
      loginModal={loginModal}
      displayRegister={displayRegister}
      loginClose={loginClose}
      handleEmail={getEmail}
      handlePassword={getPassword}
      handleSubmit={loginUser}
    />
  )
}
