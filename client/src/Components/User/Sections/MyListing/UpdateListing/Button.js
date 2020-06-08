import React from 'react'
import { ButtonContainer, Cancel, Next, Previous } from './UpdatingStyling'

export function FirstStepButton ({ handleCancel }) {
  return (
    <ButtonContainer>
      <Cancel type='button' onClick={handleCancel}>Cancel</Cancel>
      <Next type='submit'>Next</Next>
    </ButtonContainer>
  )
}

export function SecondStepButton ({ handlePrev }) {
  return (
    <ButtonContainer>
      <Previous type='button' onClick={handlePrev}>Previous</Previous>
      <Next type='submit'>Submit</Next>
    </ButtonContainer>
  )
}
