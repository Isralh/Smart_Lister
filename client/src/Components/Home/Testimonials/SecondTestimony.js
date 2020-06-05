import React from 'react'
import { SecondTestimonyWrapper } from './TestimonialsStyling'
import { TomSmith } from '../../../Public/Image/export'
const SecondTestimony = ({ showSecondTestimony }) => {
  return (
    <SecondTestimonyWrapper show={showSecondTestimony}>
      <img src={TomSmith} />
      <h1>Tom Smith</h1>
      <p>
            "I used SmartLister as a buyer, I was able to find every information regarding the house I was looking for and was able to directly contact the seller.
            As a first time home buyer, the site gave me a great knowledge and confidence on what I'm looking for."
      </p>
    </SecondTestimonyWrapper>
  )
}

export default SecondTestimony
