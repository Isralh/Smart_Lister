import React, { useState } from 'react'
import RegisterContainer from '../../Register_Login/Register/RegisterContainer'
import LoginContainer from '../../Register_Login/Login/LoginContainer'
import WhoWeAre from './WhoWeAre'
export default function WhoWeAreContainer () {
  const [registerLoginToggle, setRegisterLoginToggle] = useState({
    openRegister: false,
    openLogin: false
  })
  const [whenHover, setWhenHover] = useState(false)
  const mouseOver = () => {
    setWhenHover(true)
  }

  const mouseLeave = () => {
    setWhenHover(false)
  }

  return (
    <WhoWeAre
      handleMouseLeave={mouseLeave}
      handleMouseOver={mouseOver}
      hover={whenHover}
    />
  )
}
