// import { useState } from 'react'
// import axios from 'axios'

// const Authentication = () => {
//   // state to hold our user Info from our Register Input
//   const [userInfo, setUserInfo] = useState({
//     email: '',
//     password: '',
//     confirmPassword: ''
//   })

//   // onChange get user's email registration input
//   const getEmail = (e) => {
//     const userEmail = e.target.value
//     setUserInfo(prev => {
//       return { ...prev, email: userEmail }
//     })
//   }
//   // onChange get user's password registration input
//   const getPassword = (e) => {
//     const userPassword = e.target.value
//     setUserInfo(prev => {
//       return { ...prev, password: userPassword }
//     })
//   }
//   // onChange get user's confirmed Password registration input
//   const getConfirmedPassword = (e) => {
//     const userConfirmedPassword = e.target.value
//     setUserInfo(prev => {
//       return { ...prev, confirmPassword: userConfirmedPassword }
//     })
//   }

//   // return the state and logical functions to our login and registration components
//   return [userInfo, getEmail, getPassword, getConfirmedPassword]
// }

// export default Authentication
