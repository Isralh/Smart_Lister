import styled from 'styled-components'

export const Container = styled.div`
margin-top:2vh;
width:100%;
/* height:100vh; */
display:flex;
flex-direction: row nowrap;
justify-content: space-evenly;

h1{
    color:#19334d;
    font-size: 18px;
    height:20px;
    :hover {
        /* text-decoration:underline;
        text-decoration-color:lightblue; */
        border-bottom: 3px solid lightblue;
        cursor:pointer;
    }
}
`
