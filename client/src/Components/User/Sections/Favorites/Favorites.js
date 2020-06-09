import React from 'react'
import {
  Container, LayOutWrapper, SectiontWrapper, TopHeading, ContentContainer, ImageContainer,
  Section, City, ListingWrapper, Price, Address, Updates
} from './FavortiesStyling'
import Nav from '../../../Home/Nav/Nav'
import Layout from '../Section/Layout/Layout'
import NoResult from '../SharedComponent/NoResult'
import Modal from '../../../Properties/ListingModal/Modal/Modal'

const Favorites = ({
  propertyData = [], index, showModal, modalClose,
  modalProperty, handleModal, property, deleteFavorite
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
                  <Updates>
                    <div>
                      <p onClick={deleteFavorite.bind(this, property)}>DELETE</p>
                    </div>
                  </Updates>
                  <ImageContainer onClick={handleModal.bind(this, property)} imageUrl={initialImage(propertyData, i, index)}>
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
      <Modal
        handleShow={showModal}
        closeModal={modalClose}
        propertyData={modalProperty}
      />
    </>
  )
}

export default Favorites
