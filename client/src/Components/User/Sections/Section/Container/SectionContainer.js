import React from 'react'
import { Container } from './SectionStyling'
import LayoutContainer from '../Layout/Layout'
import Account from '../../Account/Account'
import FormContainer from '../../ListingForm/FormContainer'
import Favorties from '../../Favorites/Favorites'
export default function SectionContainer () {
  return (
    <Container>
      <LayoutContainer />
      <Account />
      <FormContainer />
      <Favorties />
    </Container>
  )
}
