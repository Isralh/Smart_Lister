import styled from 'styled-components'

export const FormWrapper = styled.div`
  width:100%;
  margin-top:30px;
  border-top: 1px solid #19334d;
  margin-bottom:30px;
  p{
      margin-left:10px;
      font-size:22px;
    color:#19334d;
    font-weight:bold;}
  form{
    margin-left:10px;

  }
  input{
    width:75%;
    height:20px;
    margin-bottom: 15px;
    margin-left:10px;
    /* border-radius: 15px; */
    flex-basis:45%;

  }
  input::placeholder {
    color: #19334d;
    padding-left: 5px;
    font-weight:bolder;

  }
  button{
      margin-left:35%;
      background:#19334d;
      color:white;
      font-weight:bolder;
      height: 50px;
      border-radius: 20px;
      width:120px;
      cursor:pointer;
  }
  `
// export const PeronalInfoWrapper = styled.div`
// @media (min-wi) {
// }
//    display:flex;
//    flex-wrap:wrap;
// `
