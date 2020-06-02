import React from 'react'
import {
  Container, LayOutWrapper, SectiontWrapper, TopHeading, ContentContainer, ImageContainer,
  Section, City, FontAwesomeContainer, FontAwesomeStyle, ListingWrapper, Price, Address
} from './FavortiesStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Nav from '../../../Home/Nav/Nav'
import Layout from '../Section/Layout/Layout'
import NoResult from '../SharedComponent/NoResult'
// import { v4 as uuid } from 'uuid'
const Favorites = ({ propertyData = [], index }) => {
  function initialImage (propertyData, key, index) {
    if (propertyData.length > 0) {
      const images = propertyData[key].images
      const allImages = JSON.parse(images)
      return allImages[0][index]
    }
  }
  return (
    <Container>
      <Nav />
      <LayOutWrapper>
        <Layout />
      </LayOutWrapper>
      {propertyData.length > 0
        ? <SectiontWrapper>
          <TopHeading>
            <h1>SAVED SEARCHES</h1>
          </TopHeading>
          <ContentContainer>
            {propertyData.map((property, i) =>
              <Section key={property.id}>
                <FontAwesomeContainer>
                  <FontAwesomeIcon icon={faTimesCircle} style={FontAwesomeStyle} />
                </FontAwesomeContainer>
                <ImageContainer imageUrl={initialImage(propertyData, i, index)}>
                  <ListingWrapper>
                    <Price>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(property.Price)}</Price>
                    <Address>{property.address}</Address>
                    <City>{property.cityState}</City>
                  </ListingWrapper>
                </ImageContainer>
              </Section>)}
          </ContentContainer>
        </SectiontWrapper> : <NoResult notFound='No Saved Searches' />}
    </Container>
  )
}

export default Favorites
