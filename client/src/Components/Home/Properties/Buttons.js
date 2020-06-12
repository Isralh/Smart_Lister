import React, { useState } from 'react'
import { ButtonContainer, OurProperty, CursorButton, CursorButtonChange } from './PropertiesStyling'
import { Link } from 'react-router-dom'
const Buttons = () => {
  const [hover, setHover] = useState(false)

  const handleMouseOver = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }
  return (
    <ButtonContainer>
      <Link to='/properties'> <OurProperty onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>VIEW PROPERTIES</OurProperty></Link>
      <span>{hover === false ? <CursorButton> {'>'} </CursorButton> : <CursorButtonChange> {'>'}</CursorButtonChange>}</span>
    </ButtonContainer>
  )
}
export default Buttons
