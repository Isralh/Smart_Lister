import React from 'react'
import { Container, FontAwesomeStyle } from './Styling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
export default function TopHeading ({ close, houseAddress }) {
  return (
    <Container>
      <FontAwesomeIcon icon={faHome} style={FontAwesomeStyle} />
      <p>{houseAddress}</p>
      <button onClick={close}>Close</button>
    </Container>
  )
}
