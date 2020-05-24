import React, { useState } from 'react'
import axios from 'axios'
import Login from './Login'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
export default function LoginContainer ({ loginModal, displayRegister, loginClose }) {

  const [loginError, setLoginError] = useState(false)
  // state to hold our user information from login form
  const initialValues = {
    email: '',
    password: ''
  }

  // form schema and validation
  const formSchema = Yup.object({
    email: Yup.string().required('please enter gmail'),
    password: Yup.string().required('please enter password')
  })

  // local storage to store our userToken
  const userToken = window.localStorage
  const history = useHistory()
  // post to database user's Info using axios to login
  const registerUrl = 'http://localhost:3001/api/login'
  const submitLogIn = async (values) => {
    const login = await axios.post(registerUrl, values)
    try {
      if (login.status === 200) {
        setLoginError(!loginError)
        console.log(login.message)
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
  return (
    <Login
      loginModal={loginModal}
      displayRegister={displayRegister}
      loginClose={loginClose}
      formValues={initialValues}
      handleSubmit={submitLogIn}
      schema={formSchema}
      showLoginError={loginError}
    />
  )
}
