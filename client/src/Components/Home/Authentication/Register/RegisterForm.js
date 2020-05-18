import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { Container, ModalWrapper, Content, ButtonWrapper, ErrorStyle } from './RegisterStyling'

function RegisterForm ({ registerModal, initialValues, validationSchema, handleSubmit, displayLogin }) {
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
                <ErrorMessage name='userName' />
              </ErrorStyle>
              <label>Username</label> <br />
              <Field name='userName' type='text' />
              <ErrorStyle>
                <ErrorMessage name='email' />
              </ErrorStyle>
              <label>Email</label> <br />
              <Field name='email' type='text' />
              <ErrorStyle>
                <ErrorMessage name='password' />
              </ErrorStyle>
              <label>Password</label> <br />
              <Field name='password' type='text' />
              <ErrorStyle>
                <ErrorMessage name='confirmPassword' />
              </ErrorStyle>
              <label>Confirm Password</label> <br />
              <Field name='confirmPassword' type='text' />
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
