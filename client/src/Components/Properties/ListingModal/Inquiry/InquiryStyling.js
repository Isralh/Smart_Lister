import styled from 'styled-components'
export const Container = styled.div`
width:100%;
margin: 40px 0 5% 0;
/* border-top: 1px solid #19334d; */
@media (min-width:600px) {
  margin-bottom:5%;
    }
`
export const Heading = styled.div`
  margin-left:10px;
p{
    font-size:22px;
  color:#19334d;
  font-weight:bold;
}
`
export const ContentWrapper = styled.div`
`

export const FormContainer = styled.div`
width:100%;
color:#19334d;
width:100%;
label{
font-weight: bold;
font-size: 15px;
margin-left:10px;
}
`
export const Input = styled.input`
    width:65%;
    height:20px;
    margin: 0 0 15px 10px;
    font-weight:bold;
    @media(min-width:600px){
        width:50%;

}
`
export const Message = styled.input`
    width:65%;
    height:100px;
    margin: 0 0 15px 10px;
    font-weight:bold;
    @media(min-width:600px){
        width:50%;
        text-align:justify;

}
`
export const Button = styled.button`
    margin-left:20%;
    background:#19334d;
    color:white;
    font-weight:bolder;
    height: 50px;
    border-radius: 20px;
    width:120px;
    cursor:pointer;
    @media (min-width:425px) {
        margin-left:22%;
    }
    @media (min-width:600px) {
        margin-left:15%;
        width:150px;
    }
    @media (min-width:1200px) {
        margin-left:17%;
        width:150px;
    }
`
