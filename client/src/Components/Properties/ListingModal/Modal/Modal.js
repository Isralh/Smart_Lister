import React, { useContext, useState, useEffect } from 'react'
import { ListingModal, Content, Container, HouseDescription } from './ModalStyling'
import TopHeading from '../TopHeading/TopHeading'
import { listingContext } from '../../Listing/Listing'
import ModalImage from '../Image/ModalImage'
import HouseInfo from '../HouseInfo/HouseInfo'
import Description from '../Description/Description'
import Calculator from '../Calculator/Calculator'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import InquiryForm from '../Inquiry/InquiryForm'
export default function Modal ({ closeModal, handleShow }) {
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
  const handleRightClick = () => {
    setIndex(index + 1)
    if (index >= length - 1) {
      setIndex(0)
    }
  }
  const handleLeftClick = () => {
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
  // function to handle posting user's favorite property to the database
  const handleFavorite = async () => {
    const user = userInfo()
    if (user !== 'user not logged in') {
      const postData = await axios.post('http://localhost:3001/api/post/favoriteProperties', [{ data: propertyInfo, userInfo: user }])
      try {
        if (postData) {
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
  const contactInputs = (e) => {
    e.persist()
    const inputValue = e.target.value
    setInputInfo(prev => { return { ...prev, [e.target.name]: inputValue } })
  }

  // function to handle user's contact input submission, we'll send it to the db and from there use NodeMailer
  // to send the email to the property lister
  const handleContact = async (e) => {
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
    console.log(inputInfo)
  }, [propertyInfo, showModal, inputInfo])

  return (
    <Container show={handleShow}>
      <ListingModal>
        <Content>
          <TopHeading close={closeModal} houseAddress={propertyInfo.address} />
          <HouseDescription>
            {image !== undefined ? <ModalImage
              backgroundImage={image[index]}
              secondPic={image}
              handleRight={handleRightClick}
              handleLeft={handleLeftClick}
              currentIndex={index + 1}
              indexLength={length}
              addToFavorites={handleFavorite}
                                   /> : null}
            <HouseInfo
              price={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(propertyInfo.Price)}
              Beds={propertyInfo.Beds} Baths={propertyInfo.Baths} SqFt={`${new Intl.NumberFormat().format(propertyInfo.SqFt)} SqFt`} daysonMarket={propertyInfo.DaysOnMarket}
            />
            <Description numberOfBeds={propertyInfo.Beds} numberOfBath={propertyInfo.Baths} numberOfGarage={propertyInfo.Garages} city={propertyInfo.cityState} />
            <Calculator />
            <InquiryForm handleSubmit={handleContact} handleInput={contactInputs} />
          </HouseDescription>
        </Content>
      </ListingModal>
    </Container>
  )
}
