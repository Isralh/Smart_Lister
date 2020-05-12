import React from 'react'
import { Container, Heading, ParagraphWrapper } from './Styling'
export default function Description ({ numberOfBeds, numberOfBath, numberOfGarage, city }) {
  return (
    <Container>
      <Heading>
        <p>Description</p>
      </Heading>
      <ParagraphWrapper>
        <p>Lavish, ritzy and stunning home with an awesome swimming pool, hot tub and endless
            opportunities for leisure and enjoyable living. Featuring a debonair feel and convenient access to local shopping,
            this {numberOfBeds} bedroom, {numberOfBath} bath, {numberOfGarage} garage house provides an atmosphere and accessibility that is difficult to
            replicate. This breathtakingly elegant residence has an airy and open galley kitchen with upscale finishes,
            a well-designed and skillfully built butler's pantry and a large yet unimposing dining room for entertaining.
            Located in {city}, this home is incomparable. Come home today!
        </p>
      </ParagraphWrapper>
    </Container>
  )
}
