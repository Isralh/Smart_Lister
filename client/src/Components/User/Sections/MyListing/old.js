import React from 'react'
import { Container, ImageContainer, ListingWrapper, Price, Address, City, ContentWrapper, Updates, TopHeading, LayOutWrapper } from './MyListingStyling'
import Nav from '../../../Home/Nav/Nav'
import Layout from '../Section/Layout/Layout'
const MyListing = ({ propertiesImage, price, address, cityState, handleDelete, update, heading }) => {
  return (
    <Container>
      <Nav />
      <LayOutWrapper>
        <Layout />
      </LayOutWrapper>
      {propertiesImage !== undefined
        ? <ContentWrapper>
          <TopHeading>
            <h1>{heading}</h1>
          </TopHeading>
          <Updates>
            <div>
              <p>{update}</p>
            </div>
            <div onClick={handleDelete}>
              <p>DELETE</p>
            </div>
          </Updates>
          <ImageContainer imageUrl={propertiesImage[0]}>
            <ListingWrapper>
              <Price>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price)}</Price>
              <Address>{address}</Address>
              <City>{cityState}</City>
            </ListingWrapper>
          </ImageContainer>
        </ContentWrapper> : null}
    </Container>
  )
}

export default MyListing
// <InfoContainer>
// <FirstColumn>
//   <p>Lot Size:<span>{` ${new Intl.NumberFormat().format(sqFt)} SqFt`}</span></p>
//   <p>Garages:<span>{` ${garages} Garages`}</span></p>
//   <p>Days on Market:<span>{` ${days}`}</span></p>
// </FirstColumn>
// <SecondColumn>
//   <p>Tpye:<span>{` ${residential}`}</span></p>
//   <p>Year Built:<span>2002</span></p>
//   <p>sss<span>sss</span></p>
// </SecondColumn>
// </InfoContainer>
