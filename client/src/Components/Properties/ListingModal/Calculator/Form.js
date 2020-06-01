import React from 'react'
import { CalculatorForm, Calculate } from './FormStyling'
export default function Form ({
  handleChange, handleMortgagePayment, propertyPrice, mortgageLength,
  interestRate, propertyTax
}) {
  return (
    <CalculatorForm>
      <form onSubmit={handleMortgagePayment}>
        <label>Buying Price</label><br />
        <input type='number' value={propertyPrice} name='price' required step='0.01' onChange={handleChange} /> <br />
        <label>Mortgage Length</label><br />
        <input type='number' value={mortgageLength} name='years' required onChange={handleChange} /><br />
        <label>Interest Rate</label><br />
        <input type='number' value={interestRate} name='interestRate' required step='0.01' onChange={handleChange} /><br />
        <label>Property tax rate</label><br />
        <input type='number' value={propertyTax} name='propertyTax' step='0.01' onChange={handleChange} /><br />
        <Calculate type='submit'>Calculate</Calculate>
      </form>
    </CalculatorForm>
  )
}
