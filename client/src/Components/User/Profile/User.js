import React from 'react'
import { Container, ContentContainer } from './UserStyling'
import SearchBar from '../SearchBar/SearchBar'
import SectionContainer from '../Sections/Section/Container/SectionContainer'
import Nav from '../../Home/Nav/Nav'
export default function User () {
  return (
    <Container>
      <Nav />
      <ContentContainer>
        <SearchBar />
        <SectionContainer />
      </ContentContainer>
    </Container>
  )
}
