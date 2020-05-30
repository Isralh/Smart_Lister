import React from 'react'
import { ButtonContainer, Previous, Next } from './FormStyling'

export function FirstStepButton () {
  return (
    <ButtonContainer>
      <Next type='submit'>Next</Next>
    </ButtonContainer>
  )
}

export function SecondStepButton ({ showPrevBtn, handlePrev, handleSubmit }) {
  return (
    <ButtonContainer changeFlex={showPrevBtn}>
      <Previous type='button' onClick={handlePrev} showButton={showPrevBtn}>Previous</Previous>
      <Next type='submit' onClick={handleSubmit}>Submit</Next>
    </ButtonContainer>
  )
}
