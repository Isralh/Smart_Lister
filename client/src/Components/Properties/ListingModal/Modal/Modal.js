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
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
export default function Modal ({ closeModal, handleShow }) {
  const data = useContext(listingContext)
  const { showModal, propertyInfo } = data
  const token = window.localStorage.getItem('token')
  const [image, setImage] = useState()
  const [length, setlength] = useState()
  const [index, setIndex] = useState(0)

  // function to handle pagination of our house pictures in the Modal
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

  const userInfo = () => {
    if (token !== null || undefined) {
      const user = jwtDecode(token)
      return user.email
    } else return 'user not logged in'
  }
  const handleFavorite = async () => {
    const propertyData = propertyInfo
    const user = userInfo()
    if (user !== 'user not logged in') {
      const postData = await axios.post('http://localhost:3001/api/post/favoriteProperties', [{ data: propertyData, userInfo: user }])
      try {
        if (postData) {
          console.log(postData.data.message)
          toast('Successfully added to favorties')
        }
      } catch (e) {
        console.log(e)
      }
    } else if (user === 'user not logged in') {
      return window.alert('Please login in to add to favorties!')
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
  }, [propertyInfo, showModal])

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
          </HouseDescription>
        </Content>
      </ListingModal>
    </Container>
  )
}
