import React from 'react'
import { Container, LayOutWrapper, NoListing } from './Styling'
import Nav from '../../../Home/Nav/Nav'
import Layout from '../Section/Layout/Layout'
const NoResult = ({ notFound }) => {
  return (
    <Container>
      <Nav />
      <LayOutWrapper>
        <Layout />
      </LayOutWrapper>
      <NoListing>{notFound}</NoListing>
    </Container>
  )
}

export default NoResult
