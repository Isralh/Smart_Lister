import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Jwt from 'jwt-decode'
import MyListing from './MyListing'
const MyListingContainer = ({ viewListing }) => {
  const token = window.localStorage.getItem('token')
  const user = Jwt(token)
  const userId = user.userId
  const [property, setProperty] = useState()
  const [image, setImage] = useState()
  const propertyImages = (property) => {
    const images = property.images
    const allImages = JSON.parse(images)
    setImage(allImages[0])
  }
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

  useEffect(() => {
    console.log(property)
    console.log(image)
  }, [property, image])

  return (
    <>
      {property !== undefined
        ? <MyListing
          showListing={viewListing}
          propertiesImage={image}
          price={property.Price}
          address={property.address}
          cityState={property.cityState}
        /> : null}
    </>
  )
}

export default MyListingContainer
