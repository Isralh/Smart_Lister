import React, { useReducer } from 'react'
import { Container } from './SectionStyling'
import Layout from '../Layout/Layout'
import MyListingContainer from '../../MyListing/MyListingContainer'
import FormikContainer from '../../PostProperty/FormikContainer'
import Favorites from '../../Favorites/Favorites'
import Account from '../../Account/Account'
const initialState = {
  showMyListing: true,
  showPostProperty: false,
  showFavortiesList: false,
  showAccountSetting: false,
  activelisting: true,
  activePost: false,
  activeFavorites: false,
  activeAccount: false
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'MyListing' : {
      return {
        showMyListing: true,
        showPostProperty: false,
        showFavortiesList: false,
        showAccountSetting: false,
        activelisting: true,
        activePost: false,
        activeFavorites: false,
        activeAccount: false
      }
    }
    case 'Property': {
      return {
        showMyListing: false,
        showPostProperty: true,
        showFavortiesList: false,
        showAccountSetting: false,
        activelisting: false,
        activePost: true,
        activeFavorites: false,
        activeAccount: false
      }
    }
    case 'Favorites' : {
      return {
        showMyListing: false,
        showPostProperty: false,
        showFavortiesList: true,
        showAccountSetting: false,
        activelisting: false,
        activePost: false,
        activeFavorites: true,
        activeAccount: false
      }
    }
    case 'Account' : {
      return {
        showMyListing: false,
        showPostProperty: false,
        showFavortiesList: false,
        showAccountSetting: true,
        activelisting: false,
        activePost: false,
        activeFavorites: false,
        activeAccount: true
      }
    }
  }
}
export default function SectionContainer () {
  const [state, dispatch] = useReducer(reducer, initialState)
  const viewMyListing = () => {
    dispatch({ type: 'MyListing' })
  }
  const viewPostProperty = () => {
    dispatch({ type: 'Property' })
  }
  const viewMYFavorites = () => {
    dispatch({ type: 'Favorites' })
  }
  const viewMyAccount = () => {
    dispatch({ type: 'Account' })
  }
  return (
    <Container>
      <Layout
        showMyListing={viewMyListing}
        showPostProperty={viewPostProperty}
        showFavorites={viewMYFavorites}
        showAccount={viewMyAccount}
        listingActive={state.activelisting}
        postActive={state.activePost}
        favoritesActive={state.activeFavorites}
        accountActive={state.activeAccount}
      />
      <MyListingContainer viewListing={state.showMyListing} />
      <FormikContainer viewListingForm={state.showPostProperty} />
      <Favorites favoritesList={state.showFavortiesList} />
      <Account accountSetting={state.showAccountSetting} />
    </Container>
  )
}
