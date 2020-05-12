import React, { useState, useRef, useEffect } from 'react'
import { Container, Heading, Price, City, PriceContainer, CityContainer } from './SelectStyling'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuid } from 'uuid'
export default function Select ({ getCity, orderByPrice }) {
  // state to hold if the display is false/not selected or true/selected.... if false don't show block if true the opposite
  const [showPrice, setShowPrice] = useState(false)
  const [showCity, setShowCity] = useState(false)

  // our list of cities and iterate through them to show the cities in an <li></li> format for the user to choose from
  const cityName = ['All', 'King of Prussia', 'Malvern', 'Philadelphia', 'West Chester']
  const priceSelector = ['Ascending', 'Descending']

  // On price button click show the div with the price dropdown list
  const handlePrice = () => {
    setShowPrice(!showPrice)
  }

  // On city button click show the div with the cities dropdown list
  const handleCity = () => {
    setShowCity(!showCity)
  }

  // Reference to our price and city div elements to toggle open/close when click outside the div happens
  const priceRef = useRef(null)
  const cityRef = useRef(null)

  // click outside the referenced elements to close those elements
  const handlClickOutisde = (e) => {
    if (priceRef.current && !priceRef.current.contains(e.target)) {
      setShowPrice(false)
    }
    if (cityRef.current && !cityRef.current.contains(e.target)) {
      setShowCity(false)
    }
  }

  // useEffect to handle our click outside function
  useEffect(() => {
    if (showCity || showPrice) {
      document.addEventListener('click', handlClickOutisde)
      return () => document.removeEventListener('click', handlClickOutisde)
    }
  }, [showPrice, showCity])

  return (
    <Container>
      <Heading>
        <p>FILTER: </p>
      </Heading>
      <Price>
        <button onClick={handlePrice}>PRICE <FontAwesomeIcon icon={faCaretDown} color='white' /></button>
        <PriceContainer display={showPrice} ref={priceRef}>
          {priceSelector.map(priceOrder =>
            <li key={uuid()} onClick={orderByPrice.bind(this, priceOrder)}>{priceOrder}</li>)}
        </PriceContainer>
      </Price>
      <City>
        <button onClick={handleCity}>CITY <FontAwesomeIcon icon={faCaretDown} color='white' /></button>
        <CityContainer display={showCity} ref={cityRef}>
          {cityName.map(city =>
            <li key={uuid()} onClick={getCity.bind(this, city)}>{city}</li>)}
        </CityContainer>
      </City>
    </Container>
  )
}
