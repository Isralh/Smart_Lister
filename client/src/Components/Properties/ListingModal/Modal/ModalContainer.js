import React, { useContext, useState, useEffect } from 'react'
import Modal from './Modal'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { listingContext } from '../../Listing/Listing'

const ModalContainer = ({ openModal, closeModal }) => {
  const data = useContext(listingContext)
  const { showModal, propertyInfo } = data
  const token = window.localStorage.getItem('token')
  const [image, setImage] = useState()
  const [length, setlength] = useState()
  const [index, setIndex] = useState(0)
  const [inputInfo, setInputInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  // function to handle pagination of our property pictures in the Modal
  const nextImage = () => {
    setIndex(index + 1)
    if (index >= length - 1) {
      setIndex(0)
    }
  }
  const prevImage = () => {
    setIndex(index - 1)
    if (index <= 0) {
      setIndex(0)
    }
  }
  // check user's Info if they're not logged in alert them to login or register before adding properties to thier
  // favorite list
  const userInfo = () => {
    if (token !== null || undefined) {
      const user = jwtDecode(token)
      return user.email
    } else return 'user not logged in'
  }

  // sucess message notification if property was added to the database successfuly
  toast.configure()
  const notify = () => toast.success('Successfully added to favorites', {
    autoClose: 4000
  })
  // function to handle posting user's favorite property to the database
  const userFavorite = async () => {
    const user = userInfo()
    if (user !== 'user not logged in') {
      const postData = await axios.post('http://localhost:3001/api/post/favoriteProperties', [{ data: propertyInfo, userInfo: user }])
      try {
        if (postData) {
          notify()
          console.log(postData.data.message)
        }
      } catch (e) {
        console.log(e)
      }
    } else if (user === 'user not logged in') {
      return window.alert('Please login in to add to favorties!')
    }
  }
  // function to handle user's contact input onChange
  const inputedData = (e) => {
    e.persist()
    const inputValue = e.target.value
    setInputInfo(prev => { return { ...prev, [e.target.name]: inputValue } })
  }
  // function to handle user's contact input submission, we'll send it to the db and from there use NodeMailer
  // to send the email to the property lister
  const submitContact = async (e) => {
    e.preventDefault()
    const postInquiry = await axios.post('http://localhost:3001/api/post/userInquiry', [{ property: propertyInfo, senderInfo: inputInfo }])
    try {
      if (postInquiry) {
        console.log(postInquiry.data)
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    if (showModal) {
      const images = propertyInfo.images
      const allImages = JSON.parse(images)
      setImage(allImages[0])
      setlength(allImages[0].length)
    }
    if (!showModal) {
      setIndex(0)
    }
    userInfo()
  }, [propertyInfo, showModal, inputInfo])
  return (
    <Modal
      property={data}
      handleShow={openModal}
      closeModal={closeModal}
      handleNext={nextImage}
      handlePrev={prevImage}
      handleFavorite={userFavorite}
      contactInputs={inputedData}
      handleContact={submitContact}
      address={propertyInfo.address}
      image={image}
      index={index}
      length={length}
      price={propertyInfo.Price}
      beds={propertyInfo.Beds}
      baths={propertyInfo.Baths}
      daysonMarket={propertyInfo.DaysOnMarket}
      garages={propertyInfo.Garages}
      citState={propertyInfo.cityState}
      sqFt={propertyInfo.SqFt}
    />
  )
}

export default ModalContainer