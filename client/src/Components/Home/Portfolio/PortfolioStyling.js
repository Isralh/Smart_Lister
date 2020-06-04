import styled from 'styled-components'

export const Container = styled.div`
@media (min-width:320px) {
width: 100%;
/* display: grid; */
padding-top: 50px;

}
@media(min-width:375px){
    width: 100%;
}
@media(min-width:600px){
    width: 100%;
}

`
export const PortfolioWrapper = styled.div`
grid-template-columns: 5% 90% 5%;
display:grid;
@media(min-width:375px){
    grid-template-columns: 5% 90% 5%;
}
@media(min-width:600px){
    grid-template-columns: 5% 90% 5%;

}
`
export const TopHeading = styled.div`
grid-column: 2/3;
display:block;
border-top: 1px solid #19334d;
@media(min-width:600px){
    grid-column: 2/3;
    border-top: 1px solid #19334d;
}
h1{
    @media (min-width:320px) {
        text-align:center;
        padding-top:10px;
        color:#19334d;
    }
    @media (min-width:600px) {
        text-align:start;
    color:#19334d;
    font-size: 26px;
    font-family: serif;
    font-weight:bold;
    }
}
`
export const CardsWrapper = styled.div`
margin-top: 20px;
grid-column:2/3;
display: block;
@media(min-width:375px){
    grid-column:2/3;
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;

}
@media(min-width:600px){
    grid-column:2/3;
    display:flex;
    justify-content:space-between;
}
`
export const Card = styled.div`
grid-column: 2/3;
width:75%;
margin-left:35px;
margin-bottom: 10px;
display:block;
border-top: 5px solid #19334d;
border-left: 0.1px solid lightgray;
border-bottom: 0.1px solid lightgray;
border-right: 0.1px solid lightgray;
height:230px;
text-align:center;
@media (min-width:375px) {
    margin-left:0px;
    flex-basis: 48%;
    height:250px;
}
@media (min-width:600px) {
    margin-left:0px;
    flex-basis: 24%;
    height:250px;
}
@media (min-width:440px)and (max-width:374px){
    margin-left:45px;

}
/* @media (min-width:500px) and (max-width:600px){
    margin-left:75px;

} */
h1{
    margin-top: 30px;
    font-size: 55px;
    color:#19334d;
    line-height: 50px;
}
`
export const MiddleWord = styled.p`
    color:#19334d;
    font-size: 26px;
    font-weight: bold;
    margin-top: 30px;
`
export const BottomWord = styled.p`
    margin-top: 15px;
   color:#19334d;
    font-size: 26px;
    font-family: serif; 
    font-weight: normal;
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
