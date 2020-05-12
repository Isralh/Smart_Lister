import React from 'react'
import { Container, Input } from './SearchStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Search () {
  return (
    <Container>
      <Input type='text' placeholder='City, State, Zip' />
      <div><FontAwesomeIcon icon={faSearch} color='white' /></div>
    </Container>
  )
}
