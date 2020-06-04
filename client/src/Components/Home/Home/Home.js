import React, { createContext } from 'react'
import { Container } from './HomeStlying'
import FrontView from '../FrontView/FrontView'
import WhoWeAreContainer from '../WhoWeAre/WhoWeAre'
import Footer from '../Footer/Footer'
import Properties from '../Properties/Properties'
import PortfolioContainer from '../Portfolio/PortfolioContainer'
import Nav from '../Nav/Nav'
import Testimonials from '../Testimonials/Testimonials'
export const userStatus = createContext()
export default function Home () {
  return (
    <Container>
      <Nav />
      <FrontView />
      <WhoWeAreContainer />
      <Properties />
      <PortfolioContainer />
      <Testimonials />
      <Footer />
    </Container>
  )
}
