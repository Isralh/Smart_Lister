import React from 'react'
import { HouseInfoContainer, Description } from './HouseInfoStyling'
export default function HouseInfo ({ price, Beds, Baths, SqFt, daysonMarket }) {
  return (
    <HouseInfoContainer>
      <h1>{price}</h1>
      <Description>
        <p>{`${Beds} Beds`}</p>
        <p>{`${Baths} Baths`}</p>
        <p>{SqFt}</p>
      </Description>
      <div>
        <p>{`${daysonMarket} days on Market`}</p>
      </div>
    </HouseInfoContainer>
  )
}
