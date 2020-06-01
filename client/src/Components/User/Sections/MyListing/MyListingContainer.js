import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Jwt from 'jwt-decode'
import MyListing from './MyListing'
import { Container, LayOutWrapper, NoListing } from './MyListingStyling'
import Nav from '../../../Home/Nav/Nav'
import Layout from '../Section/Layout/Layout'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MyListingContainer = () => {
  const token = window.localStorage.getItem('token')
  const user = Jwt(token)
  const userId = user.userId
  const [property, setProperty] = useState()
  const [image, setImage] = useState()
  const propertyImages = (property) => {
    if (property) {
      const images = property.images
      const allImages = JSON.parse(images)
      setImage(allImages[0])
    }
  }
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
          propertyImages(propertyData.data.data)
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

  return (
    <>
      {property !== undefined
        ? <MyListing
          propertiesImage={image}
          price={property.Price}
          address={property.address}
          cityState={property.cityState}
          handleDelete={deleteProperty}
          update='UPDATE'
          heading='CURRENT LISTING'
        />
        : <Container>
          <Nav />
          <LayOutWrapper>
            <Layout />
          </LayOutWrapper>
          <NoListing>No Listing Found</NoListing>
        </Container>}
    </>
  )
}

export default MyListingContainer
