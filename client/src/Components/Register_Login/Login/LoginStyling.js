import styled from 'styled-components'

export const Container = styled.div`
position:relative;
z-index:100;
width: 100%;
height:100%;
display: ${props => props.show ? 'block' : 'none'};
`
export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height:100vh;
  background:rgb(0,0,0,0.5);
`
export const Content = styled.div`
border:2px solid darkgray;
border-radius:10px;
position:relative;
@media (min-width:320px){
margin: 15vh 5% 0vh 5%;
background:white;
height:70vh;
}
@media (min-width:400px){
margin: 15vh 15% 0% 15%;
background:white;
height:50vh;
}
@media (min-width:500px){
margin: 15vh 25% 0% 25%;
background:white;
height:50vh;
}
@media (min-width:650px){
margin: 15vh 30% 0% 30%;
background:white;
height:50vh;
}
@media (min-width:850px){
margin: 15vh 35% 0% 35%;
background:white;
height:50vh;
}
@media (min-width:850px){
margin: 15vh 36% 0% 36%;
background:white;
height:50vh;
}
h1{
    padding-top:5%;
    text-align:center;
    color:#19334d;
    font-size:28px;
}
form{
    padding-top:10px;
    input{
        margin-left:2%;
        margin-bottom:3%;
        height:30px;
        width:95%;
        border:1px solid lightgray;
        ::-webkit-input-placeholder { 
padding-left:5px;
font-weight:bold;
}
:-moz-placeholder { 
    padding-left:5px;
    font-weight:bold;
}
::-moz-placeholder { 
    padding-left:5px;
    font-weight:bold;

}
:-ms-input-placeholder { 
    padding-left:5px;
    font-weight:bold;

}
::-ms-input-placeholder { 
    padding-left:5px;
    font-weight:bold;

}
} 
   button{
    margin-left:2%;
        width:95%;
         background:#19334d;
         color:white;
        font-size:25px;       
        border-radius:10px;
         cursor:pointer;
   }

}
p{
        text-align:center;
        color:#19334d;
        font-size:18px;

        span{
            cursor:pointer;
        }
   }

`
export const ErrorStyle = styled.div`
color:red;
font-weight:normal;
margin-bottom:5px;
margin-left:2%;
`
export const FiledSignIn = styled.div`
font-weight:normal;
margin-bottom:5px;
margin-left:2%;
display: ${props => props.failedSignIn ? 'block' : 'none'};
p{
    color:red;

}
`
