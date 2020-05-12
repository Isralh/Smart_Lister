import React from 'react'
import { Container } from './Styling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
export default function TopHeading ({ close, houseAddress }) {
  return (
    <Container>
      <FontAwesomeIcon icon={faHome} style={{ color: 'white', margin: '1vh 0vh 0vh 1vh' }} />
      <p>{houseAddress}</p>
      <button onClick={close}>Close</button>
    </Container>
  )
}
