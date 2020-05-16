import React from 'react'
import { Container, ContentContainer } from './UserStyling'
import Nav from '../../Home/Nav/Nav'
import SearchBar from '../SearchBar/SearchBar'
import SectionContainer from '../Sections/Section/Container/SectionContainer'
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
