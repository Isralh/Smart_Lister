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
// import Geocode from 'react-geocode'
// import { geoCodeKey } from '../../Config/GoogleApiKey'

export default function Home () {

  // Geocode.setApiKey(geoCodeKey)
  // Geocode.setLanguage('en')
  // Geocode.setRegion('us')
  // Geocode.fromAddress('213 gypsy lane, king of prussia, PA 19406').then(
  //   response => {
  //     console.log(response.results[0].geometry.location)
  //   }
  // ).catch(e => console.log(e))

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
