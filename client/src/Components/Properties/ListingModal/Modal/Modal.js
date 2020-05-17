import React, { useContext, useState, useEffect } from 'react'
import { ListingModal, Content, Container, HouseDescription } from './ModalStyling'
import TopHeading from '../TopHeading/TopHeading'
import { listingContext } from '../../Listing/Listing'
import ModalImage from '../Image/ModalImage'
import HouseInfo from '../HouseInfo/HouseInfo'
import Description from '../Description/Description'
import Area from '../Area/Area'
import Calculator from '../Calculator/Calculator'
export default function Modal ({ closeModal, handleShow }) {
  const data = useContext(listingContext)
  const { showModal, houseInfo } = data
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

  // function to handle pagination of our house pictures in the Modal

  const handleLeftClick = () => {
    setIndex(index - 1)
    if (index <= 0) {
      setIndex(0)
    }
  }
  useEffect(() => {
    if (showModal) {
      setImage(houseInfo.image)
    }
    if (!showModal) {
      setIndex(0)
    }
    if (image !== undefined) {
      setlength(image.length)
    }
  }, [houseInfo, showModal, image])

  return (
    <Container show={handleShow}>
      <ListingModal>
        {/* we're using SimplBar to wrap our content for custom scroll bar */}
        <Content>
          <TopHeading close={closeModal} houseAddress={houseInfo.Address} />
          <HouseDescription>
            {image !== undefined ? <ModalImage backgroundImage={image[index]} secondPic={image} handleRight={handleRightClick} handleLeft={handleLeftClick} currentIndex={index + 1} indexLength={length} /> : null}
            <HouseInfo
              price={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(houseInfo.Price)}
              Beds={houseInfo.Beds} Baths={houseInfo.Baths} SqFt={houseInfo.SqFt} daysonMarket={houseInfo.DaysOnMarket}
            />
            <Description numberOfBeds={houseInfo.Beds} numberOfBath={houseInfo.Baths} numberOfGarage={houseInfo.Garages} city={houseInfo.City} />
            <Area
              areaFeel={houseInfo.AreaFeel} localTaxRate={houseInfo.LocalTaxRate} medianAge={houseInfo.MedianAge}
              medianFamilyIncome={houseInfo.MedianFamilyIncome} population={houseInfo.Population} unemploymentRate={houseInfo.UnemploymentRate}
            />
            <Calculator />
          </HouseDescription>
        </Content>
      </ListingModal>
    </Container>
  )
}
