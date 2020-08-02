import React from 'react'
import { Container, MyListing, PostProperty, Favorties, Account } from './LayoutStyling'
import { Link } from 'react-router-dom'
const Layout = ({ myActiveListing, propertyActive, favoriteActive, accountActive }) => {
  return (
    <Container>
      <Link style={{ textDecoration: 'none' }} to='/user/myListing'><MyListing active={myActiveListing}>MY LISTING</MyListing> </Link>
      <Link style={{ textDecoration: 'none' }} to='/user/postProperty'> <PostProperty active={propertyActive}>POST PROPERTY</PostProperty></Link>
      <Link style={{ textDecoration: 'none' }} to='/user/favorites'><Favorties active={favoriteActive}>FAVORITES</Favorties></Link>
      {/* <Link style={{ textDecoration: 'none' }} to='/user/myAccount'> <Account active={accountActive}>ACCOUNT</Account></Link> */}
    </Container>
  )
}

export default Layout
