import React, { useState, createContext } from 'react'
import { Container, HouseListing, SectionWrapper, Address, City, Price, AddtoFavorite, ListingWrapper } from './ListingStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuid } from 'uuid'
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy'
import Modal from '../ListingModal/Modal/Modal'

export const listingContext = createContext()
export default function Listing ({ house }) {
  const index = 0
  const [state, setState] = useState({
    showModal: false,
    houseInfo: []
  })
  // const [containerState, setContainerState] = useState(true)
  const handleOpen = (i) => {
    setState({ showModal: true, houseInfo: i })
    // setContainerState(!containerState)
  }
  const handleClose = () => {
    setState(prev => {
      return { ...prev, showModal: false }
    })
  }

  return (
    <listingContext.Provider value={state}>
      <Container>
        <SectionWrapper>
          {house.map(i =>
            <HouseListing key={uuid()} ListingImage={i.image[index]} onClick={handleOpen.bind(this, i)}>
              <ListingWrapper>
                <Price>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(i.Price)}</Price>
                <Address>{i.Address}</Address>
                <City>{i.City}</City>
              </ListingWrapper>
              <AddtoFavorite>
                <Tooltip title='Add to favorite' trigger='mouseenter'><FontAwesomeIcon icon={faEye} style={{ color: 'white', margin: '4px 0px 0px 8px' }} /></Tooltip>
              </AddtoFavorite>
            </HouseListing>
          )}
        </SectionWrapper>
      </Container>
      <Modal handleShow={state.showModal} closeModal={handleClose} />
    </listingContext.Provider>
  )
}
