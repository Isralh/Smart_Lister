import React, { useState } from 'react'
import {
  ButtonContainer, ExploreCommunities, CursorButton, CursorButtonChange,
  MobileViewContainer, Content, ImageContainer, Pagination
} from './Styling'
import { Philadelphia, Malvern, WestChester } from '../../Assets/Image/Communities/exports'

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

export default function MobileView () {
  const [index, setIndex] = useState(0)
  const handleTouch = () => {
    setIndex(index - 1)

    if (index <= 0) {
      setIndex(2)
    }
  }
  const handleUp = () => {
    setIndex(index + 1)

    if (index >= 2) {
      setIndex(0)
    }
  }
  const [hover, setHover] = useState(false)

  const handleMouseOver = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }
  return (
    <>
      <MobileViewContainer>
        <Content>
          <ImageContainer backgroundImage={community[index].image}>
            <p>{community[index].cityName}</p>
          </ImageContainer>
          <Pagination>
            <p onTouchStart={handleTouch}>{'<'}</p><p onTouchStart={handleUp}>{'>'}</p>
          </Pagination>
          <ButtonContainer>
            <ExploreCommunities onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>COMMUNITIES</ExploreCommunities>
            <span>{hover === false ? <CursorButton> {'>'} </CursorButton> : <CursorButtonChange> {'>'}</CursorButtonChange>}</span>
          </ButtonContainer>
        </Content>
      </MobileViewContainer>
    </>
  )
}
