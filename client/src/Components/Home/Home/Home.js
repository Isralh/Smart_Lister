import React, { createContext, useState } from 'react'
import { Container } from './HomeStlying'
import FrontView from '../FrontView/FrontView'
import WhoWeAreContainer from '../WhoWeAre/WhoWeAre'
import Communities from '../Communities/Communities'
import Footer from '../Footer/Footer'
import Properties from '../Properties/Properties'
import PortfolioContainer from '../Portfolio/PortfolioContainer'
import NavContainer from '../Nav/NavContainer'
export const userStatus = createContext()
export default function Home () {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <userStatus.Provider value='loggedIn'>
      <Container>
        <NavContainer />
        <FrontView />
        <WhoWeAreContainer />
        <Properties />
        <PortfolioContainer />
        <Communities />
        <Footer />
      </Container>
    </userStatus.Provider>
  )
}
