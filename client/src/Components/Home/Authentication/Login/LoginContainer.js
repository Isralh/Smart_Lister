import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Login from './Login'
import { useHistory } from 'react-router-dom'
export default function LoginContainer ({ loginModal, displayRegister, loginClose }) {
  // state to hold our user information from login form
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  // function to get user's input and update state
  const handleUsersinput = (e) => {
    e.persist()
    const inputValue = e.target.value
    setUser(prev => ({ ...prev, [e.target.name]: inputValue }))
  }

  const userToken = window.localStorage
  const history = useHistory()
  // post to database user's Info using axios to login
  const registerUrl = 'http://localhost:3001/api/login'
  const loginUser = async (e) => {
    e.preventDefault()
    const login = await axios.post(registerUrl, user)
    try {
      if (login.status === 200) {
        console.log(login)
      }
      if (login.status === 202) {
        console.log(login.data.message)
        userToken.setItem('token', login.data.token)
        history.push('/user')
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    console.log(user)
    console.log(userToken.getItem('token'))
  }, [userToken])
  return (
    <Login
      loginModal={loginModal}
      displayRegister={displayRegister}
      loginClose={loginClose}
      handleChange={handleUsersinput}
      handleSubmit={loginUser}
    />
  )
}
