import React, { useState, useEffect } from 'react'
import Favorites from './Favorites'
import axios from 'axios'
import jwt from 'jwt-decode'

const SavedSearchContainer = () => {
  const token = window.localStorage.getItem('token')
  const user = jwt(token)
  const userId = user.userId
  const [property, setProperty] = useState()
  const index = 0
  const getFavorites = async () => {
    const propertyInfo = await axios.get(`http://localhost:3001/api/get/favorites/${userId}`)

    try {
      if (propertyInfo) {
        console.log(propertyInfo.data.data)
        setProperty(propertyInfo.data.data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getFavorites()
    console.log(property)
  }, [])
  return (
    <div>
      <Favorites
        index={index}
        propertyData={property}
      />
    </div>
  )
}

export default SavedSearchContainer
