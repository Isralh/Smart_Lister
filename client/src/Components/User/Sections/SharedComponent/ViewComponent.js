import React, { useEffect } from 'react'
import { Container, ImageContainer, ListingWrapper, Price, Address, City, ContentWrapper, Updates, TopHeading, LayOutWrapper, ContentContainer, SectionWrapper } from './Styling'
import Nav from '../../../Home/Nav/Nav'
import { v4 as uuid } from 'uuid'
import Layout from '../Section/Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
const SharedComponent = ({ handleDelete, heading, propertyInfo = [] }) => {
  const index = 0
  function initialImage (propertyInfo, key, index) {
    if (propertyInfo.length > 0) {
      const images = propertyInfo[key].images
      const allImages = JSON.parse(images)
      return allImages[0][index]
    }
  }
  useEffect(() => {
    console.log(initialImage(propertyInfo, 0, index))
  }, [])
  return (
    <Container>
      <Nav />
      <LayOutWrapper>
        <Layout />
      </LayOutWrapper>
      <ContentWrapper>
        <TopHeading>
          <h1>{heading}</h1>
        </TopHeading>
        <SectionWrapper>
          {propertyInfo.length > 0 ? <>
            {propertyInfo.map((property, i) =>
              <ContentContainer key={uuid()}>
                <ImageContainer imageUrl={initialImage(propertyInfo, i, index)}>
                  <ListingWrapper>
                    <Price>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(property.Price)}</Price>
                    <Address>{property.address}</Address>
                    <City>{property.cityState}</City>
                  </ListingWrapper>
                </ImageContainer>
              </ContentContainer>)}
          </> : null}
        </SectionWrapper>
      </ContentWrapper>
    </Container>
  )
}

export default SharedComponent
// <div onClick={handleDelete}>
// <p>DELETE</p>
// </div>
// <Updates>
// <FontAwesomeIcon icon={faTimesCircle} style={{ color: '#19334d', marginTop: '15px', fontSize: '20px' }} />
// </Updates>