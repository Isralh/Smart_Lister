import React, { useState, useEffect, createContext } from 'react'
import Axios from 'axios'
import Jwt from 'jwt-decode'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Nav from '../../../../Home/Nav/Nav'
import Layout from '../../Section/Layout/Layout'
import CurrentListing from '../CurrentListing/CurrentListing'
import { Container, LayOutWrapper } from './MyListingStyles'
import UpdateListing from '../UpdateListing/UpdateListing'
import Modal from '../../../../Properties/ListingModal/Modal/Modal'
import Loading from '../../../../Loading/Loading'
export const ListingContext = createContext()

const MyListing = () => {
  // loading state
  const [loading, setLoading] = useState({
    status: true,
    margin: '35vh 0 0 5%'
  })
  // state to toggle modal
  const [showModal, setShowModal] = useState()
  // state for modal property
  const [modalProperty, setModalPropety] = useState()
  const modalClose = () => {
    setShowModal(false)
  }
  const modalOpen = (property) => {
    setShowModal(true)
    setModalPropety(property)
  }
  const token = window.localStorage.getItem('token')
  const user = Jwt(token)
  const userId = user.userId
  const [active, setActive] = useState(true)
  const [property, setProperty] = useState([])
  const index = 0
  const [currentListingView, setCurrentListingView] = useState(true)
  const [showUpdateForm, setshowUpdateForm] = useState(false)
  const [currentListing, setCurrentListing] = useState()
  // sucess message notification if property was deleted from the database successfuly
  toast.configure()
  const notify = () => toast.success('Successfully deleted Listing', {
    autoClose: 1500
  })
  useEffect(() => {
    const getUserProperty = async () => {
      const propertyData = await Axios.get(`http://localhost:3001/api/get/user/properties/${userId}`)
      try {
        if (propertyData) {
          setProperty(propertyData.data.data)
          setLoading(prev => { return { ...prev, status: false } })
        }
      } catch (e) {
        console.log(e)
      }
    }
    getUserProperty()
  }, [])

  const deleteProperty = async (property) => {
    const propertyId = property.id
    const propertyData = await Axios.delete(`http://localhost:3001/api/delete/property/${propertyId}`)
    try {
      if (propertyData) {
        notify()
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const updatePropertyListing = (property) => {
    setCurrentListing(property)
    setCurrentListingView(false)
    setshowUpdateForm(true)
  }

  const cancelUpdate = () => {
    setCurrentListingView(true)
    setshowUpdateForm(false)
  }
  return (
    <>
      <Container>
        <Nav />
        <LayOutWrapper>
          <Layout myActiveListing={active} />
        </LayOutWrapper>
        {loading.status ? <Loading loadingState={loading.status} loadingMargin={loading.margin} />
          : <CurrentListing
            index={index}
            propertyData={property}
            handleDelete={deleteProperty}
            handleUpdate={updatePropertyListing}
            viewListing={currentListingView}
            openModal={modalOpen}
          />}
        <ListingContext.Provider value={currentListing}>
          <UpdateListing
            viewForm={showUpdateForm}
            handleCancel={cancelUpdate}
          />
        </ListingContext.Provider>
      </Container>
      <Modal
        handleShow={showModal}
        closeModal={modalClose}
        propertyData={modalProperty}
      />
    </>
  )
}

export default MyListing
