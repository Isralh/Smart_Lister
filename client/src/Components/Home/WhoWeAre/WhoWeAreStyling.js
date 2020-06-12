import styled, { keyframes, css } from 'styled-components'

export const Container = styled.div`
grid-column: 100%;
display: grid;
margin-top: 50px;
`
export const Wrapper = styled.div`
grid-template-columns: 5% 90% 5%;
display: grid;
grid-auto-rows: minmax(100px, auto);
`
export const BioContainer = styled.div`
grid-column: 2/3;
display: block;
border-top: 0.2px solid #19334d;
h1{
    @media (min-width:320px) {
        text-align:center;
        padding-top:10px;
        color:#19334d;
    }
    @media (min-width:600px) {
    text-align:start;
    color:#19334d;
    font-size: 26px;
    font-family: serif;
    font-weight:bold;
    }
}

`
export const CompanyBio = styled.div`
grid-column: 2/3;
display: block;

p{
    color:#19334d;
    font-size: 20px;
    font-family: serif;
    line-height: 45px;
    font-weight: normal;
    text-align: center;

}
`
export const ServicesContainer = styled.div`
grid-column: 2/3;
display:flex;
flex-direction:column;
flex-wrap: nowrap;
justify-content:flex-start;
width:100%;
@media (min-width:768px){
    flex-direction:row;
    flex-wrap:nowrap;
    justify-content:space-around;
}
`
export const ContentWrapper = styled.div`
margin-top:50px;
@media (min-width:768px){
    /* width:30%; */
margin-left:3%;
margin-right:3%;
}

`
export const FontAwesomeContainer = styled.div`
text-align:center;

`
export const FontAwesomeStyle = {
  fontSize: '80px',
  color: '#19334d'
}
export const Heading = styled.h1`
font-size:20px;
color:#19334d;
text-align:center;
font-weight:bold;
`
export const Paragraph = styled.p`
color:#19334d;
text-align:center;
font-weight:400;
font-size: 18px;
font-family: serif;
line-height: 35px;
`
