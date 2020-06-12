import React from 'react'
import {
  SectionWrapper, AboutCompanyWrapper, CompanyInfoWrapper, LinksSectionWrapper,
  UpdatesWrapper, SignUp, Input, Form, Button, CopyrightWrapper, FontAwesomeContainer, FontAwesomeStyle
} from './FooterStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <SectionWrapper>
      <AboutCompanyWrapper>
        <CompanyInfoWrapper>
          <h1>THE SMITH GROUP</h1>
          <p>562 Stanley Avenue</p>
          <p>King of Prussia, PA 19406</p>
          <p>+1 717 342 0012</p>
          <p>info@Allangroup.com</p>
        </CompanyInfoWrapper>
      </AboutCompanyWrapper>
      <LinksSectionWrapper>
        <FontAwesomeContainer>
          <FontAwesomeIcon icon={faTwitter} style={FontAwesomeStyle} />
        </FontAwesomeContainer>
        <FontAwesomeContainer>
          <FontAwesomeIcon icon={faFacebook} style={FontAwesomeStyle} />
        </FontAwesomeContainer>
        <FontAwesomeContainer>
          <FontAwesomeIcon icon={faInstagram} style={FontAwesomeStyle} />
        </FontAwesomeContainer>
      </LinksSectionWrapper>
      <UpdatesWrapper>
        <SignUp>Sign-Up for Our Newsletters!</SignUp>
        <Form>
          <Input type='text' placeholder='First Name' /> <br />
          <Input type='text' placeholder='Last Name' /><br />
          <Input type='text' placeholder='Email' /><br />
          <Button>Subscribe</Button>
        </Form>
      </UpdatesWrapper>
      <CopyrightWrapper>
        <p>Copyright © 2020 The Smith Group</p>
      </CopyrightWrapper>
    </SectionWrapper>
  )
}

export default Footer
