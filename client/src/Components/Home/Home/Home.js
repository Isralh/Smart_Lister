import React from 'react'
import { Container, Styling } from './HomeStlying'
import FrontView from '../FrontView/FrontView'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import FooterContainer from '../Footer/FooterContainer'
import Properties from '../Properties/Properties'
import PortfolioContainer from '../Portfolio/PortfolioContainer'
import Nav from '../Nav/Nav'
import Testimonials from '../Testimonials/Testimonials'
import { SRDInside } from '../../../Public/Image/export'

export default function Home () {
  return (
    <Container>
      <Styling FrontImage={SRDInside}>
        <Nav />
        <FrontView />
      </Styling>
      <WhoWeAre />
      <Properties />
      <PortfolioContainer />
      <Testimonials />
      <FooterContainer />
    </Container>
  )
}
