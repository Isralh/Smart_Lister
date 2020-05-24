import React, { useContext, useState, useEffect } from 'react'
import { ListingModal, Content, Container, HouseDescription } from './ModalStyling'
import TopHeading from '../TopHeading/TopHeading'
import { listingContext } from '../../Listing/Listing'
import ModalImage from '../Image/ModalImage'
import HouseInfo from '../HouseInfo/HouseInfo'
import Description from '../Description/Description'
import Calculator from '../Calculator/Calculator'
export default function Modal ({ closeModal, handleShow }) {
  const data = useContext(listingContext)
  const { showModal, houseInfo } = data
  const [image, setImage] = useState()
  const [length, setlength] = useState()
  const [index, setIndex] = useState(0)

  // const allimage = JSON.parse(images)
  // // console.log(allimage)
  // function to handle pagination of our house pictures in the Modal
  const handleRightClick = () => {
    setIndex(index + 1)
    if (index >= length - 1) {
      setIndex(0)
    }
  }

  // function to handle pagination of our house pictures in the Modal
  // function initialImage (house, index) {
  //   const images = house.images
  //   const allImages = JSON.parse(images)
  //   return allImages[0][index]
  // }
  const handleLeftClick = () => {
    setIndex(index - 1)
    if (index <= 0) {
      setIndex(0)
    }
  }
  // if (showModal) {
  //   const images = houseInfo.images
  //   const allImages = JSON.parse(images)
  //   console.log(allImages[0][0])
  // }
  useEffect(() => {
    if (showModal) {
      const images = houseInfo.images
      const allImages = JSON.parse(images)
      setImage(allImages[0])
      setlength(allImages[0].length)
    }
    if (!showModal) {
      setIndex(0)
    }
  }, [houseInfo, showModal])

  return (
    <Container show={handleShow}>
      <ListingModal>
        {/* we're using SimplBar to wrap our content for custom scroll bar */}
        <Content>
          <TopHeading close={closeModal} houseAddress={houseInfo.address} />
          <HouseDescription>
            {image !== undefined ? <ModalImage backgroundImage={image[index]} secondPic={image} handleRight={handleRightClick} handleLeft={handleLeftClick} currentIndex={index + 1} indexLength={length} /> : null}
            <HouseInfo
              price={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(houseInfo.Price)}
              Beds={houseInfo.Beds} Baths={houseInfo.Baths} SqFt={`${new Intl.NumberFormat().format(houseInfo.SqFt)} SqFt`} daysonMarket={houseInfo.DaysOnMarket}
            />
            <Description numberOfBeds={houseInfo.Beds} numberOfBath={houseInfo.Baths} numberOfGarage={houseInfo.Garages} city={houseInfo.cityState} />
            <Calculator />
          </HouseDescription>
        </Content>
      </ListingModal>
    </Container>
  )
}
