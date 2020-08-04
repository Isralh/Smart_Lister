import React, { useState, useEffect } from 'react'
import { FirstForm, SecondForm } from './FormsLayout'
import { Container, FormWrapper, StepHeading, LayOutWrapper } from './FormStyling'
import { FirstFormSchema, SecondFormSchema, ValidationSchema } from './FormSchema'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import jwtDecode from 'jwt-decode'
import Nav from '../../../Home/Nav/Nav'
import Layout from '../Section/Layout/Layout'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FooterContainer from '../../../Home/Footer/FooterContainer'
import Geocode from 'react-geocode'
import { geoCodeKey } from '../../../Config/GoogleApiKey'

export default function FormikContainer ({ viewListingForm }) {
  // jwtDecode to get current user Information
  const token = window.localStorage.getItem('token')
  const userInfo = jwtDecode(token)
  const history = useHistory()
  const [firstView, setFirstView] = useState(true)
  const [secondView, setSecondView] = useState(false)
  const [showPrevBtn] = useState(true)
  const [images, setImages] = useState()
  const [active, setActive] = useState(true)

  // sucess message notification if property was posted to the database successfuly
  toast.configure()
  const notify = () => toast.success('Successfully created Listing', {
    autoClose: 2000
  })

  // state to hold all of our formdata
  const [valuesContainer, setValuesContainer] = useState({
    firstForm: null,
    secondForm: null,
    imageUrl: null,
    user: userInfo
  })

  // steps in our form
  const steps = ['Step 1 of 2', 'Step 2 of 2']

  // on step 1 of form submission set the valuesContainer(formData) and go to the next step in the process
  const submitFirstForm = (values) => {
    Geocode.setApiKey(geoCodeKey)
    Geocode.setLanguage('en')
    Geocode.setRegion('us')
    Geocode.fromAddress(`${values.address}, ${values.cityState}, ${values.zipcode}`).then(
      response => {
        values.lat = response.results[0].geometry.location.lat
        values.lng = response.results[0].geometry.location.lng
        setFirstView(false)
        setSecondView(true)
        const firstForm = values
        setValuesContainer(prev => { return { ...prev, firstForm: firstForm } })
      }
    ).catch(e => window.alert(' please input correct address '))
  }
  const previousStep = () => {
    setSecondView(false)
    setFirstView(true)
  }

  // onChange event to handle all the images that are uploaded and set the ValuesContainer(formData)
  const uploadImage = async (e) => {
    const file = await e.target.files
    setImages(file)
    // setValuesContainer(prev => { return { ...prev, imageFileName: file } })
  }

  // onSubmit event to handle the submission of the form data to aws and our backend
  const submitSecondForm = async (values) => {
    // first we add to the state valuesContainer(formData) our new data from the second step of the form submission process
    const secondForm = await values
    setValuesContainer(prev => { return { ...prev, secondForm: secondForm } })
    // for every image make a post request to aws and save the imageUrl to our valuesContainer
    const fileData = new FormData()
    const selectedFiles = images
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
  }

  useEffect(() => {
    async function postProperty () {
      if (valuesContainer.secondForm !== null && valuesContainer.imageUrl !== null) {
        const propertyInfo = await Axios.post('http://localhost:3001/api/post/propertyInfo', [valuesContainer])
        try {
          if (propertyInfo.status === 201) {
            notify()
            setTimeout(() => {
              history.push('/user/mylisting')
            }, 2200)
          } else if (propertyInfo.status === 200) window.alert(propertyInfo.data.message)
        } catch (e) {
          console.log(e)
        }
      }
    }
    postProperty()
  }, [valuesContainer.secondForm, valuesContainer.imageUrl])
  return (
    <Container>
      <Nav />
      <LayOutWrapper>
        <Layout propertyActive={active} />
      </LayOutWrapper>
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
      <FooterContainer />
    </Container>
  )
}
