import React, { useState, useEffect } from 'react'
import MyListing from '../MyListing/MyListing'
import Jwt from 'jwt-decode'
import axios from 'axios'
const Favorites = () => {
  const token = window.localStorage.getItem('token')
  const user = Jwt(token)
  const userId = user.userId
  const [property, setProperty] = useState([])
  const [image, setImage] = useState()
  const propertyImages = (property) => {
    if (property) {
      const images = property.images
      const allImages = JSON.parse(images)
      setImage(allImages[0])
    }
  }

  useEffect(() => {
    const getUserProperty = async () => {
      const propertyData = await axios.get(`http://localhost:3001/api/get/favorites/${userId}`)
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

  useEffect(() => {
    console.log(property)
  }, [property])
  return (
    <>
      {property !== undefined
        ? <MyListing
          propertiesImage={image}
          price={property.Price}
          address={property.address}
          cityState={property.cityState}
          heading='My Favorites'
        /> : null}
    </>
  )
}

export default Favorites
