import React from 'react'
import {
  Container, PortfolioWrapper, TopHeading, OurProperty, CursorButton,
  MiddleWord, BottomWord, CardsWrapper, CursorButtonChange, ButtonContainer, Card
} from './PortfolioStyling'
import { Link } from 'react-router-dom'
export default function Portfolio ({ handleMouseOver, handleMouseLeave, hover }) {
  return (
    <Container>
      <PortfolioWrapper>
        <TopHeading>
          <h1>Why List With Us</h1>
        </TopHeading>
        <CardsWrapper>
          <Card>
            <h1>20 +</h1>
            <MiddleWord>YEARS</MiddleWord>
            <BottomWord>experience</BottomWord>
          </Card>
          <Card>
            <h1>2,850</h1>
            <MiddleWord>HOMES</MiddleWord>
            <BottomWord>sold</BottomWord>
          </Card>
          <Card>
            <h1>$350</h1>
            <MiddleWord>MILLION</MiddleWord>
            <BottomWord>in sales</BottomWord>
          </Card>
          <Card>
            <h1>$10</h1>
            <MiddleWord>MILLION</MiddleWord>
            <BottomWord>current listings</BottomWord>
          </Card>
        </CardsWrapper>
        <ButtonContainer>
          <Link to='/properties'> <OurProperty onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>VIEW PROPERTIES</OurProperty></Link>
          <span>{hover === false ? <CursorButton> {'>'} </CursorButton> : <CursorButtonChange> {'>'}</CursorButtonChange>}</span>
        </ButtonContainer>
      </PortfolioWrapper>
    </Container>
  )
}
