import React, { useState, useEffect } from 'react'
import Favorites from './Favorites'
import axios from 'axios'
import jwt from 'jwt-decode'

const SavedSearchContainer = () => {
  const token = window.localStorage.getItem('token')
  const user = jwt(token)
  const userId = user.userId
  const [property, setProperty] = useState()
  const [deletedProperty, setDeletedProperty] = useState()
  const index = 0

  useEffect(() => {
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
    getFavorites()
  }, [])

  const removeProperty = async (property) => {
    setDeletedProperty(property)
  }

  useEffect(() => {
    const deletePropertyFromDB = async () => {
      if (deletedProperty !== undefined) {
        const propertyId = deletedProperty.id
        const deleteData = { property: propertyId, user: userId }
        const response = await axios.post('http://localhost:3001/api/delete/favoriteProperties', deleteData)
        try {
          if (response) {
            const newFavoriteList = property.filter(properties => properties !== deletedProperty)
            setProperty(newFavoriteList)
          }
        } catch (e) {
          console.log(e)
        }
      }
    }
    deletePropertyFromDB()
  }, [deletedProperty])
  // const removeProperty = async (property) => {
  //   const propertyId = property.id
  //   const deleteData = { property: propertyId, user: userId }
  //   console.log(deleteData)
  //   const deleteProperty = await axios.post('http://localhost:3001/api/delete/favoriteProperties', deleteData)
  //   try {
  //     if (deleteProperty) {
  //       const newFavoriteList = property.filter(properties => properties !== property)
  //       setProperty(newFavoriteList)
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  // useEffect(() => {
  //   const filterDeletedProperty = () => {
  //     if (property !== undefined) {
  //       const favoriteList = property.filter(properties => properties !== deletedProperty)
  //       setProperty(favoriteList)
  //     }
  //   }
  //   filterDeletedProperty()
  // }, [deletedProperty])
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
