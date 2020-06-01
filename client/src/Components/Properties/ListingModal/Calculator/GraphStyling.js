import styled from 'styled-components'

export const GraphContainer = styled.div`
  width:100%;
  margin-top: 20px;
  margin-left:10px;
  @media (min-width:600px){
    margin-left:0px;
    margin-top: 5px;
    max-width:60%;
    }
    /* @media (min-width:1440px){
    margin-left:0px;
    margin-top: 5px;
    max-width:40%;
    /* height: 5vh; */
    } */
  p{
      text-align:center;
      margin-right: 3%;
      color:#19334d;
    font-weight:bold;
    font-size:12px;
  }
  `
export const GraphWrapper = styled.div`
@media (min-width:1440){
  margin-top: -50px;

}
  `
