import React, { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../HouseData/Data'
import {
  Container, SelectedProperties, PropertiesWrapper, Price,
  Address, CityStateZip, RightArrow, LeftArrow, ContentWrapper, TopHeading
} from './PropertiesStyling'
import axios from 'axios'

const Properties = () => {
  const [index, setIndex] = useState(0)

  const handleRight = () => {
    setIndex(prev => prev + 1)
  }
  const handleLeft = () => {
    setIndex(prev => prev - 1)
  }

  const [housedata, sethouseData] = useState([])
  const [imageKey, setImageKey] = useState([])
  const [selectedHouse, setSelectedHouse] = useState({
    house: [],
    image: ''
  })
  const apiUrl = 'http://localhost:3001/api/allProperties'

  const getProperties = async () => {
    const fetchedData = await axios.get(`${apiUrl}`)
    try {
      if (fetchedData.status === 200) {
        const houseInfo = fetchedData.data.data
        const images = fetchedData.data.imageKey
        sethouseData(houseInfo)
        setImageKey(images)
        console.log(fetchedData.data.message)
      } else console.log(fetchedData.data.message)
    } catch (e) {
      console.log(e)
    }
  }
  console.log(housedata[index])
  useEffect(() => {
    getProperties()
  }, [])

  const [propertiesData] = useContext(DataContext)
  const results = propertiesData.filter(r => {
    return ['1346 Columbia Avenue', '1051 Fruitville Pike', '145 Rockhouse Run'].indexOf(r.Address) !== -1
  })

  return (
    <Container>
      <ContentWrapper>
        <TopHeading>
          <h1>Featured Listings</h1>
        </TopHeading>
        <PropertiesWrapper imageurl={results[index].image[index]}>
          <SelectedProperties>
            <Price>
              <h1>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(results[index].Price)}</h1>
            </Price>
            <Address>
              <p>{results[index].Address}</p>
            </Address>
            <CityStateZip>
              <span><p>{results[index].City}</p><p>{results[index].Zip}</p></span>
            </CityStateZip>
          </SelectedProperties>
          {index < 2 ? <RightArrow> <h1 onClick={handleRight}>{'>'}</h1> </RightArrow> : null}
          {index > 0 ? <LeftArrow> <h1 onClick={handleLeft}>{'<'}</h1></LeftArrow> : null}
        </PropertiesWrapper>
    </ContentWrapper>
    </Container>
  )
}
export default Properties
