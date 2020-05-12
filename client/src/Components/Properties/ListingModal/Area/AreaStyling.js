import styled from 'styled-components'
export const Container = styled.div`
/* border-top: 1px solid #19334d; */
margin-top: 30px;
width:100%;
`
export const Heading = styled.div`
  margin-left:10px;
p{
    font-size:22px;
  color:#19334d;
  font-weight:bold;
}
`
export const ParagraphWrapper = styled.div`
  margin:-20px 10px 0px 10px;
  overflow:hidden;
p{
    text-align: justify;
    font-size: 18px;
    color: #19334d;
    line-height: 25px;
}
`
export const Description = styled.div`
margin-top: 10px;
display:flex;
flex-direction:row nowrap;
justify-content:start;
`
export const FirstColumn = styled.div`
  margin-left:10px;
  flex-direction:column;
  color:#19334d;
  h1{
      font-size:16px;
  }
  p{  
      margin-top:-5px;
      padding-bottom:15px;
  }
`
export const SecondColumn = styled.div`
margin-left:35%;
flex-direction:column;
color:#19334d;
h1{
      font-size:16px;
  }
  p{  
      margin-top:-5px;
      padding-bottom:15px;
  }
`
