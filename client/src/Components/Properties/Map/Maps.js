import React, { useState, useContext } from 'react'
import GoogleMaps from './GoogleMaps'
import Modal from '../ListingModal/Modal/Modal'
import { propertiesContext } from '../Properties/Properties'

const Maps = () => {
  const [showModal, setShowModal] = useState()
  const propertyData = useContext(propertiesContext)
  const showSelectedProperty = () => {
    setShowModal(true)
  }
  const modalClose = () => {
    setShowModal(false)
  }
  return (
    <>
      <GoogleMaps showProperty={showSelectedProperty} propertyInfo={propertyData} />
      <div>
        <Modal handleShow={showModal} closeModal={modalClose} />
      </div>

    </>
  )
}

export default Maps
