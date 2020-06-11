// import React, { useReducer } from 'react'
// import Nav from './Nav'
// // we're using useReduce to toggle our sidenav between opening, closing and switching back and forth
// // between the login/register modal
// const initialState = {
//   openNav: false,
//   showRegister: false,
//   showLogin: false
// }
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'open Nav': {
//       return {
//         ...state,
//         openNav: !state.openNav
//       }
//     }
//     case 'open Login': {
//       return {
//         ...state,
//         showLogin: !state.showLogin,
//         openNav: !state.openNav
//       }
//     }
//     case 'close Login': {
//       return {
//         ...state,
//         showLogin: !state.showLogin
//       }
//     }
//     case 'open Register': {
//       return {
//         ...state,
//         showRegister: !state.showRegister,
//         showLogin: !state.showLogin
//       }
//     }
//     case 'close Register': {
//       return {
//         ...state,
//         showRegister: !state.showRegister
//       }
//     }
//     case 'show Login' : {
//       return {
//         ...state,
//         showRegister: !state.showRegister,
//         showLogin: !state.showLogin
//       }
//     }
//     default: return state
//   }
// }
// const NavContainer = () => {
//   const [state, dispatch] = useReducer(reducer, initialState)

//   const handleSideNav = () => {
//     dispatch({ type: 'open Nav' })
//   }
//   const openLogin = () => {
//     dispatch({ type: 'open Login' })
//   }
//   const loginClose = () => {
//     dispatch({ type: 'close Login' })
//   }
//   const openRegister = () => {
//     dispatch({ type: 'open Register' })
//   }
//   const registerClose = () => {
//     dispatch({ type: 'close Register' })
//   }
//   const showLogin = () => {
//     dispatch({ type: 'show Login' })
//   }
//   return (
//     <Nav
//       navOpen={state.openNav}
//       handleOpen={handleSideNav}
//       registerView={state.showRegister}
//       loginView={state.showLogin}
//       toggleLogin={openLogin}
//       closeLogin={loginClose}
//       showRegister={openRegister}
//       closeRegister={registerClose}
//       displayLogin={showLogin}
//     />
//   )
// }
// export default NavContainer
