import styled from 'styled-components'

// MobileView Styling
export const MobileViewContainer = styled.div`
@media (min-width: 320px){
    margin-top: 50px;
position: relative;
margin-left:5px;
margin-right:5px;
}
@media (min-width:600px){
    display:none;
}
`
export const Content = styled.div`
position:relative;
height:70vh;
width:100%;
`
export const ImageContainer = styled.div`
position:relative;
height:70vh;
width:100%;
background-image:url(${prop => prop.backgroundImage});
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
 &:hover {
     opacity: 0.7;
}
p{
padding-top: 35vh;
font-size: 26px;
font-family: Helvetica, sans-serif;
font-weight: bold;
color: white;
text-align:center;
}
`
export const Pagination = styled.div`
text-align:center;
/* padding-top:10px; */
padding-right:20px;
p{
    margin-left: 20px;
    display:inline-block;
    font-size: 26px;
    font-weight: bolder;
color: #19334d;
}
`
export const ButtonContainer = styled.div`
/* margin-top: 10px; */
grid-column: 2/3;
text-align: center;
`

export const ExploreCommunities = styled.button`
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
// TableDesktop View

export const TableDesktopContainer = styled.div`
@media (min-width: 600px) {
margin-top: 60px;
position: relative;
height:70vh;
width:100%;
grid-template-columns: repeat(auto-fit,(100%));
grid-gap:5px;
display:grid;
}
@media (max-width:599px){
    display:none;
}
`
export const SectionWrapper = styled.div`
margin-left:5px;
margin-right:5px;
   grid-column:1/2;
    display:flex;
    justify-content:space-between;
`
export const CommunitiesDiv = styled.div`
flex-basis: 33.2%;
height:70vh;
background:url(${prop => prop.communityImage});
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
`
export const CityName = styled.p`
font-size: 22px;
font-family: Helvetica, sans-serif;
font-weight: bold;
color: white;
vertical-align: middle;
text-align:center;
padding-top:30vh;
`
export const ButtonWrapper = styled.div`
padding-top: 40px;
grid-column: 1/2;
text-align: center;
display: block;
`

export const Communities = styled.button`
height: 45px;
width: 180px;
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
export const ButtonCursor = styled.button`
height: 45px;
width: 40px;
color:#19334d;
background:white;
cursor:pointer;
font-weight: bolder;
border: 1px solid #19334d;
`
export const ButtonChange = styled.button`
height: 45px;
width: 40px;
color:white;
background:#19334d;
cursor:pointer;
font-weight: bolder;
border: 1px solid #19334d;
`
