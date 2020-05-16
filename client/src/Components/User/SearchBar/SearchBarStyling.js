import styled from 'styled-components'

export const Container = styled.div`
display:flex;
width: 100%;
margin: 20px 0px 0 0px;
`
export const Wrapper = styled.div`
display:flex;
height: 7vh;
width: 100%;
flex-direction: row nowrap;
justify-content:center;
`
export const FontAwesomeContainer = styled.div`
   /* display:inline-block; */
    /* height: 5vh; */
    width: 10%;
    border:1.5px solid #19334d;
    background:#19334d;
    text-align:center;
`
export const FontAwesomeStyle = {
  color: 'white',
  marginTop: '7px',
  fontSize: '22px'

}

export const Input = styled.input`
/* height:5vh; */
width:70%;
border:1.5px solid #19334d;
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
