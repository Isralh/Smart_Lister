import React, { useRef } from 'react'
import { Container, Wrapper } from './WhoWeAreStyling'
import AboutUs from './AboutUs'

export default function WhoWeAre () {
  const bioRef = useRef(null)
  return (
    <Container ref={bioRef}>
      <Wrapper>
        <AboutUs />
      </Wrapper>
    </Container>
  )
}
