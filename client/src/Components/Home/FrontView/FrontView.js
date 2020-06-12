import React from 'react'
import { Container, WelcomeMessage, ButtonContainer } from './FrontViewStyling'
import { Link } from 'react-router-dom'

export default function FrontView () {
  return (
    <Container>
      <WelcomeMessage>
        <h1>Find Your Next Home</h1>
        <ButtonContainer>
          <Link to='/properties'><button>See Listings</button></Link>
        </ButtonContainer>
      </WelcomeMessage>
    </Container>
  )
}
// <Container FrontImage={images[0]}>
// <button>See Listings</button>
