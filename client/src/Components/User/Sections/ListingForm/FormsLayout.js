import React from 'react'
import { Field, ErrorMessage, Form, Formik } from 'formik'
import { ErrorStyle, FirstStep, SecondStep, ThirdStep } from './FormStyling'
import { FirstStepButton, SecondStepButton } from './Buttons'

export function FirstForm ({
  firstActive, validateOnBlur, validateOnChange,
  formValues, formSchema, handleFirstForm
}) {
  return (
    <Formik
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      initialValues={formValues}
      validationSchema={formSchema}
      onSubmit={handleFirstForm}
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
          <FirstStepButton />
        </FirstStep>
      </Form>
    </Formik>

  )
}

export function SecondForm ({
  secondActive, prevBtn, validateOnBlur, prevStep, submitForm,
  validateOnChange, formValues, formSchema, handleSecondForm, handleImageUpload
}) {

  return (
    <Formik
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      initialValues={formValues}
      validationSchema={formSchema}
      onSubmit={handleSecondForm}
    >
      <Form>
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
          <ErrorStyle>
            <ErrorMessage name='price' />
          </ErrorStyle>
          <Field name='price' type='number' placeholder='Price' />
          <ErrorStyle>
            <ErrorMessage name='propertyType' />
          </ErrorStyle>
          <Field name='propertyType' type='text' placeholder='Property Type' />
          <input name='image' type='file' accept='.jpeg .png .jpg' multiple required onChange={handleImageUpload} />
          <SecondStepButton showPrevBtn={prevBtn} handlePrev={prevStep} />
        </SecondStep>
      </Form>
    </Formik>

  )
}
