import React from 'react'
import { Container, ModalWrapper, Content, ErrorStyle, FiledSignIn } from './LoginStyling'
import { Formik, Field, Form, ErrorMessage } from 'formik'

export default function Login ({
  loginModal, displayRegister, loginClose, schema, handleSubmit,
  formValues, showLoginError
}) {
  return (
    <Container show={loginModal}>
      <ModalWrapper>
        <Content>
          <h1>Login</h1>
          <Formik
            validationSchema={schema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={handleSubmit}
            initialValues={formValues}
          >
            <Form>
              <FiledSignIn failedSignIn={showLoginError}>
                <p>Please enter correct email and password</p>
              </FiledSignIn>
              <ErrorStyle>
                <ErrorMessage name='email' />
              </ErrorStyle>
              <Field name='email' type='text' placeholder='E-mail' />
              <ErrorStyle>
                <ErrorMessage name='password' />
              </ErrorStyle>
              <Field name='password' type='text' placeholder='Password' />
              <button type='submit'>Login</button>
            </Form>
          </Formik>
          <p onClick={loginClose}>Close </p>
          <p>Need an account? <span onClick={displayRegister}>Register</span></p>
        </Content>
      </ModalWrapper>
    </Container>
  )
}
