import styled from 'styled-components'

export const Container = styled.div`
width:100%;
background:white;
height:100vh;
`
export const LayOutWrapper = styled.div`
margin: 0vh 1% 0 1%;
@media (min-width:500px){
    margin: 5vh 10% 0 10%;
}
`
export const ContentWrapper = styled.div`
/* width:100%; */
position:relative;
/* margin-top:15%; */
margin: 5vh 1% 0 1%;
@media (min-width:500px){
    margin: 5vh 10% 0 10%;
}
`
export const TopHeading = styled.div`
margin-top: 8vh;
h1{
    font-size: 22px;
    color:#19334d;
}
`
export const Updates = styled.div`
margin-top:20px;
height:20px;
display:flex;
justify-content:flex-end;
@media (min-width:768px){
    width:40%;
}
div{
    height:10x;
width:60px;
/* margin-top:5px; */
/* margin-top:-10px; */
background:#19334d;
cursor:pointer;
border:1px solid white;
p{
    font-size:15px;
    margin-top:0px;
    text-align:center;
    color:white;
    font:bold;
}
}
`
export const ImageContainer = styled.div`
  background: url(${(prop) => prop.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position:relative;
  cursor:pointer;
  display:flex;
@media (min-width:320px){
    height:45vh;
}
@media (min-width:375px){
    height:45vh;
}
@media (min-width:600px){
    height:55vh;
}
@media (min-width:768px){
    height:55vh;
    width:40%;
}
`
export const ListingWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 60px;
    width: 170px;
    background:#19334d;
    cursor:pointer;
    bottom:0;
    @media (min-width:768px){
        height: 80px;
        width: 170px;
}

`
export const Price = styled.p`
       margin-top:5px;
      margin-left: 5px;
      font-size: 14px;
      color:  white;
      @media (min-width:768px){
        font-size: 16px;
}
`
export const Address = styled.p`
  margin-left: 5px;
  margin-top: -15px;
  font-size: 14px;
  color:  white;
  @media (min-width:768px){
        font-size: 16px;
}
`
export const City = styled.p`
  margin-left: 5px;
  margin-top: -15px;
  font-size: 14px;
  color:  white;
  @media (min-width:768px){
        font-size: 16px;
}
`
export const NoListing = styled.h1`
margin: 30vh 0 0 0;
text-align: center;
color:#19334d;
`
