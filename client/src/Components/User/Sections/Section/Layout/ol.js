import React from 'react'
import { Container, MyListing, PostProperty, Favorties, Account } from './LayoutStyling'

const Layout = ({
  showMyListing, showPostProperty, showFavorites, showAccount,
  listingActive, postActive, favoritesActive, accountActive
}) => {
  return (
    <Container>
      <MyListing onClick={showMyListing} active={listingActive}>MY LISTING</MyListing>
      <PostProperty onClick={showPostProperty} active={postActive}>POST PROPERTY</PostProperty>
      <Favorties onClick={showFavorites} active={favoritesActive}>FAVORITES</Favorties>
      <Account onClick={showAccount} active={accountActive}>ACCOUNT</Account>
    </Container>
  )
}

export default Layout
