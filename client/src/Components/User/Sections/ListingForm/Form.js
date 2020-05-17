import React, { useState, useEffect } from 'react'
import FormLayout from './FormLayout'
export default function Form ({ viewListingForm }) {
  // first step form inputs
  const firstInput = [{
    id: 1, name: 'address', label: 'Address', type: 'text'
  }, {
    id: 2, name: 'cityState', label: 'City, State', type: 'text'
  }, {
    id: 3, name: 'zip', label: 'Zipcode', type: 'number'
  }, {
    id: 4, name: 'longitude', label: 'Longitude', type: 'number'
  }, {
    id: 5, name: 'latitude', label: 'Latitude', type: 'number'
  }]

  // second step form inputs
  const secondInput = [{
    id: 1, name: 'beds', label: 'Beds', type: 'number'
  }, {
    id: 2, name: 'baths', label: 'Baths', type: 'number'
  }, {
    id: 3, name: 'sqFt', label: 'SqFt', type: 'number'
  }, {
    id: 4, name: 'garages', label: 'Garages', type: 'number'
  }]

  // third step form inputs
  const thirdInput = [{
    id: 5, name: 'price', label: 'Price', type: 'number'
  }, {
    id: 6, name: 'propertyType', label: 'Property Type', type: 'text'
  }]

  // state that hold our step views in the form submission process
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

  // function to go to next step on button click
  const showNextStep = (e) => {
    // we're setting prevent default when index is 2 b/c that when our submit button is invoked
    if (stepView.index === 2) {
      e.preventDefault()
    }
    if (stepView.index < 2) {
      setStepView(prev => { return { ...prev, index: prev.index + 1 } })
    }
  }

  // function to go to prev step on button click
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
    propertyType: '',
    image: []
  })

  const getUsersInput = (e) => {
    e.persist()
    setInputState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const getHouseImage = (e) => {

  }
  useEffect(() => {
    viewChanges()
  }, [stepView.index, inputState])
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

    />
  )
}
