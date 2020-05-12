import React, { useState } from 'react'
import { Container, CompanyName, ListWrapper, NavLink } from './NavStyling'
import { Link } from 'react-router-dom'
export default function Nav () {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <Container>
      <CompanyName>
        <Link style={{ textDecoration: 'none' }} to='/'><p>The Smith Group</p></Link>
      </CompanyName>
      <NavLink open={open} onClick={handleOpen}>
        <div />
        <div />
        <div />
      </NavLink>
      <>
        <ListWrapper open={open}>
          <ul>
            <Link style={{ textDecoration: 'none' }} to='/'><li>Home</li></Link>
            <Link style={{ textDecoration: 'none' }} to='/properties'><li>Properties</li></Link>
            <li>Communities</li>
            <li>About</li>
            <li>Login/Register</li>
          </ul>
        </ListWrapper>
      </>
    </Container>
  )
}
