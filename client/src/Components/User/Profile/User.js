import React from 'react'
import { Container, ContentContainer } from './UserStyling'
import SectionContainer from '../Sections/Section/Container/SectionContainer'
import Nav from '../../Home/Nav/Nav'
export default function User () {
  return (
    <Container>
      <Nav />
      <ContentContainer>
        <SectionContainer />
      </ContentContainer>
    </Container>
  )
}
