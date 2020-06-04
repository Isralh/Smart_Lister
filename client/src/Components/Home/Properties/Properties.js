import React, { useState, useEffect } from 'react'
import {
  Container, SelectedProperties, PropertiesWrapper, Price,
  Address, CityStateZip, RightArrow, LeftArrow, ContentWrapper, TopHeading
} from './PropertiesStyling'
import axios from 'axios'

const Properties = () => {
  const [index, setIndex] = useState(0)

  const handleRight = () => {
    setIndex(prev => prev + 1)
  }
  const handleLeft = () => {
    setIndex(prev => prev - 1)
  }

  const [featuredListing, setFeaturedListing] = useState()
  const [image, setImage] = useState()

  const featured = ['1346 Columbia Avenue', '1051 Fruitville Pike', '145 Rockhouse Run']
  const getProperties = async () => {
    const properties = await axios.get(`http://localhost:3001/api/get/property/address/${featured[index]}`)
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
  }, [index])

  useEffect(() => {
    if (featuredListing !== undefined) {
      const images = featuredListing[0].images
      const allImages = JSON.parse(images)
      setImage(allImages[0][0])
    }
  }, [featuredListing])
  return (
    <>
      {featuredListing !== undefined
        ? <Container>
          <ContentWrapper>
            <TopHeading>
              <h1>Featured Listings</h1>
            </TopHeading>
            <PropertiesWrapper imageurl={image}>
              <SelectedProperties>
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
              {index < 2 ? <RightArrow> <h1 onClick={handleRight}>{'>'}</h1> </RightArrow> : null}
              {index > 0 ? <LeftArrow> <h1 onClick={handleLeft}>{'<'}</h1></LeftArrow> : null}
            </PropertiesWrapper>
          </ContentWrapper>
        </Container> 
        : null}
    </>
  )
}
export default Properties
