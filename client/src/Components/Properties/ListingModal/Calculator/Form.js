import React from 'react'
import { CalculatorForm, Calculate } from './FormStyling'
export default function Form ({ getPrice, getLength, getInterestRate, getProperytTax, getInsurancePayment, getMortgagePayment }) {
  return (
    <CalculatorForm>
      <form onSubmit={getMortgagePayment}>
        <label>Buying Price</label><br />
        <input type='number' required placeholder='$' step='0.01' onChange={getPrice} /> <br />
        <label>Mortgage Length</label><br />
        <input type='number' required placeholder='years' onChange={getLength} /><br />
        <label>Interest Rate</label><br />
        <input type='number' required placeholder='%' step='0.01' onChange={getInterestRate} /><br />
        <label>Property tax rate</label><br />
        <input type='number' placeholder='%' step='0.01' onChange={getProperytTax} /><br />
        <label>Monthly Home Insurance</label><br />
        <input type='number' placeholder='$' step='0.01' onChange={getInsurancePayment} /><br />
        <Calculate type='submit'>Calculate</Calculate>
      </form>
    </CalculatorForm>
  )
}
