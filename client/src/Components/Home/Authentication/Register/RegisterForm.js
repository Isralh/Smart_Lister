import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { Container, ModalWrapper, Content, ButtonWrapper, ErrorStyle } from './RegisterStyling'

function RegisterForm ({ registerModal, initialValues, validationSchema, handleSubmit, displayLogin, setHeight }) {
  return (
    <Container show={registerModal}>
      <ModalWrapper>
        <Content>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={handleSubmit}
          >
            <Form>
              <h1>Register</h1>
              <ErrorStyle>
                <ErrorMessage name='firstName' />
              </ErrorStyle>
              <Field name='firstName' type='text' placeholder='First Name' />
              <ErrorStyle>
                <ErrorMessage name='lastName' />
              </ErrorStyle>
              <Field name='lastName' type='text' placeholder='Last Name' />
              <ErrorStyle>
                <ErrorMessage name='email' />
              </ErrorStyle>
              <Field name='email' type='text' placeholder='E-mail' />
              <ErrorStyle>
                <ErrorMessage name='password' />
              </ErrorStyle>
              <Field name='password' type='text' placeholder='Password' />
              <ErrorStyle>
                <ErrorMessage name='confirmPassword' />
              </ErrorStyle>
              <Field name='confirmPassword' type='text' placeholder='Confirm Password' />
              <ButtonWrapper>
                <p>Already a member? <span onClick={displayLogin}>Login</span></p>
                <button type='submit'>Sign Up</button>
              </ButtonWrapper>
            </Form>
          </Formik>
        </Content>
      </ModalWrapper>
    </Container>
  )
}
export default RegisterForm
