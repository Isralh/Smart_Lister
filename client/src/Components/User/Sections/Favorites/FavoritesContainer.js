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

  const removeProperty = async (property) => {
    const propertyId = property.id
    const deleteData = { property: propertyId, user: userId }
    console.log(deleteData)
    const deleteProperty = await axios.post('http://localhost:3001/api/delete/favoriteProperties', deleteData)
    try {
      if (deleteProperty) {
        console.log(deleteProperty)
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getFavorites()
  }, [])

  // state to toggle modal
  const [modalStatus, setModalStatus] = useState(false)
  // state for modal property
  const [favortieProperty, setFavoriteProperty] = useState()
  const closeModal = () => {
    setModalStatus(false)
  }
  const modalOpen = (property) => {
    setModalStatus(true)
    setFavoriteProperty(property)
  }
  return (
    <div>
      <Favorites
        index={index}
        propertyData={property}
        showModal={modalStatus}
        modalClose={closeModal}
        modalProperty={favortieProperty}
        handleModal={modalOpen}
        deleteFavorite={removeProperty}
      />
    </div>
  )
}

export default SavedSearchContainer
