import styled from 'styled-components'

export const Container = styled.div`
  position:relative;
  @media (min-width: 320px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, (100%));
    display: grid;
  }
  @media (min-width: 600px) {
    margin-top: 20px;
    width: 100%;
    grid-template-columns: repeat(auto-fit, (100%));
    display: grid;
  }
  /* overflow: ${props => props.overflow ? 'auto' : 'hidden'} */
`
export const SectionWrapper = styled.div`
  width: 100%;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  position:relative;
  @media (min-width: 600px) {
  width: 100%;
  grid-column: 1/2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  }
  @media (min-width:768px){
  width: 100%;
  grid-column: 1/2;
  display: flex;
  flex-direction: row wrap;
  justify-content: flex-start;
  overflow-y:auto;
  margin-left:20px;
  width:90%;
  height:82vh;
  }
  ::-webkit-scrollbar{
width:5px;
/* color:black; */
}
::-webkit-scrollbar-track{
  background:gray;
  }
`
export const HouseListing = styled.div`
  max-width: 100%;
  height: 50vh;
  margin: 0 5px 15px 5px;
  background: url(${(prop) => prop.ListingImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position:relative;
  @media (min-width: 600px) {
flex-basis:48%;
position:relative;

  }
  @media (min-width: 768px) {
    flex-basis:45%;
position:relative;
height: 40vh;

  }
  @media (min-width:1020px){
    &:hover{
        cursor:pointer;
        transform: scale(1.02);
    }
  }
`
export const ListingWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 37.6vh;
    height: 70px;
    width: 190px;
    background:#19334d;
    cursor:pointer;
    bottom:0;
    @media (min-width: 768px) and (max-width:1200px) {
      margin-top: 29.5vh;
      height: 60px;
      width:100%;
  }
`
export const Price = styled.h1`
       margin-top:-1px;
      margin-left: 5px;
      font-size: 22px;
      z-index: 1;
      color:  white;
      @media (min-width: 768px) {
        font-size: 20px;
        margin-top:0px;
  }
`
export const Address = styled.p`
  margin-left: 5px;
  margin-top: -15px;
  font-size: 16px;
  z-index: 1;
  color:  white;
  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: -10px;

  }
`
export const City = styled.p`
  margin-left: 5px;
  margin-top: -15px;
  font-size: 16px;
  z-index: 1;
  color:  white;
  @media (min-width: 768px) {
    font-size: 14px;

  }
`
export const AddtoFavorite = styled.div`
position:relative;
justify-content:flex-end;
height:25px;
width:30px;
background:#19334d;
margin: 1vh 0vh 0vh 1vh;
cursor:pointer;
`
