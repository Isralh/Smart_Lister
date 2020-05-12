import styled from 'styled-components'

export const Container = styled.div`
grid-column: 100%;
display: grid;
margin-top: 50px;
`
export const Wrapper = styled.div`
grid-template-columns: 5% 90% 5%;
display: grid;
grid-auto-rows: minmax(100px, auto);
`
export const BioContainer = styled.div`
grid-column: 2/3;
display: block;
border-top: 0.2px solid #19334d;
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
export const CompanyBio = styled.div`
grid-column: 2/3;
display: block;
/* padding-top: 10px; */
@media (min-width:1020px) {
    padding-left: 45px;

}

p{
    color:#19334d;
    font-size: 20px;
    font-family: serif;
    line-height: 45px;
    font-weight: normal;
    text-align: center;

}
`
export const ButtonContainer = styled.div`
grid-column: 2/3;
display: block;
padding-top: 40px;
/* padding-left: 45px; */
text-align:center;
`
export const AboutUsButton = styled.button`
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
