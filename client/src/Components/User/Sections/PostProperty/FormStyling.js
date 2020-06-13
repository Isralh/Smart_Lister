import styled from 'styled-components'

export const Container = styled.div`
width:100%;
background:white;
height:100vh;
/* display: ${props => props.viewForm ? 'block' : 'none'}; */
`
export const LayOutWrapper = styled.div`
margin: 0vh 1% 0 1%;
@media (min-width:500px){
    margin: 5vh 10% 0 10%;
}
`
export const FormWrapper = styled.div`
background:white;
border:1px solid lightgray;
border-radius:10px;
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
export const ListForm = styled.form`
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
justify-content:${props => props.changeFlex ? 'space-between' : 'flex-end'};
margin:15px 5% 0% 5%;
`
export const Previous = styled.button`
height:40px;
background:#19334d;
color:white;
width:80px;
border-radius:15px;
display: ${props => props.showButton ? 'block' : 'none'};
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
export const ErrorStyle = styled.div`
color:red;
font-weight:normal;
margin-bottom:5px;
`
