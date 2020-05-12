import React, { useContext, useState, useEffect, createContext } from 'react'
import { Container, ContentContainer, MapContainer, ListingContainer } from './PropertiesStyling'
import Nav from '../../Home/Nav/Nav'
import Search from '../Search/Search'
import Listing from '../Listing/Listing'
import { DataContext } from '../../HouseData/Data'
import Select from '../Select/Select'
import Maps from '../Map/Maps'
export const propertiesContext = createContext()
export default function Properties () {
  const houseData = useContext(DataContext)
  const [listOfHomes, setListOfHomes] = useState(houseData[0])
  const [cityName, setCityName] = useState('All')
  const [priceToggle, setPriceToggle] = useState()
  const handelCityToggle = (city) => {
    const cityInput = city
    setCityName(cityInput)
  }
  const handlePriceToggle = (priceOrder) => {
    const priceOrdering = priceOrder
    setPriceToggle(priceOrdering)
  }
  const houseResult = houseData[0].filter(house => {
    return cityName === 'All' ? house : house.City === `${cityName}, PA`
  })

  const priceComparison = houseResult.sort((a, b) => {
    return priceToggle === 'Ascending' ? a.Price - b.Price : b.Price - a.Price
  })
  useEffect(() => {
    setListOfHomes(houseResult)
  }, [cityName, priceToggle])
  console.log(priceToggle)
  return (
    <propertiesContext.Provider value={listOfHomes}>
      <Container>
        <Nav />
        <ContentContainer>
          <MapContainer>
            <Maps />
          </MapContainer>
          <ListingContainer>
            <Search />
            <Select getCity={handelCityToggle} orderByPrice={handlePriceToggle} />
            <Listing house={listOfHomes} />
          </ListingContainer>
        </ContentContainer>
      </Container>
    </propertiesContext.Provider>
  )
}
