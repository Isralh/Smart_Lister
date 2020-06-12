import styled from 'styled-components'

export const Container = styled.div`
@media (min-width:320px) {
width: 100%;
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
`
