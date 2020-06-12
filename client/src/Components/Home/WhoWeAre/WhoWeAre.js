import React, { useState, useRef, useEffect } from 'react'
import {
  Container, Wrapper, BioContainer, CompanyBio, ButtonContainer, AboutUsButton,
  CursorButton, CursorButtonChange
} from './WhoWeAreStyling'
import Services from './Services'


export default function WhoWeAre ({ handleMouseOver, handleMouseLeave, hover, openRegister }) {
  const bioRef = useRef(null)
  const intersectionObserver = new IntersectionObserver(entry => {
    if (entry[0].isIntersecting) {
    }
  })
  useEffect(() => {
    intersectionObserver.observe(bioRef.current)

    return () => {
      intersectionObserver.disconnect()
    }
  }, [])
  return (
    <Container ref={bioRef}>
      <Wrapper>
        <BioContainer>
          <h1>Who We Are</h1>
          <CompanyBio>
            <p>At the Smith Group we’re proud to be one of the most trusted real estate firms in the Greater Philadelphia area. We pride ourselves in exceptional customer service and educating our clients about the housing market. Our priority is to help you find your dream home.</p>
          </CompanyBio>
        </BioContainer>
        <Services />
      </Wrapper>
    </Container>
  )
}
// <ButtonContainer>
// <AboutUsButton onClick={openRegister} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Get Started</AboutUsButton>
// <span>{hover === false ? <CursorButton> {'>'} </CursorButton> : <CursorButtonChange>{'>'}</CursorButtonChange>}</span>
// </ButtonContainer>