import React from 'react'
import { ModalWrapper, Content, ErrorStyle, FiledSignIn, FontAwesomeStyle, ButtonWrapper } from './LoginStyling'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
export default function Login ({
  loginModal, displayRegister, loginClose, schema, handleSubmit,
  formValues, showLoginError
}) {
  return (
    <ModalWrapper show={loginModal}>
      <Content>
        <FontAwesomeIcon icon={faTimesCircle} style={FontAwesomeStyle} onClick={loginClose} />
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
            <Field name='password' type='password' placeholder='Password' />
            <ButtonWrapper>
              <p>Need an account? <span onClick={displayRegister}>Register</span></p>
              <button type='submit'>Login</button>
            </ButtonWrapper>
          </Form>
        </Formik>
      </Content>
    </ModalWrapper>
  )
}
