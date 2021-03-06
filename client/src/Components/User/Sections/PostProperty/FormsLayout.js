import React, { useRef } from 'react'
import { Field, ErrorMessage, Form, Formik } from 'formik'
import { ErrorStyle, FirstStep, SecondStep, UploadButton, UploadState } from './FormStyling'
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
            <ErrorMessage name='beds' />
          </ErrorStyle>
          <Field name='beds' type='number' placeholder='Beds' />
          <ErrorStyle>
            <ErrorMessage name='baths' />
          </ErrorStyle>
          <Field name='baths' type='number' placeholder='Baths' />
          <FirstStepButton />
        </FirstStep>
      </Form>
    </Formik>

  )
}

export function SecondForm ({
  secondActive, prevBtn, validateOnBlur, prevStep, validateOnChange,
  formValues, formSchema, handleSecondForm, handleImageUpload, imageFile
}) {
  const imageRef = useRef(null)

  const handleUploadClick = () => {
    imageRef.current.click()
  }
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
          <input name='image' type='file' accept='.jpeg .png .jpg' hidden='hidden' ref={imageRef} multiple required onChange={handleImageUpload} />
          <UploadButton type='button' onClick={handleUploadClick}>upload Image</UploadButton>
          <UploadState className='upload-text'>
            {imageFile.length > 0 ? imageFile.length === 1 ? '1 file selected'
              : `${imageFile.length} files selected`
              : 'No File Chosen'}
          </UploadState>
          <SecondStepButton showPrevBtn={prevBtn} handlePrev={prevStep} />
        </SecondStep>
      </Form>
    </Formik>

  )
}
