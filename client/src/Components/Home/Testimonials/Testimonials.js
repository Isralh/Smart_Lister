import React, { useReducer } from 'react'
import { Container, ContentWrapper, TopHeading, TestimonyContainer } from './TestimonialsStyling'
import FirstTestimony from './FirstTestimony'
import Pagination from './Pagination'
import SecondTestimony from './SecondTestimony'
import ThirdTestimony from './ThirdTestimony'
const Initialstate = {
  showFirst: true,
  showSecond: false,
  showThird: false,
  firstColor: true,
  secondColor: false,
  thirdColor: false
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'First Testimony' :
      return {
        showFirst: true,
        showSecond: false,
        showThird: false,
        firstColor: true,
        secondColor: false,
        thirdColor: false
      }
    case 'Second Testimony' :
      return {
        ...state,
        showFirst: false,
        showSecond: true,
        showThird: false,
        firstColor: false,
        secondColor: true,
        thirdColor: false
      }
    case 'Third Testimony' :
      return {
        ...state,
        showFirst: false,
        showSecond: false,
        showThird: true,
        firstColor: false,
        secondColor: false,
        thirdColor: true
      }
  }
}
const Testimonials = () => {
  const [state, dispatch] = useReducer(reducer, Initialstate)
  const changeFirstColor = () => {
    dispatch({ type: 'First Testimony' })
  }

  const changeSecondColor = () => {
    dispatch({ type: 'Second Testimony' })
  }

  const changeThirdColor = () => {
    dispatch({ type: 'Third Testimony' })
  }
  return (
    <Container>
      <ContentWrapper>
        <TopHeading>
          <h1>Testimonials</h1>
        </TopHeading>
        <TestimonyContainer>
          <FirstTestimony showFirstTesimony={state.showFirst} />
          <SecondTestimony showSecondTestimony={state.showSecond} />
          <ThirdTestimony showThirdTestimony={state.showThird} />
        </TestimonyContainer>
        <Pagination
          FirstCircle={changeFirstColor}
          secondCircle={changeSecondColor}
          thirdCircle={changeThirdColor}
          firstCircleColor={state.firstColor}
          secondCircleColor={state.secondColor}
          thidCircleColor={state.thirdColor}
        />
      </ContentWrapper>
    </Container>
  )
}

export default Testimonials
