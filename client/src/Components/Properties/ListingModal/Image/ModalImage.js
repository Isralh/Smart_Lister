import React from 'react'
import { Container, MoveLeft, MoveRight, PaginationContainer, FavoriteIcon, ImageCounter } from './ImageStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'react-tippy'
export default function ModalImage ({ backgroundImage, handleRight, handleLeft, currentIndex, indexLength }) {
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
          <Tooltip title='Add to favorite' trigger='mouseenter'> <FontAwesomeIcon icon={faHeart} style={{ color: 'white', height: '20px', width: '25px' }} /></Tooltip>
        </FavoriteIcon>
      </PaginationContainer>
    </>
  )
}
