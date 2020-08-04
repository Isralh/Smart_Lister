import React from 'react'
import {
  SectiontWrapper, TopHeading, ContentContainer, ImageContainer,
  Section, City, ListingWrapper, Price, Address, Updates
} from './CurrentListingStyling'
import NoResult from '../../SharedComponent/NoResult'
const CurrentListing = ({
  propertyData = [], index, handleDelete, property, handleUpdate,
  viewListing, openModal
}) => {
  function initialImage (propertyData, key, index) {
    if (propertyData.length > 0) {
      const images = propertyData[key].images
      const allImages = JSON.parse(images)
      return allImages[0][index]
    }
  }
  return (
    <>
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
                    <p onClick={handleDelete.bind(this, property)}>DELETE</p>
                  </div>
                </Updates>
                <ImageContainer imageUrl={initialImage(propertyData, i, index)} onClick={openModal.bind(this, property)}>
                  <ListingWrapper>
                    <Price>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(property.Price)}</Price>
                    <Address>{property.address}</Address>
                    <City>{property.cityState}</City>
                  </ListingWrapper>
                </ImageContainer>
              </Section>)}
          </ContentContainer>
        </SectiontWrapper> : <NoResult notFound='No Listing Found' />}
    </>
  )
}

export default CurrentListing
