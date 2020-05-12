import React from 'react'
import { Link } from 'react-router-dom'
import {
  SectionWrapper, AboutCompanyWrapper, CompanyInfoWrapper, LinksSectionWrapper,
  UpdatesWrapper, SignUp, Input, Form, Button, CopyrightWrapper
} from './FooterStyling'
const Footer = () => {
  return (
    <SectionWrapper>
      <AboutCompanyWrapper>
        <CompanyInfoWrapper>
          <h1>THE MITH GROUP</h1>
          <p>562 Stanley Avenue</p>
          <p>King of Prussia, PA 19406</p>
          <p>+1 717 342 0012</p>
          <p>info@Allangroup.com</p>
        </CompanyInfoWrapper>
      </AboutCompanyWrapper>
      <LinksSectionWrapper>
        <Link to='/'>About</Link>
        <Link to='/'>Home Search</Link>
        <Link to='/'>Communities</Link>
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
