import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import styled from 'styled-components'

const Input = styled.input`
margin: 5px 0 20px 10px;
`

const initialValues = {
  name: '',
  email: '',
  channel: ''
}
const onSubmit = (values) => {
  console.log(values)
}
const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'invalid e-mail address'
  }
  if (!values.channel) {
    errors.channel = 'Required'
  }

  return errors
}
export default function FormikForm () {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })
  console.log('visited field', formik.errors)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
        <label>Name</label><br />
        <Input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} /> <br />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <label>Email</label><br />
        <Input type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} /><br />
        {formik.touched.channel && formik.errors.channel ? <div>{formik.errors.channel}</div> : null}
        <label>Channel</label><br />
        <Input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur} /><br />
        <button type='submit'>button</button>
      </form>
    </div>
  )
}
