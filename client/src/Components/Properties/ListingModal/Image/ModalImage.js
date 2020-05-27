import React from 'react'
import { Container, MoveLeft, MoveRight, PaginationContainer, FavoriteIcon, ImageCounter, FontAwesomeStyle } from './ImageStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import 'react-tippy/dist/tippy.css'
import Inquiry from '../Inquiry/InquiryForm'
export default function ModalImage ({ backgroundImage, handleRight, handleLeft, currentIndex, indexLength, addToFavorites }) {
  return (
    <>
      <Container background={backgroundImage} />
      <PaginationContainer>
        <div>
          <MoveLeft onClick={handleLeft}>{'<'}</MoveLeft>
          <MoveRight onClick={handleRight}>{'>'}</MoveRight>
        </div>
        <ImageCounter>
          <p>{currentIndex} / {indexLength}</p>
        </ImageCounter>
        <FavoriteIcon>
          <FontAwesomeIcon icon={faHeart} style={FontAwesomeStyle} onClick={addToFavorites} />
        </FavoriteIcon>
      </PaginationContainer>
    </>
  )
}
