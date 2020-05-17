import React, { useState } from 'react'
import Portfolio from './Portfolio'

export default function PortfolioContainer () {
  const [whenHover, setHover] = useState(false)

  const whenMouseOver = () => {
    setHover(true)
  }

  const whenMouseLeave = () => {
    setHover(false)
  }

  return (
    <Portfolio handleMouseLeave={whenMouseLeave} handleMouseOver={whenMouseOver} hover={whenHover} />
  )
}
