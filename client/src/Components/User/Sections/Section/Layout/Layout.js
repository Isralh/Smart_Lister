import React from 'react'
import { Container } from './LayoutStyling'
import { Link } from 'react-router-dom'
const Layout = ({ myActiveListing }) => {
  return (
    <Container>
      <Link style={{ textDecoration: 'none' }} to='/user/myListing'><h1>MY LISTING</h1> </Link>
      <Link style={{ textDecoration: 'none' }} to='/user/postProperty'> <h1>POST PROPERTY</h1></Link>
      <Link style={{ textDecoration: 'none' }} to='/user/favorites'><h1>FAVORITES</h1></Link>
      <Link style={{ textDecoration: 'none' }} to='/user/myAccount'> <h1>ACCOUNT</h1></Link>
    </Container>
  )
}

export default Layout
