import styled from 'styled-components'

export const SectionWrapper = styled.div`
margin-top:100px;
width: 100%;
background: #19334d;
grid-template-columns: 15% 70% 15%;
display:grid;
@media (min-width:600px) {
    display:grid;
    grid-template-columns:repeat(auto-fit, 33% 33% 33%);
    justify-content:center;
}
`
export const AboutCompanyWrapper = styled.div`
margin-top: 60px;
width: 100%;
text-align:center;
grid-column: 2/3;
display:grid;
@media (min-width:600px) {
    display:grid;
    grid-column:1/2
}
`
export const CompanyInfoWrapper = styled.div`
h1 {
    font-size: 18px;
    font-family: Helvetica, sans-serif;
    color: white;
    font-weight: bold;
    text-align:center;
    padding-bottom:5px;
}
    p{
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    color: white;
    line-height: 5px;
    font-weight: bold;
    padding-top:5px;
    @media (min-width:600px) {
        /* padding-top:5px; */

}
}

`
export const LinksSectionWrapper = styled.div`
width: 100%;
margin-top:40px;
grid-column: 2/3;
display:flex;
flex-direction:row;
flex-wrap:nowrap;
justify-content:space-around;
@media (min-width:600px) {
    flex-direction:column;
}
@media (min-width:768px) {
    flex-direction:row;
}
`
export const FontAwesomeContainer = styled.div`
    color:white;
    font-size:25px;
    @media (min-width:600px) {
        font-size:30px;
        margin-left:50%;
    }
    @media (min-width:768px) {
        font-size:30px;
        margin:22% 0 0 0;
    }
`
export const FontAwesomeStyle = {
  cursor: 'pointer'
}
export const UpdatesWrapper = styled.div`
padding-top: 40px;
grid-column: 2/3;
display:grid;
@media (min-width:600px) {
    display:grid;
    grid-column: 3/4;
}
`
export const SignUp = styled.p`
font-size: 18px;
text-align: center;
font-family: Helvetica, sans-serif;
color: white;
font-weight: bold;
`
export const Input = styled.input`
width: 70%;
margin-top: 10px;
@media (min-width:600px) {
    height:25px;

}
`
export const InputText = styled.p`
text-align:justify;
  width: 100%;
  padding-top: 10px;
  margin: 0px 0;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  color: white;
  font-size: 15px;
  font-weight: bold;
`
export const Form = styled.form`
text-align:center;
`
export const Button = styled.button`
margin-top: 30px;
width: 200px;
border-radius: 120px;
padding: 10px;
background-color:#19334d;
color: white;
font-weight: bold;
font-size: 16px;
transition-duration: 1s;
transition-property: background;
cursor: pointer;
&:hover{
    background-color: white;
    color: #19334d;
}
@media (min-width:600px) {
    width: 170px;
    margin-top: 20px;

}
`
export const CopyrightWrapper = styled.div`
margin-top: 20px;
grid-column: 2/3;
display:grid;
padding-bottom: 20px;
/* display: inline-block; */
p{
    font-size: 16px;
    text-align: center;
    color: white;
    font-weight: bold;
}
`
