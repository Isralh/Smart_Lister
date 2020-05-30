import React from 'react'
import { Container } from './SectionStyling'
import Layout from '../Layout/Layout'
import MyListingContainer from '../../MyListing/MyListingContainer'
import FormikContainer from '../../PostProperty/FormikContainer'
import Favorites from '../../Favorites/Favorites'
import Account from '../../Account/Account'

export default function SectionContainer () {

  return (
    <Container>
      <Layout />
      <MyListingContainer />
      <FormikContainer />
      <Favorites />
      <Account />
    </Container>
  )
}
