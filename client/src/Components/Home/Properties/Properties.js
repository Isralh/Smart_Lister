import React, { useState, useEffect } from 'react'
import {
  Container, SelectedProperties, PropertiesWrapper, Price, OurProperty,
  Address, CityStateZip, RightArrow, LeftArrow, ContentWrapper, TopHeading,
  CursorButton, CursorButtonChange, ButtonContainer
} from './PropertiesStyling'
import Pagination from '../Testimonials/Pagination'
import axios from 'axios'
import Modal from '../../Properties/ListingModal/Modal/Modal'
import { Link } from 'react-router-dom'
const Properties = () => {
  const [featuredListing, setFeaturedListing] = useState()
  const [image, setImage] = useState()
  const [propertyPagination, setPropertyPagination] = useState({
    firstColor: true,
    secondColor: false,
    thirdColor: false,
    index: 0
  })

  const featured = ['145 Rockhouse Run', '1346 Columbia Avenue', '1051 Fruitville Pike']
  const getProperties = async () => {
    const properties = await axios.get(`http://localhost:3001/api/get/property/address/${featured[propertyPagination.index]}`)
    try {
      if (properties) {
        setFeaturedListing(properties.data.data)
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getProperties()
  }, [propertyPagination.index])

  useEffect(() => {
    if (featuredListing !== undefined) {
      const images = featuredListing[0].images
      const allImages = JSON.parse(images)
      setImage(allImages[0][5])
    }
  }, [featuredListing])

  const showFirstProperty = () => {
    setPropertyPagination({ firstColor: true, secondColor: false, thirdColor: false, index: 0 })
  }
  const showSecondProperty = () => {
    setPropertyPagination({ firstColor: false, secondColor: true, thirdColor: false, index: 1 })
  }
  const showThirdProperty = () => {
    setPropertyPagination({ firstColor: false, secondColor: false, thirdColor: true, index: 2 })
  }
  const handleRight = () => {
    setPropertyPagination(prev => { return { ...prev, index: propertyPagination.index + 1 } })
  }
  const handleLeft = () => {
    setPropertyPagination(prev => { return { ...prev, index: propertyPagination.index - 1 } })
  }

  // state to handle Modal
  const [modalStatus, setModalStatus] = useState(false)
  const [modalProperty, setModalProperty] = useState()
  const handleModal = () => {
    setModalStatus(true)
    setModalProperty(featuredListing[0])
  }

  const handleCloseModal = () => {
    setModalStatus(false)
  }

  // state to toggle view property button color
  const [hover, setHover] = useState(false)

  const handleMouseOver = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }
  return (
    <>
      {featuredListing !== undefined
        ? <Container>
          <ContentWrapper>
            <TopHeading>
              <h1>Featured Listings</h1>
            </TopHeading>
            <PropertiesWrapper imageurl={image}>
              {propertyPagination.index < 2 ? <RightArrow> <h1 onClick={handleRight}>{'>'}</h1> </RightArrow> : null}
              {propertyPagination.index > 0 ? <LeftArrow> <h1 onClick={handleLeft}>{'<'}</h1></LeftArrow> : null}
              <SelectedProperties onClick={handleModal}>
                <Price>
                  <h1>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(featuredListing[0].Price)}</h1>
                </Price>
                <Address>
                  <p>{featuredListing[0].address}</p>
                </Address>
                <CityStateZip>
                  <span><p>{featuredListing[0].cityState}</p><p>{featuredListing[0].zipcode}</p></span>
                </CityStateZip>
              </SelectedProperties>
            </PropertiesWrapper>
            <Pagination
              FirstCircle={showFirstProperty}
              secondCircle={showSecondProperty}
              thirdCircle={showThirdProperty}
              firstCircleColor={propertyPagination.firstColor}
              secondCircleColor={propertyPagination.secondColor}
              thidCircleColor={propertyPagination.thirdColor}
            />
            <ButtonContainer>
              <Link to='/properties'> <OurProperty onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>VIEW PROPERTIES</OurProperty></Link>
              <span>{hover === false ? <CursorButton> {'>'} </CursorButton> : <CursorButtonChange> {'>'}</CursorButtonChange>}</span>
            </ButtonContainer>
          </ContentWrapper>
        </Container>
        : null}
      <Modal
        handleShow={modalStatus}
        closeModal={handleCloseModal}
        propertyData={modalProperty}
      />
    </>
  )
}
export default Properties
