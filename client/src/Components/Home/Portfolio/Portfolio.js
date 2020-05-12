import React, { useState } from 'react'
import {
  Container, PortfolioWrapper, TopHeading, OurProperty, CursorButton, MiddleWord, BottomWord, CardsWrapper,
  CursorButtonChange, ButtonContainer, Card
} from './PortfolioStyling'

export default function Portfolio () {
  const [hover, setHover] = useState(false)

  const handleMouseOver = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }
  return (
    <Container>
      <PortfolioWrapper>
        <TopHeading>
          <h1>What Makes Us Stand Out</h1>
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
            <BottomWord>total assets</BottomWord>
          </Card>
        </CardsWrapper>
        <ButtonContainer>
          <OurProperty onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>OUR PROPERTIES</OurProperty>
          <span>{hover === false ? <CursorButton> {'>'} </CursorButton> : <CursorButtonChange> {'>'}</CursorButtonChange>}</span>
        </ButtonContainer>
      </PortfolioWrapper>
    </Container>
  )
}
