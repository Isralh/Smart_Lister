import styled from 'styled-components'

export const Container = styled.div`
width:100%;
background:white;
height:100vh;
/* display: ${props => props.viewMyListing ? 'block' : 'none'} */
`
export const LayOutWrapper = styled.div`
margin: 0vh 1% 0 1%;
@media (min-width:500px){
    margin: 5vh 10% 0 10%;
}
`
export const SectiontWrapper = styled.div`
/* width:100%; */
position:relative;
margin-top:15%;
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
export const ContentContainer = styled.div`
display:flex;
flex-direction:column;
flex-wrap: nowrap;
justify-content:flex-start;
width:100%;

@media (min-width:600px){
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:space-between;
}
`

export const FontAwesomeContainer = styled.div`
height:20px;
display:flex;
justify-content:flex-end;
margin-top:25px;
/* @media (min-width:768px){
    width:50%;
} */
`
export const Section = styled.div`
position:relative;
width:100%;
margin:15px 0 10px 0;
@media (min-width:600px){
    flex-basis:45%;
}
`
export const ImageContainer = styled.div`
  background: url(${(prop) => prop.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position:relative;
  width:100%;
  cursor:pointer;
  /* flex-basis:100%; */
  /* display:block; */
@media (min-width:320px){
    height:40vh;
}
@media (min-width:375px){
    height:50vh;
}
/* @media (min-width:768px){
    height:60vh;
    width:50%;
} */
`
export const Updates = styled.div`
margin-top:20px;
height:20px;
display:flex;
justify-content:flex-end;
/* @media (min-width:768px){
    width:40%;
} */
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
export const FontAwesomeStyle = {
  float: 'right',
  color: '#19334d',
  fontSize: '20px',
  cursor: 'pointer'
}
