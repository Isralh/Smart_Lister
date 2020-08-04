import styled from 'styled-components'

export const FormWrapper = styled.div`
background:white;
border:1px solid lightgray;
border-radius:10px;
display: ${props => props.viewMyListing ? 'block' : 'none'};
@media (min-width:320px){
    margin:5% 10% 0% 10%;
    padding-bottom:15px;
    width:80%;
}
form{
    input{
  border: 0;
  width:95%;
  height:20px;
  margin:15px 0 15px 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid lightgray;
}
label{
    color:#19334d;
    font-size: 16px;
    font-weight:bold;
}
}
`
export const StepHeading = styled.div`
display:flex;
margin:0% 5% 0 5%;
flex-direction:column;
p{
    color:#19334d;
    font-size: 16px;
    text-decoration:underline solid #19334d;
    text-align:center;
}
`
export const ErrorStyle = styled.div`
color:red;
font-weight:normal;
margin-bottom:5px;
margin-left:2%;
`
export const FirstStep = styled.div`
display: ${props => props.activeStep ? 'block' : 'none'};
margin-left:5%;
`
export const SecondStep = styled.div`
display: ${props => props.activeStep ? 'block' : 'none'};
margin-left:5%;
`
export const ButtonContainer = styled.div`
margin-top:15px;
display:flex;
flex-direction:row nowrap;
justify-content: space-between;
margin:15px 5% 0% 5%;
`
export const Previous = styled.button`
height:40px;
background:#19334d;
color:white;
width:80px;
border-radius:15px;
cursor:pointer;
`
export const Cancel = styled.button`
height:40px;
background:#19334d;
color:white;
width:80px;
border-radius:15px;
cursor:pointer;
`
export const Next = styled.button`
height:40px;
background:#19334d;
color:white;
width:80px;
border-radius:15px;
cursor:pointer;
`
export const ImagePreview = styled.div`
display:flex;
flex-direction:column;
flex-wrap: nowrap;
justify-content:flex-start;
width:95%;
margin:0% 0% 5% 0%;
@media (min-width:600px){
    flex-direction:row;
    flex-wrap: wrap;
}

`
export const ImageContainer = styled.div`
position:relative;
width:95%;
margin-top:3%;
@media (min-width:600px){
    flex-basis:45%;
}
@media (min-width:1024px){
    flex-basis:32%;
    margin-left: 1%;
}
`
export const Images = styled.div`
  background: url(${(prop) => prop.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position:relative;
  width:100%;
  cursor:pointer;
  height:40vh;
  @media (min-width:1024px){
      height:45vh;
  }
`
export const DeletButton = styled.div`
width:100%;
height:25px;
display:flex;
justify-content:flex-end;
`
export const FontAwesomeStyle = {
  float: 'right',
  color: '#19334d',
  fontSize: '20px',
  cursor: 'pointer',
  margin: '5px 0 0 0'
}
