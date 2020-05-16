import React from 'react'
import { Container } from './LayoutStyling'

// presentational component
export function Layout ({ pageLinks, showthis }) {
  return (

    <Container>
      {pageLinks.map(link =>
        <h1 key={link.keyId} onClick={showthis.bind(this, link)}> {link.heading} </h1>)}
    </Container>
  )
}

// container component
// our heading/links for the users proflie page
export default function LayoutContainer () {
  const links = [{ keyId: 1, heading: 'Favorites' }, { keyId: 2, heading: 'List House' }, { keyId: 3, heading: 'Account' }]

  function handleShow (link) {
    console.log(link)
  }
  return (
    <Layout pageLinks={links} showthis={handleShow} />
  )
}
