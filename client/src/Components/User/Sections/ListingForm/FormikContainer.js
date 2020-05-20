import React, { useState, useEffect } from 'react'
import { FirstForm, SecondForm } from './FormsLayout'
import { Container, FormWrapper, StepHeading } from './FormStyling'
import { FirstFormSchema, SecondFormSchema, ValidationSchema } from './FormSchema'
import ReactS3 from 'react-s3'
import { Awsconfig } from '../../../Config/AwsConfig'
import Axios from 'axios'
export default function FormikContainer ({ viewListingForm }) {
  const [firstView, setFirstView] = useState(false)
  const [secondView, setSecondView] = useState(true)
  const [showPrevBtn, setShowPrevBtn] = useState(true)

  // state to hold all of our formdata
  const [valuesContainer, setValuesContainer] = useState({
    formData: [],
    imageFileName: [],
    imageUrl: []
  })
const [images, setImgages] = useState([])
  // steps in our form
  const steps = ['Step 1 of 2', 'Step 2 0f 2']

  // on step 1 of form submission set the valuesContainer(formData) and go to the next step in the process
  const submitFirstForm = (values) => {
    console.log('hi')
    console.log(values)
    setFirstView(false)
    setSecondView(true)
    setValuesContainer({ formData: values })
  }
  const previousStep = () => {
    setSecondView(false)
    setFirstView(true)
  }

  // onChange event to handle all the images that are uploaded and set the ValuesContainer(formData)
  const uploadImage = (e) => {
    const imageFiles = e.target.files
    setImgages(imageFiles)
  }
  // onSubmit event to handle the submission of the form data to aws and our backend
  const submitSecondForm = async (values) => {
    // first we add to the state valuesContainer(formData) our new data from the second step of the form submission process
    const newArray = [valuesContainer.formData]
    newArray.push(values)
    setValuesContainer(prev => { return { ...prev, formData: newArray } })

    console.log(valuesContainer.imageFileName.Filelist)
    // for every image make a post request to aws

    // const imageData = new FormData()
    // imageData.append('images', valuesContainer.imageFileName, valuesContainer.imageFileName.name)
    // Axios({ method: 'POST', data: imageData, url: 'http://localhost:3001/api/post/image' }).then(data =>
    //   console.log(data)).catch(e => console.log(e))

    // const postAllImages = valuesContainer.imageFileName.map(image => {
    //   const formdata = new FormData()
    //   formdata.append('images', image, image.name)
    //   const config = { headers: { 'content-type': 'multipart/form-data' } }
    //   return Axios({ method: 'POST', data: formdata, url: 'http://localhost:3001/api/post/image', config })
    // })
    // Axios.all(postAllImages).then(data => console.log(data)).catch(e => console.log(e))
  }
  useEffect(() => {
    console.log(valuesContainer)
    console.log(images.filelist)
  }, [valuesContainer, images])
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
