import React, { useState, useEffect } from 'react'
import FormLayout from './FormLayout'
import { firstInput, secondInput, thirdInput } from './DefinedInputs'
import axios from 'axios'
export default function Form ({ viewListingForm }) {
  // state that holds our step views in the form submission process
  const [stepView, setStepView] = useState({
    showFirst: true,
    showSecond: false,
    showThird: false,
    index: 0,
    buttonName: '',
    btnType: '',
    userSteps: ['Step 1 of 3', 'Step 2 of 3', 'Step 3 of 3'],
    viewPrevBtn: false
  })

  // state to that holds our input values when onChange function (getUsersInput) is invoked
  const [inputState, setInputState] = useState({
    address: '',
    cityState: '',
    zip: '',
    longitude: '',
    latitude: '',
    beds: '',
    baths: '',
    sqFt: '',
    garages: '',
    price: '',
    propertyType: ''
  })

  // state that holds all the images uploaded, we're sending a post request to the database for each images uploaded
  const [images, setImages] = useState([])

  // onChange function that get user's input values
  const getUsersInput = (e) => {
    e.persist()
    setInputState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // onChange function that gets user's image file and sets the image property in our inputState
  const getHouseImage = (e) => {
    const imageFiles = e.target.files
    const filename = []
    for (const image of imageFiles) {
      filename.push(image.name)
    }
    setImages(filename)
  }

  const submitForm = async (e) => {
    e.preventDefault()
    const postData = await axios.post('http://localhost:3001/api/post/propertyInfo', inputState)
    try {
      if (postData) console.log(postData)
    } catch (e) {
      console.log(e)
    }

    const postImage = await axios.post('http://localhost:3001/api/post/propertyImage', images)
    try {
      if (postImage) console.log(postData)
    } catch (e) {
      console.log(e)
    }
  }

  // function to go to next step on button click
  const showNextStep = () => {
    // go to the next step in the process, last step (2) is the submit button so we don't want to just click over that without submitting form
    if (stepView.index <= 1) {
      // on first step check if all inputs are completed if not stay on the same page and send an alert to complete all inputs
      if (stepView.index === 0 &&
        (inputState.address.length === 0 || inputState.cityState.length === 0 || inputState.zip.length === 0)) {
        window.alert('Please complete all the input')
        return setStepView(prev => { return { ...prev, index: 0 } })
      }

      // on second step check if all inputs are completed if not stay on the same page and send an alert to complete all inputs
      if (stepView.index === 1 &&
        (inputState.beds.length === 0 || inputState.baths.length === 0 ||
          inputState.sqFt.length === 0 || inputState.garages.length === 0)) {
        window.alert('Please complete all the input')
        return setStepView(prev => { return { ...prev, index: 1 } })
      }

      // if the all inputs are in go to the next page add 1 to current index
      else return setStepView(prev => { return { ...prev, index: prev.index + 1 } })
    }
  }

  // function to go to prev step of the submission process on button click
  const showPrevStep = () => {
    setStepView(prev => { return { ...prev, index: prev.index - 1 } })
  }

  // function to change views based on steps
  const viewChanges = () => {
    // if index is 0 or less than 0 hide the previous button
    if (stepView.index <= 0) {
      setStepView(prev => { return { ...prev, viewPrevBtn: false } })
    }

    // set next button type to button on first view on the last view of the form we will change it to Submit
    if (stepView.index === 0) {
      setStepView(prev => { return { ...prev, buttonName: 'Next', btnType: 'button', showFirst: true, showSecond: false, showThird: false } })
    }

    // toggle view based on the index
    if (stepView.index === 1) {
      setStepView(prev => { return { ...prev, showFirst: false, showSecond: true, showThird: false, buttonName: 'Next', btnType: 'button', viewPrevBtn: true } })
    }

    // on last view we change the button to submit
    if (stepView.index === 2) {
      setStepView(prev => { return { ...prev, showFirst: false, showSecond: false, showThird: true, buttonName: 'Submit', btnType: 'Submit' } })
    }
  }

  useEffect(() => {
    viewChanges()
  }, [stepView.index, images])
  return (
    <FormLayout
      showListingForm={viewListingForm}
      step={stepView.userSteps[stepView.index]}
      handleNext={showNextStep}
      handlePrev={showPrevStep}
      firstActive={stepView.showFirst}
      secondActive={stepView.showSecond}
      thirdActive={stepView.showThird}
      buttonText={stepView.buttonName}
      buttonType={stepView.btnType}
      showPrevBtn={stepView.viewPrevBtn}
      handleChange={getUsersInput}
      handleImage={getHouseImage}
      firstStepinput={firstInput}
      secondStepinput={secondInput}
      thirdStepinput={thirdInput}
      handleSubmit={submitForm}

    />
  )
}
