import React from 'react'
import { Container, PortfolioWrapper, TopHeading, CardsWrapper } from './PortfolioStyling'
import Services from '../WhoWeAre/Services'
export default function Portfolio ({ handleMouseOver, handleMouseLeave, hover }) {
  return (
    <Container>
      <PortfolioWrapper>
        <TopHeading>
          <h1>How It Works</h1>
        </TopHeading>
        <CardsWrapper>
          <Services />
        </CardsWrapper>
      </PortfolioWrapper>
    </Container>
  )
}

