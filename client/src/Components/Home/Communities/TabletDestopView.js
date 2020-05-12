import React, { useState } from 'react'
import { Philadelphia, Malvern, WestChester } from '../../Assets/Image/Communities/exports'
import { TableDesktopContainer, CommunitiesDiv, SectionWrapper, CityName, ButtonWrapper, Communities, ButtonCursor, ButtonChange } from './Styling'
import { v4 as uuid } from 'uuid'

const community = [{
  cityName: 'Philadelphia',
  image: Philadelphia
}, {
  cityName: 'Mavlern',
  image: Malvern
}, {
  cityName: 'West Chester',
  image: WestChester
}]

export default function TabletDestopView () {
  const [hover, setHover] = useState(false)

  const handleMouseOver = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }
  return (
    <TableDesktopContainer>
      <SectionWrapper>
        {community.map(i =>
          <CommunitiesDiv key={uuid()} communityImage={i.image}>
            <CityName>{i.cityName}</CityName>
          </CommunitiesDiv>)}
      </SectionWrapper>
      <ButtonWrapper>
        <Communities onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>EXPLORE COMMUNITIES</Communities>
        <span>{hover === false ? <ButtonCursor> {'>'} </ButtonCursor> : <ButtonChange> {'>'}</ButtonChange>}</span>
      </ButtonWrapper>
    </TableDesktopContainer>
  )
}
