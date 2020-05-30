import React, { useContext } from 'react'
import { Container } from './LayoutStyling'
import { ViewContext } from '../../Section/Container/SectionContainer'
// presentational component
export function Layout ({ pageLinks, showLayout, activeBorder, underline }) {
  return (

    <Container>
      {pageLinks.map(link =>
        <h1 key={link.keyId} onClick={showLayout.bind(this, link)} active={activeBorder}> {link.heading} </h1>)}
    </Container>
  )
}

// our heading/links for the users proflie page
export default function LayoutContainer ({ thisUnderline }) {
  const links = [{ keyId: 1, heading: 'MY LISTING' }, { keyId: 2, heading: 'POST PROPERTY' }, { keyId: 3, heading: 'FAVORITES' }, { keyId: 4, heading: 'ACCOUNT' }]

  // bring in viewContext from the section container component to toggle between the different viewlink onClick function
  const [context, setContext] = useContext(ViewContext)

  // function to set the view from the section container through the context we passed through, this function sets the view
  // and changes it dynamically on click... the function passed through as props comes from our layout component and binds the
  // links we have in the user's page
  const layoutView = (link, thisUnderline ) => {
    const data = link.heading
    setContext(data)
  }
  return (
    <Layout pageLinks={links} showLayout={layoutView} underline={thisUnderline} />
  )
}
