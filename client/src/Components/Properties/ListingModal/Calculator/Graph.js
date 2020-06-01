import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { GraphContainer, GraphWrapper, MonthlyPaymentContainer } from './GraphStyling'
export default function Graph ({ principalPayment, tax, insurancePayment, payment, monthlyPaymentInfo }) {
  const doughnutGraph = {
    labels: ['Principal & Interest', 'Taxes'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00'
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000'
        ],
        data: [principalPayment, tax]
      }
    ]
  }
  return (
    <>
      <GraphContainer>
        <GraphWrapper>
          <Doughnut
            data={doughnutGraph}
            options={{
              legend: {
                display: true,
                position: 'right',
                yaxis: {
                  ticks: {
                    display: true
                  }
                }
              }
            }}
          />
          <MonthlyPaymentContainer>
            {isNaN(monthlyPaymentInfo) ? null : <p>Monthly payment is {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(payment)}</p>}
          </MonthlyPaymentContainer>
        </GraphWrapper>
      </GraphContainer>
    </>
  )
}
