import React from 'react'
import {
  Container, LayOutWrapper, SectiontWrapper, TopHeading, ContentContainer, ImageContainer,
  Section, City, ListingWrapper, Price, Address, Updates
} from './CurrentListingStyling'
import Nav from '../../../../Home/Nav/Nav'
import Layout from '../../Section/Layout/Layout'
import NoResult from '../../SharedComponent/NoResult'
import UpdateListing from '../UpdateListing/UpdateListing'
// import { v4 as uuid } from 'uuid'
const CurrentListing = ({ propertyData = [], index, handleDelete, property, handleUpdate,
  viewListing, viewUpdateForm }) => {
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
        ? <SectiontWrapper viewMyListing={viewListing}>
          <TopHeading>
            <h1>CURRENT LISTING</h1>
          </TopHeading>
          <ContentContainer>
            {propertyData.map((property, i) =>
              <Section key={property.id}>
                <Updates>
                  <div>
                    <p onClick={handleUpdate.bind(this, property)}>UPDATE</p>
                  </div>
                  <div>
                    <p onClick={handleDelete}>DELETE</p>
                  </div>
                </Updates>
                <ImageContainer imageUrl={initialImage(propertyData, i, index)}>
                  <ListingWrapper>
                    <Price>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(property.Price)}</Price>
                    <Address>{property.address}</Address>
                    <City>{property.cityState}</City>
                  </ListingWrapper>
                </ImageContainer>
              </Section>)}
          </ContentContainer>
        </SectiontWrapper> : <NoResult notFound='No Listing Found' />}
      <UpdateListing
        viewForm={viewUpdateForm}
      />
    </Container>
  )
}

export default CurrentListing
