import React from 'react'
import { Container, ModalWrapper, Content } from './RegisterStyling'
export default function Register ({ registerModal }) {
  return (
    <Container show={registerModal}>
      <ModalWrapper>
        <Content>
        
        </Content>
      </ModalWrapper>
    </Container>
  )
}
