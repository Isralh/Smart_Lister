import React, { useState } from 'react'
import GoogleMaps from './GoogleMaps'
import Modal from '../ListingModal/Modal/Modal'

const Maps = () => {
  const [showModal, setShowModal] = useState()
  const showSelectedProperty = () => {
    setShowModal(true)
  }
  const modalClose = () => {
    setShowModal(false)
  }
  return (
    <>
      <GoogleMaps showProperty={showSelectedProperty} />
      <div>
        <Modal handleShow={showModal} closeModal={modalClose} />
      </div>
    </>
  )
}

export default Maps
