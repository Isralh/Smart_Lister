import React, { useState, useEffect } from 'react'
import Jwt from 'jwt-decode'
import axios from 'axios'
import NoResult from '../SharedComponent/NoResult'
import ViewComponent from '../SharedComponent/ViewComponent'
const Favorites = () => {
  const token = window.localStorage.getItem('token')
  const user = Jwt(token)
  const userId = user.userId
  const [property, setProperty] = useState([])
  const [image, setImage] = useState()
  // const propertyImages = (property) => {
  //   if (property.length > 0) {
  //     const images = property.images
  //     const allImages = JSON.parse(images)
  //     setImage(allImages[0])
  //   }
  // }
  function initialImage (property, key, index) {
    if (property.length > 0) {
      const images = property[key].images
      const allImages = JSON.parse(images)
      return allImages[0][index]
    }
  }
  const index = 0
  useEffect(() => {
    const getUserProperty = async () => {
      const propertyData = await axios.get(`http://localhost:3001/api/get/favorites/${userId}`)
      try {
        if (propertyData) {
          setProperty(propertyData.data.data)
          console.log(propertyData)
        }
      } catch (e) {
        console.log(e)
      }
    }
    getUserProperty()
  }, [])

  useEffect(() => {
    console.log(property)
    console.log(initialImage(property, 0, 0))
  }, [property])
  return (
    <>
      {property.length > 0
        ? <ViewComponent
          heading='MY FAVORITES'
          propertyInfo={property}
        />
        : <NoResult notFound='No Favorites Found' />}
    </>
  )
}

export default Favorites
