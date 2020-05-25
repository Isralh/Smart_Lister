import React from 'react'
import { Container, CompanyName, ListWrapper, NavLink } from './NavStyling'
import { Link } from 'react-router-dom'
import RegisterContainer from '../../Register_Login/Register/RegisterContainer'
import LoginContainer from '../../Register_Login/Login/LoginContainer'
export default function Nav ({
  toggleLogin, navOpen, handleOpen,
  registerView, closeRegister, displayLogin, loginView, showRegister, closeLogin
}) {
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
            <li onClick={toggleLogin}>Login/Register</li>
          </ul>
        </ListWrapper>
        <RegisterContainer registerModal={registerView} closeModal={closeRegister} showLogin={displayLogin} />
        <LoginContainer loginModal={loginView} displayRegister={showRegister} loginClose={closeLogin} />
      </>
    </Container>
  )
}
