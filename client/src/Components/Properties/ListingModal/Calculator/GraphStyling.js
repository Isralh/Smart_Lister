import styled from 'styled-components'

export const GraphContainer = styled.div`
  width:100%;
  margin: 20px 0 0 10px;
  @media (min-width:600px){
    margin-left:0px;
    margin-top: 5px;
    max-width:60%;
    }
  /* p{
      text-align:center;
      color:#19334d;
    font-weight:bold;
    font-size:12px;
  } */
  `
export const GraphWrapper = styled.div`
@media (min-width:1440){
  /* margin-top: -50px; */
}
  `
export const MonthlyPaymentContainer = styled.div`
margin-top: 5vh;
@media (min-width:320px){
  width:60%;
 text-align:center;
 color:#19334d;
    font-weight:bold;
    font-size:14px;
}
@media (min-width:425px){
  width:65%
}
@media (min-width:900px) and (max-width:1024px){
  margin-left:15px;
}
`
