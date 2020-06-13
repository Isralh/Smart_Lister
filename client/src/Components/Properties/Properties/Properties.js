import React, { useState, useEffect, createContext } from 'react'
import { Container, ContentContainer, MapContainer, ListingContainer } from './PropertiesStyling'
import Listing from '../Listing/Listing'
import Filter from '../Filter/Filter'
import axios from 'axios'
import SearchContainer from '../Search/Search'
import Nav from '../../Home/Nav/Nav'
import Maps from '../Map/Maps'
export const propertiesContext = createContext()
export default function Properties () {
  const [loading, setLoading] = useState({
    status: true,
    margin: '20vh 0 0 5%'
  })
  const [cityName, setCityName] = useState('All')
  const [priceToggle, setPriceToggle] = useState()
  const [propertyList, setPropertyList] = useState([])
  useEffect(() => {
    const getProperties = async () => {
      const propertyData = await axios.get(`http://localhost:3001/api/get/property/city/${cityName}`)
      try {
        if (propertyData.status === 200) {
          const data = propertyData.data.data
          setPropertyList(data)
          setLoading(prev => { return { ...prev, status: false } })
        }
      } catch (e) {
        console.log(e)
      }
    }
    getProperties()
  }, [cityName])

  const handelCityToggle = (city) => {
    const cityInput = city
    setCityName(cityInput)
  }
  const handlePriceToggle = (priceOrder) => {
    const priceOrdering = priceOrder
    setPriceToggle(priceOrdering)
  }

  const priceComparison = propertyList.sort((a, b) => {
    return priceToggle === 'Ascending' ? a.Price - b.Price : b.Price - a.Price
  })

  const [inputSuggestion, setInputSuggestion] = useState([])
  const searchInput = async (e) => {
    const values = e.target.value
    if (!values) {
      const propertyData = await axios.get('http://localhost:3001/api/get/property/address/All')
      try {
        if (propertyData) {
          setPropertyList(propertyData.data.data)
        }
      } catch (e) {
        console.log(e)
      }
    }
    const expression = new RegExp(`^${values}`, 'i')
    if (propertyList) {
      const expressionAddress = (propertyList.map(property => property.address).sort().filter(text => expression.test(text)))
      setInputSuggestion(expressionAddress.join(', '))
    }
  }

  useEffect(() => {
    const propertyByCiy = async (req, res) => {
      const propertyData = await axios.get(`http://localhost:3001/api/get/property/address/${inputSuggestion}`)
      try {
        if (propertyData.status === 200) {
          setPropertyList(propertyData.data.data)
        }
      } catch (e) {
        console.log(e)
      }
    }
    propertyByCiy()
  }, [inputSuggestion])

  return (
    <propertiesContext.Provider value={propertyList}>
      <Container>
        <Nav />
        <ContentContainer>
          <MapContainer>
            <Maps />
          </MapContainer>
          <ListingContainer>
            <SearchContainer inputValue={searchInput} />
            <Filter getCity={handelCityToggle} orderByPrice={handlePriceToggle} />
            <Listing
              property={propertyList}
              loading={loading.status}
              loginStatus={loading.status}
              loadingStyle={loading.margin}
            />
          </ListingContainer>
        </ContentContainer>
      </Container>
    </propertiesContext.Provider>
  )
}
