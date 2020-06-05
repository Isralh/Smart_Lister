import React from 'react'
import { FirstTestimonyWrapper } from './TestimonialsStyling'
import { BriannaJones } from '../../../Public/Image/export'
const FirstTestimony = ({ showFirstTesimony }) => {
  return (
    <FirstTestimonyWrapper show={showFirstTesimony}>
      <img src={BriannaJones} />
      <h1>Brianna Jones</h1>
      <p>
      "SmartLister is the best property listing webiste for sellers out there. I was able to enter
      my property information with ease and got tons of calls and interest from potential buyers everyday.
      I'm very happy with my exprience with SmartLister and I would recommend it to any property seller looking for a listing webiste."
      </p>
    </FirstTestimonyWrapper>
  )
}

export default FirstTestimony
