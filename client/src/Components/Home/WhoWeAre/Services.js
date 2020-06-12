import React from 'react'
import {
  ServicesContainer, ContentWrapper, FontAwesomeContainer,
  Heading, Paragraph, FontAwesomeStyle
} from './WhoWeAreStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faHome, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'

const SearchProperty = () => {
  return (
    <ContentWrapper>
      <FontAwesomeContainer>
        <FontAwesomeIcon icon={faSearchPlus} style={FontAwesomeStyle} />
      </FontAwesomeContainer>
      <Heading>SEARCH PROPERTY</Heading>
      <Paragraph>Join thousands of daily users who rely on SmartLister to find
      thier next home. Search listings by price, city and contact property listers
      directly through SmartLister.
      </Paragraph>
    </ContentWrapper>
  )
}

const ListProperty = () => {
  return (
    <ContentWrapper>
      <FontAwesomeContainer>
        <FontAwesomeIcon icon={faHome} style={FontAwesomeStyle} />
      </FontAwesomeContainer>
      <Heading>LIST PROPERTY</Heading>
      <Paragraph>Looking to sell? SmartLister puts your house on top of
        the housing market. Sellers who list with us generally sell thier house
        15% higher than the market value.
      </Paragraph>
    </ContentWrapper>
  )
}
const BuyProperty = () => {
  return (
    <ContentWrapper>
      <FontAwesomeContainer>
        <FontAwesomeIcon icon={faFileInvoiceDollar} style={FontAwesomeStyle} />
      </FontAwesomeContainer>
      <Heading>BUY PROPERTY</Heading>
      <Paragraph>SmartLister connects you to property listers directly
      so you can own your dream house quickly without a hassel. Sign up and
      get started with SmartLister today.
      </Paragraph>
    </ContentWrapper>
  )
}
const Services = () => {
  return (
    <ServicesContainer>
      <ListProperty />
      <SearchProperty />
      <BuyProperty />
    </ServicesContainer>
  )
}

export default Services
