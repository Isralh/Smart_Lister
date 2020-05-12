import React from 'react'
import { FormWrapper } from './InquiryStyling'
export default function Inquiry () {
  return (
    <FormWrapper>
      <p>Request more info</p>
      <form>
        <input type='text' placeholder='First Name' />
        <input type='text' placeholder='Last Name' />
        <input type='text' placeholder='E-mail' />
        <input type='text' placeholder='Phone Number' />
        <input style={{ height: '80px', width: '93%' }} type='text' placeholder='Please send me more info' />
      </form>
      <button type='submit'> Send </button>
    </FormWrapper>
  )
}
