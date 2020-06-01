import React, { useState } from 'react'
import Form from './Form'
import Graph from './Graph'
import { Container, Heading, ContentWrapper } from './CalculatorStyling'
export default function Calculator () {
  // state to hold our input values
  const [price, setPrice] = useState()
  const [years, setYears] = useState()
  const [interestRate, setInterestRate] = useState()
  const [propertyTax, setPropertyTax] = useState()
  const [insurance, setInsurance] = useState()
  const [monthlyPayment, setMonthlyPayment] = useState()
  const [taxPayment, setTaxPayment] = useState()

  // function to set our state with the inputed values from the user
  const handlePrice = (e) => {
    const priceValue = e.target.value
    setPrice(parseInt(priceValue), 10)
  }
  const handleLength = (e) => {
    const numberOfYears = e.target.value
    setYears(numberOfYears)
  }
  const handleInterestRate = (e) => {
    const inputedInterestRate = e.target.value
    setInterestRate(inputedInterestRate)
  }
  const handlePropertyTax = (e) => {
    const inputedPropertTax = e.target.value
    setPropertyTax(inputedPropertTax)
  }
  const handleInsurance = (e) => {
    const insuranceAmount = e.target.value
    setInsurance((insuranceAmount), 10)
  }

  // // function tho calculater the mortgage payment
  const handleMorgagePayment = (e) => {
    e.preventDefault()
    setMonthlyPayment(parseInt(price / ((1 - Math.pow((1 + ((interestRate / 100) / 12)), ((years * 12) * -1))) / ((interestRate / 100) / 12))).toFixed(0))
    setTaxPayment(parseInt((price * (propertyTax / 100)) / 12).toFixed(0))
  }
  const totalPayment = parseInt(monthlyPayment, 10) + (insurance, 10) + parseInt(taxPayment, 10)

  return (
    <Container>
      <Heading>
        <p>Mortgage Calculator</p>
      </Heading>
      <ContentWrapper>
        <Graph principalPayment={monthlyPayment} tax={taxPayment} insurancePayment={insurance} payment={totalPayment} />
        <Form
          getPrice={handlePrice} getLength={handleLength} getInterestRate={handleInterestRate} getProperytTax={handlePropertyTax}
          getInsurancePayment={handleInsurance} getMortgagePayment={handleMorgagePayment}
        />
      </ContentWrapper>
    </Container>
  )
}
