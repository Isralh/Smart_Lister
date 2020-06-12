import styled from 'styled-components'

export const Container = styled.div`
margin-top:5vh;
width:100%;
display:flex;
justify-content:space-between;
flex-wrap:nowrap;
h1{
    color:#19334d;
    font-size:15px;
    height:20px;
    cursor:pointer;
    @media (min-width:320px){
    font-size: 11px;
}
@media (min-width:500px){
        font-size: 14px;
}
}
`
export const MyListing = styled.h1`
    border-bottom:${props => props.active ? '2px solid #19334d' : 'none'};
    :hover {
        border-bottom: 2px solid #19334d;
    }
`
export const PostProperty = styled.h1`
    border-bottom:${props => props.active ? '2px solid #19334d' : 'none'};
    :hover {
        border-bottom: 2px solid #19334d;
    }
`
export const Favorties = styled.h1`
    border-bottom:${props => props.active ? '2px solid #19334d' : 'none'};
    :hover {
        border-bottom: 2px solid #19334d;
    }
`
export const Account = styled.h1`
    border-bottom:${props => props.active ? '2px solid #19334d' : 'none'};
    :hover {
        border-bottom: 2px solid #19334d;
    }

`
