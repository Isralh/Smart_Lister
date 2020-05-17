import React from 'react'
import { StepHeading, FirstStep, SecondStep, ThirdStep, FormWrapper, Next, ListForm, ButtonContainer, Previous, Container } from './FormStyling'

export default function FormLayout ({
  firstStepinput, secondStepinput, thirdStepinput, step, handleNext, handlePrev, firstActive, secondActive,
  thirdActive, buttonText, buttonType, showPrevBtn, showListingForm, handleChange, handleImage
}) {
  // our multi Step form, we're mapping through an array of input lables,names and types from our FormContianer

  return (
    <Container viewForm={showListingForm}>
      <FormWrapper>
        <StepHeading>
          <p>{step}</p>
        </StepHeading>
        <ListForm>
          <FirstStep activeStep={firstActive}>
            {firstStepinput.map(input =>
              <div key={input.id}><label>{input.label}</label> <br />
                <input type={input.type} name={input.name} required onChange={handleChange} /> <br />
              </div>)}
          </FirstStep>
          <SecondStep activeStep={secondActive}>
            {secondStepinput.map(input =>
              <div key={input.id}> <label>{input.label}</label> <br />
                <input type={input.type} name={input.name} required onChange={handleChange} /> <br />
              </div>)}
          </SecondStep>
          <ThirdStep activeStep={thirdActive}>
            {thirdStepinput.map(input =>
              <div key={input.id}> <label>{input.label}</label> <br />
                <input type={input.type} name={input.name} required multiple onChange={handleChange} /> <br />
              </div>)}
            <label>Images</label><br />
            <input type='file' name='image' required multiple onChange={handleImage} />
          </ThirdStep>
          {/* changeFlex will change the flex position of the buttons based on if showPrev (show previous button) is true or not */}
          <ButtonContainer changeFlex={showPrevBtn}>
            <Previous type='button' onClick={handlePrev} showButton={showPrevBtn}>Previous</Previous>
            <Next type={buttonType} onClick={handleNext}>{buttonText}</Next>
          </ButtonContainer>
        </ListForm>
      </FormWrapper>
    </Container>
  )
}
