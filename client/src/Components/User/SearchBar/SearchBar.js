import React from 'react'
import { Container, Input, FontAwesomeContainer, Wrapper, FontAwesomeStyle } from './SearchBarStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function SearchBar () {
  return (
    <Container>
      <Wrapper>
        <Input type='text' placeholder='City, State, Zip' />
        <FontAwesomeContainer><FontAwesomeIcon icon={faSearch} style={FontAwesomeStyle} /> </FontAwesomeContainer>
      </Wrapper>
    </Container>
  )
}
