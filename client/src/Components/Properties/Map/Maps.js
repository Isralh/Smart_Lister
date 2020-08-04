import React, { useState, useContext } from 'react'
import GoogleMaps from './GoogleMaps'
import Modal from '../ListingModal/Modal/Modal'
import { propertiesContext } from '../Properties/Properties'

const Maps = () => {
  // list of property sent from the property component
  const propertyData = useContext(propertiesContext)

  // state to toggle modal
  const [showModal, setShowModal] = useState()

  // selected listing from the map
  const [listing, setListing] = useState(null)

  // user selected property to view on modal
  const [modalProperty, setModalProperty] = useState()
 
  // check if modal is open
  const [modalStatus, setModalStatus] = useState(false)

  // show listing property selected from the map
  const selectListing = (property) => {
    setListing(property)
  }

  // close listing property selected from the map
  const closeListingView = () => {
    setListing(null)
  }

  // function to open modal
  const modalOpen = (selectedProperty) => {
    setShowModal(true)
    setModalProperty(selectedProperty)
    // setModalStatus(true)
  }

  // function to close modal
  const modalClose = () => {
    setShowModal(false)
    setListing(null)
  }

  return (
    <>
      <GoogleMaps
        showProperty={modalOpen}
        propertyInfo={propertyData}
        selectProperty={selectListing}
        closeSelectedProperty={closeListingView}
        selectedProperty={listing}
      />
      <div>
        <Modal
          handleShow={showModal}
          closeModal={modalClose}
          propertyData={modalProperty}
        />
      </div>
    </>
  )
}

export default Maps
