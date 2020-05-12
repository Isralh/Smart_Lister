import React, { useState } from 'react'
import { Container, Wrapper, BioContainer, CompanyBio, ButtonContainer, AboutUsButton, CursorButton, CursorButtonChange } from './WhoWeAreStyling'

export default function WhoWeAre () {
  const [hover, setHover] = useState(false)

  const handleMouseOver = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <Container>
      <Wrapper>
        <BioContainer>
          <h1>Who We Are</h1>
          <CompanyBio>
            <p>At the Smith Group we’re proud to be one of the most trusted real estate firms in the Greater Philadelphia area. We pride ourselves in exceptional customer service and educating our clients about the housing market. Our priority is to help you find your dream home.</p>
          </CompanyBio>
        </BioContainer>
        <ButtonContainer>
          <AboutUsButton onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>LEARN MORE</AboutUsButton>
          <span>{hover === false ? <CursorButton> {'>'} </CursorButton> : <CursorButtonChange>{'>'}</CursorButtonChange>}</span>
        </ButtonContainer>
      </Wrapper>
    </Container>
  )
}
