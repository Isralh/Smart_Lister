import React, { createContext } from 'react'
import { Container, Styling } from './HomeStlying'
import FrontView from '../FrontView/FrontView'
import WhoWeAreContainer from '../WhoWeAre/WhoWeAre'
import Footer from '../Footer/Footer'
import Properties from '../Properties/Properties'
import PortfolioContainer from '../Portfolio/PortfolioContainer'
import Nav from '../Nav/Nav'
import Testimonials from '../Testimonials/Testimonials'
import { SRDInside } from '../../../Public/Image/export'
import { MDLivingRoom } from '../../../Public/HouseImages/MarrietaDrive/Export'

export const userStatus = createContext()
export default function Home () {
  return (
    <Container>
      <Styling FrontImage={SRDInside}>
        <Nav />
        <FrontView />
      </Styling>
      <WhoWeAreContainer />
      <Properties />
      <PortfolioContainer />
      <Testimonials />
      <Footer />
    </Container>
  )
}
