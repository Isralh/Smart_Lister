import React, { useState, useEffect } from 'react'
import { Container, Input, FontAwesome, Suggestion } from './SearchStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuid } from 'uuid'
const Search = ({ searchInput, results, keyid }) => {
  return (
    <Container>
      <Input type='text' placeholder='Search by address...' onChange={searchInput} />
      <FontAwesome><FontAwesomeIcon icon={faSearch} color='white' /></FontAwesome>
    </Container>
  )
}

const SearchContainer = ({ inputValue }) => {
  return (
    <Search searchInput={inputValue} />
  )
}

export default SearchContainer
