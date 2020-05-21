import React, { useState, useEffect } from 'react'
import { FirstForm, SecondForm } from './FormsLayout'
import { Container, FormWrapper, StepHeading } from './FormStyling'
import { FirstFormSchema, SecondFormSchema, ValidationSchema } from './FormSchema'
import Axios from 'axios'
import jwtDecode from 'jwt-decode'
export default function FormikContainer ({ viewListingForm }) {
  // jwtDecode to get current user Information
  const token = window.localStorage.getItem('token')
  const userInfo = jwtDecode(token)
  console.log(userInfo.email)

  const [firstView, setFirstView] = useState(true)
  const [secondView, setSecondView] = useState(false)
  const [showPrevBtn, setShowPrevBtn] = useState(true)
  // state to hold all of our formdata
  const [valuesContainer, setValuesContainer] = useState({
    firstform: null,
    secondForm: null,
    imageFileName: null,
    imageUrl: null
  })
  // steps in our form
  const steps = ['Step 1 of 2', 'Step 2 0f 2']

  // on step 1 of form submission set the valuesContainer(formData) and go to the next step in the process
  const submitFirstForm = (values) => {
    setFirstView(false)
    setSecondView(true)
    console.log('hi')
    const firstForm = values
    setValuesContainer(prev => { return { ...prev, firstform: firstForm } })
  }
  const previousStep = () => {
    setSecondView(false)
    setFirstView(true)
  }

  // onChange event to handle all the images that are uploaded and set the ValuesContainer(formData)
  const uploadImage = (e) => {
    const file = e.target.files
    setValuesContainer(prev => { return { ...prev, imageFileName: file } })
  }

  // onSubmit event to handle the submission of the form data to aws and our backend
  const submitSecondForm = async (values) => {
    // first we add to the state valuesContainer(formData) our new data from the second step of the form submission process
    const secondForm = values
    setValuesContainer(prev => { return { ...prev, secondForm: secondForm } })
    // for every image make a post request to aws and save the imageUrl to our valuesContainer
    const fileData = new FormData()
    const selectedFiles = valuesContainer.imageFileName
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        fileData.append('images', selectedFiles[i], selectedFiles[i].name)
      }
      const downloadUrl = await Axios.post('http://localhost:3001/api/post/propertyImages', fileData)
      try {
        if (downloadUrl) setValuesContainer(prev => { return { ...prev, imageUrl: downloadUrl.data } })
      } catch (e) {
        console.log(e)
      }
    }
    const propertyInfo = await Axios({ method: 'POST', url: 'http://localhost:3001/api/post/propertyInfo', data: valuesContainer })
    try {
      if (propertyInfo) console.log(propertyInfo)
    } catch (e) {
      console.log(e)
    }
  }

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
