import React, { useState, useRef, useEffect } from 'react'
import { Container, Wrapper, BioContainer, CompanyBio, ButtonContainer, AboutUsButton, CursorButton, CursorButtonChange } from './WhoWeAreStyling'

function WhoWeAre ({ handleMouseOver, handleMouseLeave, hover }) {
  const bioRef = useRef(null)

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => console.log(entry))
  }, {
    root: null,
    threshold: 0.3,
    rootMargin: '-150px'
  })

  useEffect(() => {
    observer.observe(bioRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <Container>
      <Wrapper>
        <BioContainer ref={bioRef}>
          <h1>Who We Are</h1>
          <CompanyBio>
            <p>At the Smith Group we’re proud to be one of the most trusted real estate firms in the Greater Philadelphia area. We pride ourselves in exceptional customer service and educating our clients about the housing market. Our priority is to help you find your dream home.</p>
          </CompanyBio>
        </BioContainer>
        <ButtonContainer>
          <AboutUsButton onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>LEARN MORE</AboutUsButton>
          <span>{hover === false ? <CursorButton> {'>'} </CursorButton> : <CursorButtonChange>{'>'}</CursorButtonChange>}</span>
        </ButtonContainer>
      </Wrapper>
    </Container>
  )
}

export default function WhoWeAreContainer () {
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
