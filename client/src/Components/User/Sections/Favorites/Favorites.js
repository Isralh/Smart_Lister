import React, { useState } from 'react'
import {
  Container, LayOutWrapper, SectiontWrapper, TopHeading, ContentContainer, ImageContainer,
  Section, City, ListingWrapper, Price, Address, Updates
} from './FavortiesStyling'
import Nav from '../../../Home/Nav/Nav'
import Layout from '../Section/Layout/Layout'
import NoResult from '../SharedComponent/NoResult'
import Modal from '../../../Properties/ListingModal/Modal/Modal'
import Loading from '../../../Loading/Loading'
import FooterContainer from '../../../Home/Footer/FooterContainer'
const Favorites = ({
  propertyData = [], index, showModal, modalClose, loading,
  modalProperty, handleModal, property, deleteFavorite, loadingStatus, loadingStyle
}) => {
  function initialImage (key) {
    if (propertyData.length > 0) {
      const images = propertyData[key].images
      const allImages = JSON.parse(images)
      return allImages[0][index]
    }
  }
  const [active, setActive] = useState(true)
  return (
    <Container>
      <Nav />
      <LayOutWrapper>
        <Layout favoriteActive={active} />
      </LayOutWrapper>
      {loading ? <Loading loadingState={loadingStatus} loadingMargin={loadingStyle} />
        : propertyData.length > 0
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
                  <ImageContainer onClick={handleModal.bind(this, property)} imageUrl={initialImage(i)}>
                    <ListingWrapper>
                      <Price>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(property.Price)}</Price>
                      <Address>{property.address}</Address>
                      <City>{property.cityState}</City>
                    </ListingWrapper>
                  </ImageContainer>
                </Section>)}
            </ContentContainer>
          </SectiontWrapper> : <NoResult notFound='No Saved Searches' />}
      <Modal
        handleShow={showModal}
        closeModal={modalClose}
        propertyData={modalProperty}
      />
      <FooterContainer />
    </Container>
  )
}

export default Favorites
