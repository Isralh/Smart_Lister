import React, { useState, createContext } from 'react'
import { Container, HouseListing, SectionWrapper, Address, City, Price, ListingWrapper } from './ListingStyling'
import { v4 as uuid } from 'uuid'
import ModalContainer from '../ListingModal/Modal/ModalContainer'
import Loading from '../../Loading/Loading'
export const listingContext = createContext()
export default function Listing ({ property, loading, loginStatus, loadingStyle }) {
  const index = 0
  const [state, setState] = useState({
    showModal: false,
    propertyInfo: []
  })
  const handleOpen = (listing) => {
    setState({ showModal: true, propertyInfo: listing })
  }
  const handleClose = () => {
    setState(prev => {
      return { ...prev, showModal: false }
    })
  }
  function initialImage (property, key, index) {
    if (property.length > 0) {
      const images = property[key].images
      const allImages = JSON.parse(images)
      return allImages[0][index]
    }
  }

  return (
    <listingContext.Provider value={state}>
      <Container>
        {loading ? <Loading loadingState={loginStatus} loadingMargin={loadingStyle} />
          : <SectionWrapper>
            {property.map((listing, i) =>
              <HouseListing key={uuid()} ListingImage={initialImage(property, i, index)} onClick={handleOpen.bind(this, listing)}>
                <ListingWrapper>
                  <Price>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(listing.Price)}</Price>
                  <Address>{listing.address}</Address>
                  <City>{listing.cityState}</City>
                </ListingWrapper>
              </HouseListing>
            )}
          </SectionWrapper>}
      </Container>
      <ModalContainer openModal={state.showModal} closeModal={handleClose} />
    </listingContext.Provider>
  )
}
