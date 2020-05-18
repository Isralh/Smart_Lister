import React from 'react'
import axios from 'axios'
import RegisterForm from './RegisterForm'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

export default function RegisterContainer ({ registerModal }) {

  const formValues = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const validation = Yup.object({
    userName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    email: Yup.string().email('invalid e-mail address').required('Required'),
    password: Yup.string().max(6, 'must be at least charcters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  const submitForm = (values) => {
    console.log('hi')
    console.log(values)
  }
  console.log()
  // return the view to our Home Component
  return (
    <RegisterForm
      registerModal={registerModal}
      initialValues={formValues}
      validationSchema={validation}
      handleSubmit={submitForm}
    />
  )
}
