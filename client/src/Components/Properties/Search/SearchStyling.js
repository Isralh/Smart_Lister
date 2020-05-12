import styled from 'styled-components'

export const Container = styled.div`
@media (min-width:320px){
    width:100%;
    margin: 30px 0px 0 0px;
    text-align:center;
}
@media (min-width:320px){
    width:100%;
    margin: 30px 20px 0px -10px;
    text-align:center;
}
@media (min-width:768px){
    width:100%;

}
@media (min-width:2560px){
  margin-left:25px;
      text-align:start;
    }
div{
    display:inline-block;
    height: 27px;
    padding-top:7px;
    width: 10%;
    background:#19334d;
    text-align:center;

    @media (min-width:1200px){
      height:29px;
      padding-top:9px;
    }
    @media (min-width:1400px){
      height:31px;
      padding-top:12px;
    }
    @media (min-width:2560px){
      height:50px;
      padding-top:28px;
    }
}
`
export const Input = styled.input`
    height: 5vh;
    width:70%;
    border:1.5px solid #19334d;
    @media (min-width:320px) and (max-width:767px) {
          margin-left:15px;
    }
    @media (min-width:768px){
      width:70%;
      align-items:flex-start;
      padding-right:10px;
    }
    @media (min-width:900px){
      align-items:flex-start;
      padding-right:15px;
    }
    @media (min-width:1024px){
      align-items:flex-start;
      padding-right:35px;
    }
    @media (min-width:1200px){
      align-items:flex-start;
      padding-right:45px;
    }
    @media (min-width:1300px){
      align-items:flex-start;
      padding-right:60px;
    }
    @media (min-width:1400px){
      align-items:flex-start;
      padding-right:75px;
    }
    @media (min-width:2560px){
      align-items:flex-start;
      width:40%;
    }
    ::-webkit-input-placeholder {
  color: #19334d;
  font-size: 13px;
  padding-left:5px;
}
::-moz-placeholder {
  color: #19334d;
  font-size: 13px;
  padding-left:5px;
}
:-ms-input-placeholder {
  color: #19334d;
  font-size: 13px;
  padding-left:5px;
}
::placeholder {
  color: #19334d;
  font-size: 13px;
  padding-left:5px;
}
`
