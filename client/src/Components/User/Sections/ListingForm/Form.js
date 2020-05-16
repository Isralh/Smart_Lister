import React from 'react'
import { v4 as uuid } from 'uuid'
import { StepHeading } from './FormStyling'
export function FormLayout () {
  const steps = ['Step 1', 'Step 2', 'Step 3']

  return (
    <StepHeading>
      {steps.map(step =>
        <p key={uuid()}>{step}</p>)}
    </StepHeading>
  )
}
export default function Form () {
  return (
    <FormLayout />
  )
}
