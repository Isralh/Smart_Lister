import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Jwt from 'jwt-decode'
import CurrentListing from './CurrentListing'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const CurrentListingContainer = () => {
  const token = window.localStorage.getItem('token')
  const user = Jwt(token)
  const userId = user.userId
  const [property, setProperty] = useState([])
  const index = 0
  const [currentListingView, setCurrentListingView] = useState(true)
  const [showUpdateForm, setshowUpdateForm] = useState(false)
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
    console.log(property)
    setCurrentListingView(false)
    setshowUpdateForm(true)
  }

  return (
    <>
      <CurrentListing
        index={index}
        propertyData={property}
        handleDelete={deleteProperty}
        handleUpdate={updatePropertyListing}
        viewListing={currentListingView}
        viewUpdateForm={showUpdateForm}
      />
    </>
  )
}

export default CurrentListingContainer
