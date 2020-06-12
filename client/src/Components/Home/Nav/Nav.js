import React, { useReducer } from 'react'
import { Container, CompanyName, ListWrapper, NavLink, AccountContainer } from './NavStyling'
import { Link, useHistory } from 'react-router-dom'
import RegisterContainer from '../../Register_Login/Register/RegisterContainer'
import LoginContainer from '../../Register_Login/Login/LoginContainer'
import jwtDecode from 'jwt-decode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faHome } from '@fortawesome/free-solid-svg-icons'
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
    case 'List Property' : {
      return {
        ...state,
        showLogin: !state.showLogin
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
  const listProperty = () => {
    dispatch({ type: 'List Property' })
  }
  const handleDropDown = () => {
    dispatch({ type: 'show DropDown' })
  }
  const handleLogOut = () => {
    Logout()
    history.push('/')
  }
  return (
    <Container>
      <CompanyName>
        <Link style={{ textDecoration: 'none' }} to='/'><p> <FontAwesomeIcon icon={faHome} /> SmartLister</p></Link>
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
            {userInfo() === 'user not logged in' ? <li onClick={listProperty}>Post Ad</li>
              : <Link style={{ textDecoration: 'none' }} to='/user/postProperty'><li>Post Ad</li></Link>}
            <Link style={{ textDecoration: 'none' }} to='/properties'><li>Properties</li></Link>
            {userInfo() === 'user not logged in' ? <li onClick={openLogin}>Login/Register</li>
              : <li onClick={handleDropDown}>Welcome, {userInfo()[0]} <FontAwesomeIcon icon={faCaretDown} style={{ paddingLeft: '5px' }} />
                <AccountContainer initialView={state.showDropDown}>
                  <Link style={{ textDecoration: 'none' }} to='/user/mylisting'><div>My Account</div></Link>
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
