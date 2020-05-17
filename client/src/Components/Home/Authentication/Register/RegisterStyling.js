import styled from 'styled-components'

export const Container = styled.div`
position:relative;
z-index:100;
width: 100%;
height:100%;
display: ${props => props.show ?  'block' :  'none'};
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
height:400px;
}
/* @media (min-width:400px){
margin: 15vh 15% 0% 15%;
background:white;
height:75vh;
}
@media (min-width:500px){
margin: 15vh 25% 0% 25%;
background:white;
height:75vh;
}
@media (min-width:650px){
margin: 15vh 30% 0% 30%;
background:white;
height:75vh;
}
@media (min-width:850px){
margin: 15vh 35% 0% 35%;
background:white;
height:75vh;
}
@media (min-width:850px){
margin: 15vh 36% 0% 36%;
background:white;
height:75vh;
} */
h1{
    padding-top:5%;
    text-align:center;
    color:#19334d;
    font-size:28px;
}
form{
    padding-top:10px;
/* justify-content:space-evenly; */
    input{
        border: 0;
  width:95%;
  height:20px;
  margin:0 0 25px 2%;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid lightgray;
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

    /* button{
    margin-left:2%;
    flex-basis:50%;
        width:40%;
         background:#19334d;
         color:white;
        font-size:25px;       
        border-radius:10px;
         cursor:pointer;
   } */
   /* p{
        text-align:center;
        color:#19334d;
        font-size:18px;
        flex-basis:50%;
        span{
            cursor:pointer;
        }
   } */
}
`
export const ButtonWrapper = styled.div`
display: flex;
flex-direction:row nowrap;
justify-content:space-between;

button{
    /* margin-left:2%;
    flex-basis:50%;
        width:40%; */
         background:#19334d;
         margin-right:2.5%;
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
    /* text-align:center; */
    margin-left:2%;
        color:#19334d;
        font-size:15px;
        /* flex-basis:50%; */
        span{
            cursor:pointer;
            font-weight:bolder;
        }
}
`
// export const ButtonContainer = styled.div`
// display:flex;
// flex-direction: row nowrap;
// justify-content:space-evenly;
//    button{
//     margin-left:2%;
//     flex-basis:50%;
//         /* width:95%; */
//          background:#19334d;
//          color:white;
//         font-size:25px;       
//         border-radius:10px;
//          cursor:pointer;
//    }
//    p{
//         text-align:center;
//         color:#19334d;
//         font-size:18px;
//         flex-basis:50%;
//         span{
//             cursor:pointer;
//         }
//    }
// `
