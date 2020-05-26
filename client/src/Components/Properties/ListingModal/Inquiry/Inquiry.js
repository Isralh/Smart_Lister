import React, { useState } from 'react'
import { InquiryIcon, FontAwesomeStyle } from './InquiryStyling'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Inquiry () {
 const [thisModal, setThisModal] = useState(false)
  const handleInquiry = () => {
   setThisModal(!thisModal)
  }
  return (
    <InquiryIcon>
      <FontAwesomeIcon icon={faEnvelope} style={FontAwesomeStyle} onClick={handleInquiry} />
      <div show={thisModal} />
    </InquiryIcon>
  )
}
