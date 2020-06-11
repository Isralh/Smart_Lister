import styled from 'styled-components'

export const Container = styled.div`
grid-template-rows: repeat(100px, auto);
height: 90vh;
width:100%;
background:url(${prop => prop.FrontImage});
background-repeat:no-repeat;
background-size: cover;
  background-position: 50% 50%;
  position:relative;
`
export const ButtonContainer = styled.div`
margin-top: 15px;
    display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
button{

    /* margin-top: 5px; */
  height: 55px;
  font-size:20px;
  width: 150px;
  background: #19334d;
  color: white;
  border: 1px solid white;
  cursor:pointer;
  &:hover{
    background:white;
    color:#19334d;
    border: 1px solid #19334d;
    font-weight:bolder;
  }
}
`
export const Button = styled.button`
  margin-top: 5px;
  height: 55px;
  font-size:20px;
  width: 150px;
  background: #19334d;
  color: white;
  border: 1px solid white;
  cursor:pointer;
  &:hover{
    background:white;
    color:#19334d;
    border: 1px solid #19334d;
    font-weight:bolder;
  }
`
export const WelcomeMessage = styled.div`
/* height: 85vh; */

h1{
    margin-top:35vh;
    display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  color:white;
  font-size: 30px;
  font-weight:bolder;

  @media (min-width:768px){
    font-size: 50px;

  }
}
`
