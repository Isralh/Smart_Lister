import React from 'react'
import { Container, LayOutWrapper, NoListing } from './Styling'
import Nav from '../../../Home/Nav/Nav'
import Layout from '../Section/Layout/Layout'
const NoResult = ({ notFound }) => {
  return (
    <Container>
      <NoListing>{notFound}</NoListing>
    </Container>
  )
}

export default NoResult
// <Nav />
// <LayOutWrapper>
//   <Layout />
// </LayOutWrapper>