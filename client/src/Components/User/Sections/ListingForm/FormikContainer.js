import React, { useState, useEffect } from 'react'
import { FirstForm, SecondForm } from './FormsLayout'
import { Container, FormWrapper, StepHeading } from './FormStyling'
import { FirstFormSchema, SecondFormSchema, ValidationSchema } from './FormSchema'

export default function FormikContainer ({ viewListingForm }) {
  const [firstView, setFirstView] = useState(false)
  const [secondView, setSecondView] = useState(true)
  const [showPrevBtn, setShowPrevBtn] = useState(true)
  const [valuesContainer, setValuesContainer] = useState({
    firstFormData: [],
    secondFormData: [],
    imageUrl: []
  })
  const steps = ['Step 1 of 2', 'Step 2 0f 2']
  const submitFirstForm = (values) => {
    console.log('hi')
    console.log(values)
    setFirstView(false)
    setSecondView(true)
    setValuesContainer({ firstFormData: values })
  }
  const previousStep = () => {
    setSecondView(false)
    setFirstView(true)
  }
  const uploadImage = (e) => {
    const imageFiles = e.target.files
    const fileName = []
    for (const image of imageFiles) {
      fileName.push(image.name)
    }
    setValuesContainer(prev => { return { ...prev, imageUrl: fileName } })
  }

  const submitSecondForm = (values) => {
    console.log(values)
    setValuesContainer(prev => { return { ...prev, secondFormData: values } })
  }
  useEffect(() => {
    console.log(valuesContainer)
  }, [valuesContainer])
  return (
    <Container viewForm={viewListingForm}>
      <FormWrapper>
        <StepHeading>
          <p>{steps[0]}</p>
        </StepHeading>
        <FirstForm
          firstActive={firstView}
          formValues={FirstFormSchema.initialValues}
          formSchema={FirstFormSchema.schema}
          validateOnChange={ValidationSchema.OnChange}
          validateOnBlur={ValidationSchema.OnBlur}
          handleFirstForm={submitFirstForm}
        />
        <SecondForm
          secondActive={secondView}
          validateOnBlur={ValidationSchema.OnBlur}
          validateOnChange={ValidationSchema.OnChange}
          formValues={SecondFormSchema.initialValues}
          formSchema={SecondFormSchema.schema}
          prevBtn={showPrevBtn}
          prevStep={previousStep}
          handleSecondForm={submitSecondForm}
          handleImageUpload={uploadImage}
        />
      </FormWrapper>
    </Container>
  )
}
