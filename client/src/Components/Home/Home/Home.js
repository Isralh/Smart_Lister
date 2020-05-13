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
import Register from '../Login/Register/Register'
import Login from '../Login/Login/Login'
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

  // state to define hamburger nav and close it when the register modal is open
  const [openNav, setOpenNav] = useState()

  // state to toggle our register modal to open and close
  const [registerView, setRegisterView] = useState(false)
  const [loginView, setLoginView] = useState(false)
  const handleRegisterView = () => {
    setLoginView(!loginView)
    setOpenNav(!openNav)
  }
  const toggleLogin = () => {
    setRegisterView(!registerView)
    setLoginView(!loginView)
  }
  const toggleRegisteration = () => {
    setLoginView(!loginView)
    setRegisterView(!registerView)
  }
  const closeRegisterModal = () => {
    setRegisterView(false)
  }
  useEffect(() => {
    console.log(loginView)
  })
  return (
    <Container>
      <Nav toggleRegister={handleRegisterView} navOpen={openNav} setNavOpen={setOpenNav} />
      <FrontView />
      <WhoWeAre />
      <Properties />
      <Portfolio />
      <Communities />
      <Register registerModal={registerView} displayLogin={toggleLogin} registerClose={closeRegisterModal}/>
      <Login loginModal={loginView} displayRegister={toggleRegisteration} />
      <Footer />
    </Container>
  )
}
