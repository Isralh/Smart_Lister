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
