import React, { useReducer } from 'react'
import { Container, CompanyName, ListWrapper, NavLink } from './NavStyling'
import { Link } from 'react-router-dom'
import RegisterContainer from '../../Register_Login/Register/RegisterContainer'
import LoginContainer from '../../Register_Login/Login/LoginContainer'
const initialState = {
  openNav: false,
  showRegister: false,
  showLogin: false
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'open Nav': {
      return {
        ...state,
        openNav: !state.openNav
      }
    }
    case 'open Login': {
      return {
        ...state,
        showLogin: !state.showLogin,
        openNav: !state.openNav
      }
    }
    case 'close Login': {
      return {
        ...state,
        showLogin: !state.showLogin
      }
    }
    case 'open Register': {
      return {
        ...state,
        showRegister: !state.showRegister,
        showLogin: !state.showLogin
      }
    }
    case 'close Register': {
      return {
        ...state,
        showRegister: !state.showRegister
      }
    }
    case 'show Login' : {
      return {
        ...state,
        showRegister: !state.showRegister,
        showLogin: !state.showLogin
      }
    }
    default: return state
  }
}
export default function Nav () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSideNav = () => {
    dispatch({ type: 'open Nav' })
  }
  const openLogin = () => {
    dispatch({ type: 'open Login' })
    console.log('its open')
  }
  const loginClose = () => {
    dispatch({ type: 'close Login' })
  }
  const openRegister = () => {
    dispatch({ type: 'open Register' })
  }
  const registerClose = () => {
    dispatch({ type: 'close Register' })
  }
  const showLogin = () => {
    dispatch({ type: 'show Login' })
  }
  return (
    <Container>
      <CompanyName>
        <Link style={{ textDecoration: 'none' }} to='/'><p>The Smith Group</p></Link>
      </CompanyName>
      <NavLink open={state.openNav} onClick={handleSideNav}>
        <div />
        <div />
        <div />
      </NavLink>
      <>
        <ListWrapper open={state.openNav}>
          <ul>
            <Link style={{ textDecoration: 'none' }} to='/'><li>Home</li></Link>
            <Link style={{ textDecoration: 'none' }} to='/properties'><li>Properties</li></Link>
            <li>Communities</li>
            <li>About</li>
            <li onClick={openLogin}>Login/Register</li>
          </ul>
        </ListWrapper>
        <RegisterContainer registerModal={state.showRegister} closeModal={registerClose} showLogin={showLogin} />
        <LoginContainer loginModal={state.showLogin} displayRegister={openRegister} loginClose={loginClose} />
      </>
    </Container>
  )
}
