import React, { useRef } from 'react'
import { Container, Wrapper } from './WhoWeAreStyling'
import Services from './Services'
import AboutUs from './AboutUs'

export default function WhoWeAre () {
  const bioRef = useRef(null)
  return (
    <Container ref={bioRef}>
      <Wrapper>
        <AboutUs />
        <Services />
      </Wrapper>
    </Container>
  )
}
