import styled from 'styled-components'

export const Container = styled.div`
width:100%;
display: ${props => props.viewForm ? 'block' : 'none'}
`
export const StepHeading = styled.div`
display:flex;
margin:0% 5% 0 5%;
justify-content:space-evenly;

p{
    color:#19334d;
    font-size: 16px;
    height:20px;
    /* border-bottom: 1px solid #19334d; */
}
     
`
