import React from 'react'
import { Container, Input } from './SearchStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Search () {
  const searchInput = (e) => {
    console.log(e.target.value)
  }
  return (
    <Container>
      <Input type='text' placeholder='City, State, Zip' onChange={searchInput}/>
      <div><FontAwesomeIcon icon={faSearch} color='white' /></div>
    </Container>
  )
}
