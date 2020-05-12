import React from 'react'
import { Container, Heading, Description, FirstColumn, SecondColumn } from './AreaStyling'
export default function Area ({ areaFeel, localTaxRate, medianAge, medianFamilyIncome, population, unemploymentRate }) {
  return (
    <Container>
      <Heading>
        <p>Area</p>
      </Heading>
      <Description>
        <FirstColumn>
          <h1>Area Feel</h1>
          <p>{areaFeel}</p>
          <h1>Lotal Tax Rate</h1>
          <p>{`${localTaxRate} %`}</p>
          <h1>Median Age</h1>
          <p>{medianAge}</p>
        </FirstColumn>
        <SecondColumn>
          <h1>Median Family Income</h1>
          <p>{medianFamilyIncome}</p>
          <h1>Population</h1>
          <p>{population}</p>
          <h1>Unemployment Rate</h1>
          <p>{`${unemploymentRate} %`}</p>
        </SecondColumn>
      </Description>
    </Container>
  )
}
