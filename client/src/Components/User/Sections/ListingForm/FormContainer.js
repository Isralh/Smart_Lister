import React from 'react'
import { Container } from './FormStyling'
import Form from './Form'
export default function FormContainer ({ showListingForm }) {
  return (
    <Container viewForm={showListingForm}>
      <Form />
    </Container>
  )
}
