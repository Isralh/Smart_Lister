import React, { useEffect, useState } from 'react'
import { Container } from './HomeStlying'
import Nav from '../Nav/Nav'
import FrontView from '../FrontView/FrontView'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import Portfolio from '../Portfolio/Portfolio'
import Communities from '../Communities/Communities'
import Footer from '../Footer/Footer'
import Properties from '../Properties/Properties'
import axios from 'axios'

export default function Home () {
  const [housedata, sethouseData] = useState([])
  const [imageKey, setImageKey] = useState([])
  useEffect(() => {
    async function getProperties () {
      const fetchedData = await axios.get('http://localhost:3001/api/allProperties')
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
    getProperties()
  }, [])
  console.log(housedata)
  const houses = housedata.filter(house => {
    return ['1346 Columbia Avenue', '1051 Fruitville Pike', '821 Lititz Pike'].indexOf(house.Address) !== -1
  })
  console.log(houses)
  return (
    <Container>
      <Nav />
      <FrontView />
      <WhoWeAre />
      <Properties />
      <Portfolio />
      <Communities />
      <Footer />
    </Container>
  )
}
