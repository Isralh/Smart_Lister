import React, { useReducer, useEffect } from 'react'
import { Container, CompanyName, ListWrapper, NavLink, AccountContainer } from './NavStyling'
import { Link, useHistory } from 'react-router-dom'
import RegisterContainer from '../../Register_Login/Register/RegisterContainer'
import LoginContainer from '../../Register_Login/Login/LoginContainer'
import jwtDecode from 'jwt-decode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Logout from '../../Authentication/Logout'
const initialState = {
  openNav: false,
  showRegister: false,
  showLogin: false,
  showDropDown: false
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
    case 'show DropDown' : {
      return {
        ...state,
        showDropDown: !state.showDropDown
      }
    }
    default: return state
  }
}
export default function Nav () {
  const token = window.localStorage.getItem('token')

  const userInfo = () => {
    if (token !== null || undefined) {
      const user = jwtDecode(token)
      return [user.firstName, user.lastName]
    } else return 'user not logged in'
  }
  const history = useHistory()
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
  const handleDropDown = () => {
    dispatch({ type: 'show DropDown' })
  }
  const handleMyAccount = () => {
    // history.push('/user')
    console.log('my acccount')
  }
  const handleLogOut = () => {
    Logout()
    history.push('/')
    console.log('logout')
  }
  const handleFavorties = () => {
    // Logout()
    // history.push('/')
    console.log('Favorties')
  }
  const handleProperty = () => {
    // Logout()
    // history.push('/')
    console.log('Property')
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
            {userInfo() === 'user not logged in' ? <li onClick={openLogin}>Login/Register</li>
              : <li onClick={handleDropDown}>Welcome, {userInfo()[0]} <FontAwesomeIcon icon={faCaretDown} style={{ paddingLeft: '5px' }} />
                <AccountContainer initialView={state.showDropDown}>
                  <Link style={{ textDecoration: 'none' }} to='/user/favorites'><div onClick={handleFavorties}>Favorties</div></Link>
                  <Link style={{ textDecoration: 'none' }} to='/user/postProperty'> <div onClick={handleProperty}>Post Property</div></Link>
                  <Link style={{ textDecoration: 'none' }} to='/user/account'>  <div onClick={handleMyAccount}>My Account</div></Link>
                  <div onClick={handleLogOut}>Logout</div>
                </AccountContainer>
              </li>}
          </ul>
        </ListWrapper>
        <RegisterContainer registerModal={state.showRegister} closeModal={registerClose} showLogin={showLogin} />
        <LoginContainer loginModal={state.showLogin} displayRegister={openRegister} loginClose={loginClose} />
      </>
    </Container>
  )
}
