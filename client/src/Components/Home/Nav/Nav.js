import React from 'react'
import { Container, CompanyName, ListWrapper, NavLink } from './NavStyling'
import { Link } from 'react-router-dom'
export default function Nav ({ toggleRegister, navOpen, setNavOpen }) {
  // function to toggle the hamburger nav to open and close, states defined in the Home component
  // so when we open the register modal the hamburger menu closes
  const handleOpen = () => {
    setNavOpen(!navOpen)
  }
  return (
    <Container>
      <CompanyName>
        <Link style={{ textDecoration: 'none' }} to='/'><p>The Smith Group</p></Link>
      </CompanyName>
      <NavLink open={navOpen} onClick={handleOpen}>
        <div />
        <div />
        <div />
      </NavLink>
      <>
        <ListWrapper open={navOpen}>
          <ul>
            <Link style={{ textDecoration: 'none' }} to='/'><li>Home</li></Link>
            <Link style={{ textDecoration: 'none' }} to='/properties'><li>Properties</li></Link>
            <li>Communities</li>
            <li>About</li>
            <li onClick={toggleRegister}>Login/Register</li>
          </ul>
        </ListWrapper>
      </>
    </Container>
  )
}
