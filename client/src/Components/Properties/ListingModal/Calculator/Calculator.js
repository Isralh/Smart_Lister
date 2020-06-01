import React, { useState, useEffect, useContext } from 'react'
import Form from './Form'
import Graph from './Graph'
import { Container, Heading, ContentWrapper } from './CalculatorStyling'
import { PropertyContext } from '../Modal/Modal'
export default function Calculator () {
  // context API to get selected property Info from our Modal
  const propertyData = useContext(PropertyContext)
  const { showModal, propertyInfo } = propertyData
  // state to hold our input values
  const [inputValue, setInputValue] = useState({
    price: propertyInfo.Price,
    years: 20,
    interestRate: 5.0,
    propertyTax: 1.5
  })

  // state to hold our calculation value
  const [monthlyPayment, setMonthlyPayment] = useState()
  const [taxPayment, setTaxPayment] = useState()
  const [totalPayment, setTotalPayment] = useState()

  // function to set our state with the inputed values from the user
  const getInputValue = (e) => {
    e.persist()
    setInputValue(prev => { return { ...prev, [e.target.name]: e.target.value } })
  }

  // function to calculater the mortgage payment on clicking calculate
  const getMortgagePayment = (e) => {
    e.preventDefault()
    setMonthlyPayment(parseInt(inputValue.price / ((1 - Math.pow((1 + ((inputValue.interestRate / 100) / 12)), ((inputValue.years * 12) * -1))) / ((inputValue.interestRate / 100) / 12))).toFixed(0))
    setTaxPayment(parseInt((inputValue.price * (inputValue.propertyTax / 100)) / 12).toFixed(0))
    setTotalPayment(parseInt(monthlyPayment, 10) + parseInt(taxPayment, 10))
  }

  // function to calculate the monthly mortgage payment on input change
  const calculate = () => {
    if (propertyInfo !== undefined) {
      setMonthlyPayment(parseInt(inputValue.price / ((1 - Math.pow((1 + ((inputValue.interestRate / 100) / 12)), ((inputValue.years * 12) * -1))) / ((inputValue.interestRate / 100) / 12))).toFixed(0))
      setTaxPayment(parseInt((inputValue.price * (inputValue.propertyTax / 100)) / 12).toFixed(0))
      setTotalPayment(parseInt(monthlyPayment, 10) + parseInt(taxPayment, 10))
    }
  }

  useEffect(() => {
    const clearInput = () => {
      if (showModal === false) {
        setInputValue({ years: 20, interestRate: 5, propertyTax: 1.5 })
      }
    }
    clearInput()
  }, [showModal])

  useEffect(() => {
    const propPrice = () => {
      if (propertyInfo !== undefined) {
        setInputValue(prev => { return { ...prev, price: propertyInfo.Price } })
      }
    }
    propPrice()
  }, [propertyInfo])

  useEffect(() => {
    calculate()
    console.log(totalPayment)
  }, [inputValue, propertyInfo, totalPayment])
  return (
    <Container>
      <Heading>
        <p>Mortgage Calculator</p>
      </Heading>
      <ContentWrapper>
        <Graph
          principalPayment={monthlyPayment}
          tax={taxPayment}
          insurancePayment={inputValue.insurance}
          payment={totalPayment}
          monthlyPaymentInfo={totalPayment}
        />
        <Form
          handleChange={getInputValue}
          handleMortgagePayment={getMortgagePayment}
          pricePlaceHolder={inputValue.price}
          propertyPrice={inputValue.price}
          mortgageLength={inputValue.years}
          interestRate={inputValue.interestRate}
          propertyTax={inputValue.propertyTax}
        />
      </ContentWrapper>
    </Container>
  )
}
