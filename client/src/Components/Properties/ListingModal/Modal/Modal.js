import React, { createContext, useState, useEffect } from 'react'
import { ListingModal, Content, Container, HouseDescription } from './ModalStyling'
import TopHeading from '../TopHeading/TopHeading'
import ModalImage from '../Image/ModalImage'
import HouseInfo from '../HouseInfo/HouseInfo'
import Description from '../Description/Description'
import InquiryForm from '../Inquiry/InquiryForm'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const PropertyContext = createContext()
export default function Modal ({
  closeModal, handleShow, property, propertyData
}) {
  const token = window.localStorage.getItem('token')
  const [image, setImage] = useState()
  const [length, setlength] = useState()
  const [index, setIndex] = useState(0)
  const current = index + 1
  const [inputInfo, setInputInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [sendStatus, setSendStatus] = useState(false)
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
  const successNotify = () => toast.success('Successfully added to favorites', {
    autoClose: 2000
  })

  // sucess message notification if email was successfully sent to property lister
  toast.configure()
  const messageSuccess = () => toast.success('Email successfully sent to lister!', {
    autoClose: 2000
  })
  // function to handle posting user's favorite property to the database
  const userFavorite = async () => {
    const user = userInfo()
    if (user !== 'user not logged in') {
      const postData = await axios.post('http://localhost:3001/api/post/favoriteProperties', [{ data: propertyData, userInfo: user }])
      try {
        if (postData.status === 200) {
          window.alert('Property already exists in favorites')
        } else if (postData.status === 201) {
          successNotify()
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
    setSendStatus(true)
    const postInquiry = await axios.post('http://localhost:3001/api/post/userInquiry', [{ property: propertyData, senderInfo: inputInfo }])
    try {
      if (postInquiry.status === 200) {
        setSendStatus(false)
        messageSuccess()
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    if (handleShow) {
      const images = propertyData.images
      const allImages = JSON.parse(images)
      setImage(allImages[0])
      setlength(allImages[0].length)
    }
    if (!handleShow) {
      setIndex(0)
    }
  }, [propertyData, handleShow])

  useEffect(() => {
    userInfo()
  }, [inputInfo])
  return (
    <PropertyContext.Provider value={property}>
      <Container show={handleShow}>
        <ListingModal>
          {propertyData !== undefined
            ? <Content>
              <TopHeading close={closeModal} houseAddress={propertyData.address} />
              <HouseDescription>
                {image !== undefined ? <ModalImage
                  backgroundImage={image[index]}
                  secondPic={image}
                  handleRight={nextImage}
                  handleLeft={prevImage}
                  currentIndex={current}
                  indexLength={length}
                  addToFavorites={userFavorite}
                /> : null}
                <HouseInfo
                  price={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(propertyData.Price)}
                  Beds={propertyData.Beds} Baths={propertyData.Baths} SqFt={`${new Intl.NumberFormat().format(propertyData.SqFt)} SqFt`} daysonMarket={propertyData.DaysOnMarket}
                />
                <Description numberOfBeds={propertyData.Beds} numberOfBath={propertyData.Baths} numberOfGarage={propertyData.Garages} city={propertyData.cityState} />
                <InquiryForm
                  handleSubmit={submitContact}
                  handleInput={inputedData}
                  isSubmitting={sendStatus}
                />
              </HouseDescription>
            </Content> : null}
        </ListingModal>
      </Container>
    </PropertyContext.Provider>
  )
}
