import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { GraphContainer, GraphWrapper } from './GraphStyling'
export default function Graph ({ principalPayment, tax, insurancePayment, payment }) {
  const doughnutGraph = {
    labels: ['Principal & Interest', 'Taxes', 'Insurance'
    ],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00'
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000'
        ],
        data: [principalPayment, tax, insurancePayment]
      }
    ]
  }
  return (
    <>
      <GraphContainer>
        <GraphWrapper>
          <Doughnut
            data={doughnutGraph}
            width={150}
            height={100}
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
          <p>Monthly payment is {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(payment)}</p>
        </GraphWrapper>
      </GraphContainer>
    </>
  )
}
