import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Container, ImageContainer, ListingWrapper, Price, Address, City, ContentWrapper, FontAwesomeStyle, FontAwesomeContainer, TopHeading, LayOutWrapper } from './FavortiesStyling'
import Nav from '../../../Home/Nav/Nav'
import Layout from '../Section/Layout/Layout'
const Favorites = ({ propertiesImage, price, address, cityState, underLineActive }) => {
  return (
    <Container>
      <Nav />
      <LayOutWrapper>
        <Layout />
      </LayOutWrapper>
      {propertiesImage !== undefined
        ? <ContentWrapper>
          <TopHeading>
            <h1>CURRENT LISTING</h1>
          </TopHeading>
          <FontAwesomeContainer>
            <FontAwesomeIcon icon={faTimesCircle} style={FontAwesomeStyle} onClick={(e) => console.log('delete')} />
          </FontAwesomeContainer>
          <ImageContainer imageUrl={propertiesImage[0]}>
            <ListingWrapper>
              <Price>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price)}</Price>
              <Address>{address}</Address>
              <City>{cityState}</City>
            </ListingWrapper>
          </ImageContainer>
        </ContentWrapper> : null}
    </Container>
  )
}

export default Favorites
