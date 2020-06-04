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