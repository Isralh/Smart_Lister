import styled from 'styled-components'

export const Container = styled.div`
margin-top:2vh;
width:100%;
display:flex;
flex-direction: row nowrap;
justify-content: space-evenly;

h1{
    color:#19334d;
    font-size: 18px;
    height:20px;
    :hover {
        border-bottom: 2px solid #19334d;
        cursor:pointer;
    }
}
`
