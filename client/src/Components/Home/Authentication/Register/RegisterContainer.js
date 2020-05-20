import React from 'react'
import axios from 'axios'
import RegisterForm from './RegisterForm'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
export default function RegisterContainer ({ registerModal, closeModal }) {
  const formValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const validation = Yup.object({
    firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    email: Yup.string().email('invalid e-mail address').required('Required'),
    password: Yup.string().max(6, 'must be at least 6 charcters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  // post to database user's Information using axios
  const registerUrl = 'http://localhost:3001/api/register'
  const userToken = window.localStorage
  const history = useHistory()

  // function that handles our registration and posting to mysql database
  const submitForm = async (values) => {
    const registerData = await axios({ method: 'POST', url: registerUrl, data: values })
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
  // return the view to our Home Component
  return (
    <RegisterForm
      registerModal={registerModal}
      initialValues={formValues}
      validationSchema={validation}
      handleSubmit={submitForm}
      closeModal={closeModal}
    />
  )
}
