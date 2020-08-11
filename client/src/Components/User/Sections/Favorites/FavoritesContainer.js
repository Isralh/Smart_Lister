import React, { useState, useEffect } from 'react'
import Favorites from './Favorites'
import axios from 'axios'
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'

const SavedSearchContainer = () => {
  /* loading state */
  const [dataLoading, setDataLoading] = useState({
    status: true,
    margin: '35vh 0 0 5%'
  })
  const token = window.localStorage.getItem('token')
  const user = jwt(token)
  const userId = user.userId
  const [property, setProperty] = useState()
  const [deletedProperty, setDeletedProperty] = useState()
  const index = 0

  const history = useHistory()
  useEffect(() => {
    const getFavorites = async () => {
      const propertyInfo = await axios.get(`https://smart-lister.work/api/get/favorites/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } })
      try {
        if (propertyInfo.status === 200) {
          setProperty(propertyInfo.data.data)
          setDataLoading(prev => { return { ...prev, status: false } })
        }
      } catch (e) {
        history.push('/500')
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
        const response = await axios.post('https://smart-lister.work/api/delete/favoriteProperties',
          deleteData, { headers: { Authorization: `Bearer ${token}` } })
        try {
          if (response.status === 200) {
            const newFavoriteList = property.filter(properties => properties !== deletedProperty)
            setProperty(newFavoriteList)
          }
        } catch (e) {
          history.push('/500')
        }
      }
    }
    deletePropertyFromDB()
  }, [deletedProperty])

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
    <>
      <Favorites
        index={index}
        propertyData={property}
        showModal={modalStatus}
        modalClose={closeModal}
        modalProperty={favortieProperty}
        handleModal={modalOpen}
        deleteFavorite={removeProperty}
        loading={dataLoading.status}
        loadingStatus={dataLoading.status}
        loadingStyle={dataLoading.margin}
      />
    </>
  )
}

export default SavedSearchContainer
