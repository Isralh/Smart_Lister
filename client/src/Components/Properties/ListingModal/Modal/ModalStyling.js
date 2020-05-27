import styled from 'styled-components'
export const Container = styled.div`
width: 100%;
height:100%;
display: ${props => props.show ? 'block' : 'none'}; 
/* display: ${props => props.show ? 'none' : 'block'};  */
position:relative;
`
export const ListingModal = styled.div`
  position: fixed;
  /* z-index: 1; */
  left: 0;
  top: 0;
  width: 100%;
  height:100vh;
  background:rgb(0,0,0,0.5);
`
export const Content = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: 25% 1% 0 2%;
  width: 95%;
  @media (min-width:375px) {
    margin: 20% 1% 0 2%;
    width: 95%;
  }
  @media (min-width:600px) {
    margin: 10% 1% 0 2%;
    width: 95%;
  }
  @media (min-width:768px) {
    margin: 10% 1% 0 2.5%;
    width:95%;
  }
  @media (min-width:1024px) {
    margin: 5% 10% 0 20%;
    max-width:60%;
  }
`
export const HouseDescription = styled.div`
overflow-y:scroll;
height:75vh;
@media (min-width:1024px) {
  height:80vh;

  }
`
