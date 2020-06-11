import styled from 'styled-components'

export const Container = styled.div`
grid-template-columns: 100%;
display:grid;
height:100vh;
width: 100%;
`
export const Styling = styled.div`
    background:url(${prop => prop.FrontImage});
    background-repeat:no-repeat;
    background-size:cover;
    position:relative;
    background-position: 50% 50%;
    max-width: 100%;
  height: 100vh;
`
