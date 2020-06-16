import styled from 'styled-components'

export const ModalWrapper = styled.div`
display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height:100vh;
  background:rgb(0,0,0,0.5);
`
export const Content = styled.div`
border:1px solid lightgray;
border-radius:5px;
position:relative;
@media (min-width:320px){
margin: 20vh 10%  0% 10%;
background:white;
}
@media (min-width:550px){
margin: 20vh 22%  0% 22%;
background:white;
}
@media (min-width:768px){
margin: 20vh 28%  0% 28%;
background:white;
}
@media (min-width:900px){
margin: 20vh 30%  0% 30%;
background:white;
}
@media (min-width:1000px){
margin: 20vh 35% 0% 35%;
background:white;
}
@media (min-width:1300px){
margin: 20vh 38% 0% 38%;
background:white;
}
@media (min-width:2559px){
margin: 25vh 42% 0% 42%;
background:white;
}
h1{
    padding-top:5%;
    text-align:center;
    color:#19334d;
    font-size:28px;
}
form{
    padding-top:5px;
    input{
        border: 0;
  width:90%;
  height:20px;
  margin:0 0 25px 2%;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid lightgray;
} 
label{
  margin-left:2%;
color:#19334d;
}
}
`
export const ButtonWrapper = styled.div`
display: flex;
flex-direction:row nowrap;
justify-content:space-between;
margin-bottom:15px;
button{
         background:#19334d;
         margin-right:7.5%;
         color:white;
        font-size:18px;
        width:90px;
        height:45px;       
        border-radius:10px;
         cursor:pointer;
         :hover{
             color:#19334d;
             background:white;
             font-weight:bolder;

         }
} p{
    margin-left:2%;
        color:#19334d;
        font-size:15px;
        span{
            cursor:pointer;
            font-weight:bolder;
        }
}
`
export const ErrorStyle = styled.div`
color:red;
font-weight:normal;
margin-bottom:5px;
margin-left:2%;
`
export const FontAwesomeStyle = {
  float: 'right',
  color: '#19334d',
  fontSize: '20px',
  cursor: 'pointer'

}
