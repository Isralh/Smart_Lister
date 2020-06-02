import React, { createContext } from 'react'
import { ListingModal, Content, Container, HouseDescription } from './ModalStyling'
import TopHeading from '../TopHeading/TopHeading'
import ModalImage from '../Image/ModalImage'
import HouseInfo from '../HouseInfo/HouseInfo'
import Description from '../Description/Description'
import Calculator from '../Calculator/Calculator'
import InquiryForm from '../Inquiry/InquiryForm'
export const PropertyContext = createContext()
export default function Modal ({
  closeModal, handleShow, address, image, index, handleNext,
  handlePrev, length, handleFavorite, beds, baths, sqFt, daysonMarket, price, garages,
  citState, handleContact, contactInputs, property
}) {
  return (
    <PropertyContext.Provider value={property}>
      <Container show={handleShow}>
        <ListingModal>
          {property !== undefined
            ? <Content>
              <TopHeading close={closeModal} houseAddress={address} />
              <HouseDescription>
                {image !== undefined ? <ModalImage
                  backgroundImage={image[index]}
                  secondPic={image}
                  handleRight={handleNext}
                  handleLeft={handlePrev}
                  currentIndex={index + 1}
                  indexLength={length}
                  addToFavorites={handleFavorite}
                /> : null}
                <HouseInfo
                  price={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price)}
                  Beds={beds} Baths={baths} SqFt={`${new Intl.NumberFormat().format(sqFt)} SqFt`} daysonMarket={daysonMarket}
                />
                <Description numberOfBeds={beds} numberOfBath={baths} numberOfGarage={garages} city={citState} />
                <InquiryForm handleSubmit={handleContact} handleInput={contactInputs} />
              </HouseDescription>
              </Content> : null}
        </ListingModal>
      </Container>
    </PropertyContext.Provider>
  )
}
                // <Calculator priceHolder={price} />
