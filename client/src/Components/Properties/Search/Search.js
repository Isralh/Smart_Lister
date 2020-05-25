import React, { useState, useEffect } from 'react'
import { Container, Input, FontAwesome, Suggestion } from './SearchStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuid } from 'uuid'
const Search = ({ searchInput, results, keyid }) => {
  return (
    <Container>
      <Input type='text' placeholder='City, State, Zip' onChange={searchInput} />
      <FontAwesome><FontAwesomeIcon icon={faSearch} color='white' /></FontAwesome>
    </Container>
  )
}

const SearchContainer = ({ property }) => {
  const [data, setData] = useState()
  const [suggestionMatch, setSuggestionMatch] = useState('hi')
  const handleInput = (e) => {
    let suggestion = data.filter(list => {
      const regex = new RegExp(`${e.target.value}`, 'gi')
      return list.address.match(regex)
    })
    if (e.target.value === 0) {
      suggestion = []
    }
    setSuggestionMatch(suggestion)
  }

  useEffect(() => {
    setData(property)
  }, [property, suggestionMatch])
  return (
    <Search searchInput={handleInput} />
  )
}

export default SearchContainer
