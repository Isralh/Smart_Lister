import styled from 'styled-components'

export const Container = styled.div`
grid-column: 100%;
display: grid;
padding-top: 50px;
`
export const ContentWrapper = styled.div`
grid-template-columns: 5% 90% 5%;
display:grid;
`
export const TopHeading = styled.div`
grid-column: 2/3;
display:block;
border-top: 1px solid #19334d;
@media(min-width:600px){
    grid-column: 2/3;
    display:block;
    border-top: 1px solid #19334d;
}
h1{
    @media (min-width:320px) {
        text-align:center;
        padding-top:10px;
        color:#19334d;
        padding-bottom:20px;
    }
    @media (min-width:600px) {
        text-align:start;
    color:#19334d;
    font-size: 26px;
    font-family: serif;
    font-weight:bold;
    padding-bottom:20px;

    }
}
`
export const PropertiesWrapper = styled.div`
background-image: url(${props => props.imageurl});
width: 100%;
grid-column: 2/3;
/* margin:0 5% 0 5%; */
height: 85vh;
position: relative;
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
display: block;
@media (min-width:1024px){
    height:80vh;
}
`
export const SelectedProperties = styled.div`
height:95px;
width: 250px;
background:#19334d;
position: absolute;
left:0px;
bottom:0px;
display: block;
cursor:pointer;
`
export const Price = styled.div`
padding-left: 10px;
margin-top:-10px;
h1{
    font-size: 30px;
    background:white;
    font-weight: bolder;
    font-family: serif;    
    color: white;
    background:#19334d
}
`
export const Address = styled.div`
margin-top:-45px;
padding-left: 10px;
p{
    display:inline-block;
    font-size: 20px;
    background:white;
    font-weight: normal;
    font-family: serif;    
    color: white;
    background:#19334d
}
`
export const CityStateZip = styled.div`
padding-left: 10px;
margin-top:-45px;
p{
    display:inline-block;
    font-size: 20px;
    background:white;
    font-weight: normal;
    font-family: serif;    
    color: white;
    background:#19334d
}
`
export const RightArrow = styled.div`
position: absolute;
padding-top:110px;
right:0px;
display: block;
@media (min-width:1024px){
    padding-top:115px;

}
h1{
    font-size: 100px;
    color:#19334d;
    &:hover{
        color:white;
        cursor:pointer;
    }
}
`
export const LeftArrow = styled.div`
position: absolute;
padding-top:110px;
left:0px;
display: block;
@media (min-width:1024px){
    padding-top:115px;

}
h1{
    font-size: 100px;
    color:#19334d;
    &:hover{
        color:white;
        cursor:pointer;
    }
}
`
export const ButtonContainer = styled.div`
margin-top: 40px;
grid-column: 2/3;
text-align: center;
`
export const OurProperty = styled.button`
height: 45px;
width: 150px;
color:white;
background:#19334d;
cursor:pointer;
font-weight: bolder;
border: 1px solid #19334d;
&:hover{
    color:#19334d;
background:white;
    font-weight: bolder;
}
`
export const CursorButton = styled.button`
height: 45px;
width: 40px;
color:#19334d;
background:white;
cursor:pointer;
font-weight: bolder;
border: 1px solid #19334d;
`
export const CursorButtonChange = styled.button`
height: 45px;
width: 40px;
color:white;
background:#19334d;
cursor:pointer;
font-weight: bolder;
border: 1px solid #19334d;
`
