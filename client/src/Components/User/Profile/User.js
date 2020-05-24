import React from 'react'
import { Container, ContentContainer } from './UserStyling'
import SearchBar from '../SearchBar/SearchBar'
import SectionContainer from '../Sections/Section/Container/SectionContainer'
import NavContainer from '../../Home/Nav/NavContainer'
export default function User () {
  return (
    <Container>
      <NavContainer />
      <ContentContainer>
        <SearchBar />
        <SectionContainer />
      </ContentContainer>
    </Container>
  )
}
