import React, { useContext } from 'react'
import Modal from './Modal'
import 'react-toastify/dist/ReactToastify.css'
import { listingContext } from '../../Listing/Listing'

const ModalContainer = ({ openModal, closeModal }) => {
  const data = useContext(listingContext)
  const { showModal, propertyInfo } = data

  return (
    <Modal
      property={data}
      handleShow={openModal}
      closeModal={closeModal}
      propertyData={propertyInfo}
    />
  )
}

export default ModalContainer
