import React from 'react'
import { PaginationWrapper, First, Second, Third } from './TestimonialsStyling'
const Pagination = ({ FirstCircle, secondCircle, thirdCircle, firstCircleColor, secondCircleColor, thidCircleColor }) => {
  return (
    <PaginationWrapper>
      <First onClick={FirstCircle} color={firstCircleColor} />
      <Second onClick={secondCircle} color={secondCircleColor} />
      <Third onClick={thirdCircle} color={thidCircleColor} />
    </PaginationWrapper>
  )
}

export default Pagination
