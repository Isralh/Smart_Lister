import React, { useContext, useState } from 'react'
import { Container } from './LayoutStyling'
import { ViewContext } from '../../Section/Container/SectionContainer'
// presentational component
export function Layout ({ pageLinks, showLayout, handleActive }) {
  return (

    <Container>
      {pageLinks.map(link =>
        <h1 key={link.keyId} onClick={showLayout.bind(this, link)} active={handleActive}> {link.heading} </h1>)}
    </Container>
  )
}

// container component
// our heading/links for the users proflie page
export default function LayoutContainer () {
  const links = [{ keyId: 1, heading: 'Favorites' }, { keyId: 2, heading: 'List House' }, { keyId: 3, heading: 'Account' }]

  // bring in viewContext from the section container component to toggle between the different viewlink onClick function
  const [context, setContext] = useContext(ViewContext)

  // function to set the view from the section container through the context we passed through, this function sets the view
  // and changes it dynamically on click... the function passed through as props comes from our layout component and binds the
  // links we have in the user's page
  const layoutView = (link) => {
    const data = link.heading
    setContext(data)
  }
  return (
    <Layout pageLinks={links} showLayout={layoutView} />
  )
}
