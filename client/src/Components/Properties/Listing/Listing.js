import React, { useState, createContext } from 'react'
import { Container, HouseListing, SectionWrapper, Address, City, Price, AddtoFavorite, ListingWrapper, FontAwesomeStyle } from './ListingStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuid } from 'uuid'
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy'
import Modal from '../ListingModal/Modal/Modal'
export const listingContext = createContext()
export default function Listing ({ property = [] }) {
  const index = 0
  const [state, setState] = useState({
    showModal: false,
    houseInfo: []
  })
  // const [containerState, setContainerState] = useState(true)
  const handleOpen = (listing) => {
    setState({ showModal: true, houseInfo: listing })
    // setContainerState(!containerState)
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
  // console.log(run(property, 1, 3))
  return (
    <listingContext.Provider value={state}>
      <Container>
        <SectionWrapper>
          {property.length > 0 ? <>
            {property.map((listing, i) =>
              <HouseListing key={uuid()} ListingImage={initialImage(property, i, index)} onClick={handleOpen.bind(this, listing)}>
                <ListingWrapper>
                  <Price>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(listing.Price)}</Price>
                  <Address>{listing.address}</Address>
                  <City>{listing.cityState}</City>
                </ListingWrapper>
                <AddtoFavorite>
                  <Tooltip title='Add to favorite' trigger='mouseenter'><FontAwesomeIcon icon={faEye} style={FontAwesomeStyle} /></Tooltip>
                </AddtoFavorite>
              </HouseListing>
            )}
                                 </> : <p>Loading...</p>}
        </SectionWrapper>
      </Container>
      <Modal handleShow={state.showModal} closeModal={handleClose} />
    </listingContext.Provider>
  )
}
