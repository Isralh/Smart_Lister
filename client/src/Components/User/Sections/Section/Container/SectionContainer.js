import React from 'react'
import { Container } from './SectionStyling'
import Layout from '../Layout/Layout'
import MyListingContainer from '../../MyListing/MyListingContainer'
import FormikContainer from '../../PostProperty/FormikContainer'
import Account from '../../Account/Account'
import SavedSearchContainer from '../../Favorites/FavoritesContainer'

export default function SectionContainer () {

  return (
    <Container>
      <Layout />
      <MyListingContainer />
      <FormikContainer />
      <SavedSearchContainer />
      <Account />
    </Container>
  )
}
