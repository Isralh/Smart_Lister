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

export const ListingContext = createContext()

const MyListing = () => {
  const token = window.localStorage.getItem('token')
  const user = Jwt(token)
  const userId = user.userId
  console.log(userId)
  const [property, setProperty] = useState([])
  const index = 0
  const [currentListingView, setCurrentListingView] = useState(true)
  const [showUpdateForm, setshowUpdateForm] = useState(false)
  const [currentListing, setCurrentListing] = useState()
  // sucess message notification if property was deleted from the database successfuly
  toast.configure()
  const notify = () => toast.success('Successfully deleted Listing', {
    autoClose: 2500
  })
  useEffect(() => {
    const getUserProperty = async () => {
      const propertyData = await Axios.get(`http://localhost:3001/api/get/user/properties/${userId}`)
      try {
        if (propertyData) {
          console.log(propertyData)
          setProperty(propertyData.data.data)
        }
      } catch (e) {
        console.log(e)
      }
    }
    getUserProperty()
  }, [])

  const deleteProperty = async () => {
    const propertyId = property.id
    const propertyData = await Axios.post(`http://localhost:3001/api/delete/property/${propertyId}`)
    try {
      if (propertyData) {
        notify()
        console.log(propertyData.data)
        setTimeout(() => {
          window.location.reload()
        }, 2500)
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
    <Container>
      <Nav />
      <LayOutWrapper>
        <Layout />
      </LayOutWrapper>
      <CurrentListing
        index={index}
        propertyData={property}
        handleDelete={deleteProperty}
        handleUpdate={updatePropertyListing}
        viewListing={currentListingView}
      />
      <ListingContext.Provider value={currentListing}>
        <UpdateListing
          viewForm={showUpdateForm}
          handleCancel={cancelUpdate}
        />
      </ListingContext.Provider>
    </Container>
  )
}

export default MyListing
