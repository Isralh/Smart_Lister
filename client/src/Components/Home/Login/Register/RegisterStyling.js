import styled from 'styled-components'

export const Container = styled.div`
position:relative;
z-index:100;
width: 100%;
height:100%;
display: ${props => props.show ? 'block' : 'none'};
`
export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height:100vh;
  background:rgb(0,0,0,0.5);
`
export const Content = styled.div`
@media (min-width:320px){
  height:95vh;
  position: relative;
  background-color: #fefefe;
  margin: 5% 1% 0 1%;
  width: 100%;
}
`
