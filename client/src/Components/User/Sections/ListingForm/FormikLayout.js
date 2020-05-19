import React from 'react'
import { StepHeading, FormWrapper, Container, FirstStep, ErrorStyle, ThirdStep, SecondStep } from './FormStyling'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { FirstForm, SecondForm, LastForm  } from './FormsLayout'
export default function FormikLayout ({ step, showListingForm, initialValues, validationSchema, handleSubmit, firstActive, thirdActive, secondActive }) {
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
            <FirstStep activeStep={firstActive}>
              <ErrorStyle>
                <ErrorMessage name='address' />
              </ErrorStyle>
              <Field name='address' type='text' placeholder='Address' />
              <ErrorStyle>
                <ErrorMessage name='cityState' />
              </ErrorStyle>
              <Field name='cityState' type='text' placeholder='City, State' />
              <ErrorStyle>
                <ErrorMessage name='zipcode' />
              </ErrorStyle>
              <Field name='zipcode' type='number' placeholder='Zipcode' />
              <ErrorStyle>
                <ErrorMessage name='longitude' />
              </ErrorStyle>
              <Field name='longitude' type='number' placeholder='Longitude' />
              <ErrorStyle>
                <ErrorMessage name='latitude' />
              </ErrorStyle>
              <Field name='latitude' type='number' placeholder='Latitude' />
            </FirstStep>
            <SecondStep activeStep={secondActive}>
              <ErrorStyle>
                <ErrorMessage name='beds' />
              </ErrorStyle>
              <Field name='beds' type='number' placeholder='Beds' />
              <ErrorStyle>
                <ErrorMessage name='baths' />
              </ErrorStyle>
              <Field name='baths' type='number' placeholder='Baths' />
              <ErrorStyle>
                <ErrorMessage name='sqFt' />
              </ErrorStyle>
              <Field name='sqFt' type='number' placeholder='SqFt' />
              <ErrorStyle>
                <ErrorMessage name='garages' />
              </ErrorStyle>
              <Field name='garages' type='number' placeholder='Garages' />
            </SecondStep>
            <ThirdStep activeStep={thirdActive}>
              <ErrorStyle>
                <ErrorMessage name='price' />
              </ErrorStyle>
              <Field name='price' type='number' placeholder='Price' />
              <ErrorStyle>
                <ErrorMessage name='propertyType' />
              </ErrorStyle>
              <Field name='propertyType' type='text' placeholder='Property Type' />
            </ThirdStep>
          </Form>
        </Formik>
      </FormWrapper>
    </Container>
  )
}
