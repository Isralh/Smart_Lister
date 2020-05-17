import styled from 'styled-components'

export const Container = styled.div`
position:relative;
width:100%;
height:5vh;
background:#19334d;
display:flex;
flex-direction:row nowrap;
justify-content:space-between;
padding-bottom:5px;
border-bottom:1px solid white;

p{
    font-size: 16px;
    color:white;
    margin-top:1vh;
}
button{
    background:#19334d;
    color:white;
    border:#19334d;
    margin: 0.5vh 1vh 0vh 0vh;
    cursor:pointer;
}
`
export const FontAwesomeStyle = {
  color: 'white',
  margin: '1vh 0vh 0vh 1vh'
}
