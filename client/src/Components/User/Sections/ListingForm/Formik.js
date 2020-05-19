import React from 'react'
import { StepHeading, FormWrapper, Container } from './FormStyling'
import { Formik, Form } from 'formik'
import { FirstForm, SecondForm, LastForm } from './FormsLayout'
export default function FormikLayout ({ step, showListingForm, initialValues, validationSchema, handleSubmit }) {
  // our multi Step form, we're mapping through an array of input lables,names and types from our DefinedInputs component

  return (
    <Container viewForm={showListingForm}>
      <FormWrapper>
        <StepHeading>
          <p>{step}</p>
        </StepHeading>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={handleSubmit}
        >
          <Form>
            <FirstForm />
            <SecondForm />
            <LastForm />
          </Form>
        </Formik>
      </FormWrapper>
    </Container>
  )
}