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
export const TestimonyContainer = styled.div`
grid-column:2/3;
display:block;
text-align:center;
color:#19334d;
img{
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
h1{
    font-size:22px;
}
p{
    font-size: 20px;
    margin-top:40px;
    line-height:45px;
}
`
export const FirstTestimonyWrapper = styled.div`
    margin-top:20px;
    display:${props => props.show ? 'block' : 'none'};
`
export const SecondTestimonyWrapper = styled.div`
    margin-top:20px;
    display:${props => props.show ? 'block' : 'none'};
`
export const ThirdTestimonyWrapper = styled.div`
    margin-top:20px;
    display:${props => props.show ? 'block' : 'none'};
`

export const PaginationWrapper = styled.div`
grid-column:2/3;
margin-top:40px;
text-align:center;
display:block;
div{
    display:inline-block;
    height:20px;
    width:20px;
    border-radius: 50%;
    margin-left:10px;
}
`
export const First = styled.div`
    background-color:${props => props.color ? '#19334d' : 'gray'};
    cursor:pointer;
`
export const Second = styled.div`
    background-color:${props => props.color ? '#19334d' : 'gray'};
    cursor:pointer;
`
export const Third = styled.div`
    background-color:${props => props.color ? '#19334d' : 'gray'};
    cursor:pointer;
`
