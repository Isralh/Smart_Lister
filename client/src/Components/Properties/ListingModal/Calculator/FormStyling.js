import styled from 'styled-components'

export const CalculatorForm = styled.div`
width:100%;
margin-top: 10%;
color:#19334d;

@media (min-width:600px) {
    width:50%;
    margin-top: 0;
    }
label{
font-weight: bold;
font-size: 15px;
margin-left:10px;
}

input{
    width:65%;
    height:20px;
    margin-bottom: 15px;
    margin-left:10px;
    font-weight:bold;
    border-radius: 25px;
    input::placeholder {
    color: #19334d;
    padding-left: 5px;
    font-weight:bolder;
  }
}

`
export const Calculate = styled.button`
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
        margin-left:10%;
        width:150px;
    }
`
