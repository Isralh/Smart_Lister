import React from 'react'
import { CACouch } from '../../../Public/HouseImages/ColumbiaAvenue/Export'
import { FPKitchen } from '../../../Public/HouseImages/FruitvillePK/Exports'
import { MDLivingRoom } from '../../../Public/HouseImages/MarrietaDrive/Export'
import { WSFrontSide } from '../../../Public/HouseImages/WashingtonSt/Export'
import { Container, WelcomeMessage, ButtonContainer } from './FrontViewStyling'

const images = [CACouch, FPKitchen, MDLivingRoom, WSFrontSide]

export default function FrontView () {
  return (
    <Container FrontImage={images[3]}>
      <WelcomeMessage>
        <h1>Find Your Next Home</h1>
        <ButtonContainer>
          <button>See Listings</button>
        </ButtonContainer>
      </WelcomeMessage>
    </Container>
  )
}
