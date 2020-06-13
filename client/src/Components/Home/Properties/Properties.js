import React, { useState, useEffect } from 'react'
import {
  Container, SelectedProperties, PropertiesWrapper, Price, LoadingWrapper,
  Address, CityStateZip, RightArrow, LeftArrow, ContentWrapper, TopHeading
} from './PropertiesStyling'
import Pagination from '../Testimonials/Pagination'
import axios from 'axios'
import Modal from '../../Properties/ListingModal/Modal/Modal'
import Buttons from './Buttons'
import Loading from '../../Loading/Loading'
const Properties = () => {
  const [loading, setLoading] = useState({
    status: true,
    margins: '20vh 0 0 0%'
  })
  const [featuredListing, setFeaturedListing] = useState()
  const [image, setImage] = useState()
  const [propertyPagination, setPropertyPagination] = useState({
    firstColor: true,
    secondColor: false,
    thirdColor: false
  })
  const [index, setIndex] = useState(0)
  const featured = ['145 Rockhouse Run', '821 Lititz Pike', '265 Summit Road']
  const getProperties = async () => {
    const properties = await axios.get(`http://localhost:3001/api/get/property/address/${featured[index]}`)
    try {
      if (properties.status === 200) {
        setFeaturedListing(properties.data.data)
        setLoading(prev => { return { ...prev, status: false } })
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getProperties()
  }, [index])

  useEffect(() => {
    if (featuredListing !== undefined) {
      const images = featuredListing[0].images
      const allImages = JSON.parse(images)
      setImage(allImages[0][1])
    }
  }, [featuredListing])

  const showFirstProperty = () => {
    setIndex(0)
    setPropertyPagination({ firstColor: true, secondColor: false, thirdColor: false })
  }
  const showSecondProperty = () => {
    setIndex(1)
    setPropertyPagination({ firstColor: false, secondColor: true, thirdColor: false })
  }
  const showThirdProperty = () => {
    setIndex(2)
    setPropertyPagination({ firstColor: false, secondColor: false, thirdColor: true })
  }
  const handleRight = () => {
    setIndex(index + 1)
  }
  const handleLeft = () => {
    setIndex(index - 1)
  }

  useEffect(() => {
    const changeColor = () => {
      if (index === 0) {
        setPropertyPagination({ firstColor: true, secondColor: false, thirdColor: false })
      }
      if (index === 1) {
        setPropertyPagination({ firstColor: false, secondColor: true, thirdColor: false })
      }
      if (index === 2) {
        setPropertyPagination({ firstColor: false, secondColor: false, thirdColor: true })
      }
    }
    changeColor()
  }, [index])

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

  return (
    <>
      <Container>
        <ContentWrapper>
          <TopHeading>
            <h1>Featured Listings</h1>
          </TopHeading>
          {loading.status
            ? <LoadingWrapper>
              <Loading loadingState={loading.status} loadingMargin={loading.margins} />
            </LoadingWrapper>
            : <PropertiesWrapper imageurl={image}>
              {index < 2 ? <RightArrow> <h1 onClick={handleRight}>{'>'}</h1> </RightArrow> : null}
              {index > 0 ? <LeftArrow> <h1 onClick={handleLeft}>{'<'}</h1></LeftArrow> : null}
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
            </PropertiesWrapper>}
          <Pagination
            FirstCircle={showFirstProperty}
            secondCircle={showSecondProperty}
            thirdCircle={showThirdProperty}
            firstCircleColor={propertyPagination.firstColor}
            secondCircleColor={propertyPagination.secondColor}
            thidCircleColor={propertyPagination.thirdColor}
          />
          <Buttons />
        </ContentWrapper>
      </Container>
      <Modal
        handleShow={modalStatus}
        closeModal={handleCloseModal}
        propertyData={modalProperty}
      />
    </>
  )
}
export default Properties
