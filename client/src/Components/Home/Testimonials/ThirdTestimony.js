import React from 'react'
import { ThirdTestimonyWrapper } from './TestimonialsStyling'
import { LuisCastro } from '../../../Public/Image/export'
const ThirdTestimony = ({ showThirdTestimony }) => {
  return (
    <ThirdTestimonyWrapper show={showThirdTestimony}>
      <img src={LuisCastro} />
      <h1>Luis Castro</h1>
      <p>
      "Love SmartLister, I was able to buy our first family home from a listing on SmartLister and since it was such
      a good experience I used SmartLister to sell my house 5 years later. SmartLister helped me create the perfect listing
      for my property and I was able to get calls from potential buyers everyday and was able to sell my house quickly."
      </p>
    </ThirdTestimonyWrapper>
  )
}

export default ThirdTestimony
