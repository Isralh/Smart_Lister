import React, { useState, createContext, useEffect } from 'react'
import { Container } from './SectionStyling'
import LayoutContainer from '../Layout/Layout'
import Account from '../../Account/Account'
import Favorties from '../../Favorites/Favorites'
import FormikContainer from '../../ListingForm/FormikContainer'
// we created context to export our view state to our Layout component so they can be set from there to toggle
// the different views
export const ViewContext = createContext()

export default function SectionContainer () {
  const [view, setView] = useState('')

  // state that will toggle the view of our Account, Listing form and Favories components
  // these state are dynamically set from the context we passed to our Layout container component
  // initially set Favorites to true b/c we want to show it when the user visits the page
  const [pageViews, setPageViews] = useState({
    accountView: false,
    listingFormView: true,
    favoritesView: false
  })

  // function to ran on page load and through out state change to chage views
  const handlePageViews = () => {
    if (view === 'Favorites') { return setPageViews({ accountView: false, listingFormView: false, favoritesView: true }) }
    if (view === 'List House') { return setPageViews({ accountView: false, listingFormView: true, favoritesView: false }) }
    if (view === 'Account') { return setPageViews({ accountView: true, listingFormView: false, favoritesView: false }) }
  }

  // we're using use effect so when our view state changes it runs the handlePageViews function to change the pageViews state
  // and toggle between the page links
  useEffect(() => {
    handlePageViews()
  }, [view])

  // our return statement => it contains the views of all of our sections (Account, List House and Favorites)
  return (
    <Container>
      <ViewContext.Provider value={[view, setView]}>
        <LayoutContainer />
        <Account showAccount={pageViews.accountView} />
        <FormikContainer viewListingForm={pageViews.listingFormView} />
        <Favorties showFavorites={pageViews.favoritesView} />
      </ViewContext.Provider>
    </Container>
  )
}
