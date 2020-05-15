import React, { useState } from 'react'
import Login from './Login'
export default function LoginContainer ({ loginModal, displayRegister, loginClose }) {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const getEmail = (e) => {
    const emailInput = e.target.value
    setUser(prev => { return { ...prev, email: emailInput } })
  }
  const getPassword = (e) => {
    const passwordInput = e.target.value
    setUser(prev => { return { ...prev, password: passwordInput } })
  }

  const loginUser = (e) => {
    e.preventDefault()
    console.log(user)
  }
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
