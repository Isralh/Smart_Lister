import styled from 'styled-components'
export const Container = styled.div`
position: relative;
width:100%;
height:60vh;
background: url(${props => props.background});
background-size:cover;
background-position:50% 50%;
@media (min-width:1024px){
height:55vh;
}
`
export const PaginationContainer = styled.div`
bottom:0;
left:0;
height:40px;
width:100%;
background:#19334d;
display:flex;
flex-direction: row;
justify-content:space-between;
position: relative;
div{
  @media (min-width: 1024px){
    margin-left:10px;
  }
}
`
export const MoveRight = styled.button`
height:30px;
width:35px;
color:black;
margin-left:5px;
background:white;
border: 1px solid #19334d;
text-align:center;
margin-top:5px;
border-radius:5px;
cursor:pointer;
`
export const MoveLeft = styled.button`
  height:30px;
  width:35px;
color:black;
margin-left:5px;
background:white;
border: 1px solid #19334d;
text-align:center;
margin-top:5px;
border-radius:5px;
cursor:pointer;
`
export const ImageCounter = styled.div`
display:flex;
right:50;
p{
  color:white;
}
`
export const FavoriteIcon = styled.div`
display:flex;
position: relative;
right:0;
margin-right:5%;
margin-top:10px;
cursor:pointer;
`
export const FontAwesomeStyle = {
  color: 'white', height: '20px', width: '25px'
}

export const Tip = styled.div`
z-index: 100000000;
`