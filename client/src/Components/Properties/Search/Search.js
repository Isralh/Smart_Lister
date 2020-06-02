import React, { useState, useEffect } from 'react'
import { Container, Input, FontAwesome, Suggestion } from './SearchStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuid } from 'uuid'
const Search = ({ searchInput, results, keyid }) => {
  return (
    <Container>
      <Input type='text' placeholder='Adress, City, State' onChange={searchInput} />
      <FontAwesome><FontAwesomeIcon icon={faSearch} color='white' /></FontAwesome>
    </Container>
  )
}

const SearchContainer = ({ inputValue }) => {
  // const [items, setItems] = useState({
  //   item: ['David', 'Damien', 'Sara', 'Jane']
  // })
  // const [suggestion, setSuggestion] = useState([])

  // const inputValue = (e) => {
  //   const empty = []
  //   const values = e.target.value
  //   if (values.length === 0) {
  //     setSuggestion(empty)
  //   } else {
  //     const regex = new RegExp(`^${values}`, 'i')
  //     const suggestions = items.item.sort().filter(v => regex.test(v))
  //     setSuggestion([suggestions])
  //   }
  // }
  // useEffect(() => {
  //   if (suggestion.length === 0) {
  //     console.log(null)
  //   } else {
  //     console.log(suggestion.map(s => s))
  //   }
  // }, [suggestion, items])
  return (
    <Search searchInput={inputValue} />
  )
}

export default SearchContainer
