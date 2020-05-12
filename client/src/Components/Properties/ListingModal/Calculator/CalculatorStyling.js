import styled from 'styled-components'

export const Container = styled.div`
width:100%;
margin-top: 30px;
/* border-top: 1px solid #19334d; */
margin-bottom:5%;
@media (min-width:600px) {
  margin-bottom:5%;
    }
`
export const Heading = styled.div`
  margin-left:10px;
p{
    font-size:22px;
  color:#19334d;
  font-weight:bold;
}
`
export const ContentWrapper = styled.div`
@media (min-width:600px){
  display:flex;
flex-direction:row-reverse;
justify-content:space-around;
align-items:flex-start;
}
`
