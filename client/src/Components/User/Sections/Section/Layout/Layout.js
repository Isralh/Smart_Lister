import React from 'react'
import { Container, MyListing, PostProperty, Favorties, Account } from './LayoutStyling'
import { Link } from 'react-router-dom'
const Layout = () => {

  return (
    <Container>
      <Link style={{ textDecoration: 'none' }} to='/user/mylisting'><h1>MY LISTING</h1> </Link>
      <Link style={{ textDecoration: 'none' }} to='/user/postproperty'> <h1>POST PROPERTY</h1></Link>
      <Link style={{ textDecoration: 'none' }} to='/user/favorites'><h1>FAVORITES</h1></Link>
      <Link style={{ textDecoration: 'none' }} to='/user/myaccount'> <h1>ACCOUNT</h1></Link>
    </Container>
  )
}

export default Layout
