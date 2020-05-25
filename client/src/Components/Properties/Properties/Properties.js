import React, { useContext, useState, useEffect, createContext } from 'react'
import { Container, ContentContainer, MapContainer, ListingContainer } from './PropertiesStyling'
import Listing from '../Listing/Listing'
import { DataContext } from '../../HouseData/Data'
import Select from '../Select/Select'
import axios from 'axios'
import GoogleMaps from '../Map/GoogleMaps'
import SearchContainer from '../Search/Search'
import Nav from '../../Home/Nav/Nav'
import NavContainer from '../../Home/Nav/NavContainer'

export const propertiesContext = createContext()
export default function Properties () {
  const houseData = useContext(DataContext)
  const [listOfHomes, setListOfHomes] = useState(houseData[0])
  const [cityName, setCityName] = useState('All')
  const [priceToggle, setPriceToggle] = useState()
  const [propertyList, setPropertyList] = useState([])

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

  useEffect(() => {
    const getProperties = async () => {
      const propertyData = await axios.get('http://localhost:3001/api/get/allProperties')
      try {
        console.log(propertyData.data)
        const data = propertyData.data
        setPropertyList(data)
      } catch (e) {
        console.log(e)
      }
    }
    getProperties()
  }, [])
  return (
    <propertiesContext.Provider value={propertyList}>
      <Container>
        <NavContainer />
        <ContentContainer>
          <MapContainer>
            <GoogleMaps />
          </MapContainer>
          <ListingContainer>
            <SearchContainer property={propertyList} />
            <Select getCity={handelCityToggle} orderByPrice={handlePriceToggle} />
            <Listing property={propertyList} />
          </ListingContainer>
        </ContentContainer>
      </Container>
    </propertiesContext.Provider>
  )
}
