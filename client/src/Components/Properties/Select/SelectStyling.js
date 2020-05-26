import styled from 'styled-components'

export const Container = styled.div`
margin-top: 15px;
max-width:100%;
display:flex;
flex-direction:row nowrap;
@media (min-width:768px){
    margin-left:20px;
    margin-top: 5px;
}
`

export const Heading = styled.div`
/* padding-top:10%; */
margin-left:5px;
p{
    color:#19334d;
    font-size:16px;
    font-weight:bolder;
}
`

export const Price = styled.div`
margin: 15px 0 0 5px;
position:relative;
button{
    background:#19334d;
    color:white;
    border:1px solid #19334d;
    border-radius: 5px;
    &:hover{
        cursor:pointer;
    }
}
`
export const PriceContainer = styled.div`
    position:absolute;
    /* z-index:1; */
    display: ${props => props.display ? 'block' : 'none'};
    background:#19334d;
    color:white;
    width: 80px;

    li{
    list-style-type:none;
    padding-top: 10px;
    
    &:hover{
        background:white;
        color:#19334d;
        font-weight:bolder;
        cursor:pointer;
    }
}
`
export const City = styled.div`
margin: 15px 0 0 15px;
position:relative;

button{
    background:#19334d;
    color:white;
    border:1px solid #19334d;
    border-radius: 5px;
    &:hover{
        cursor:pointer;
    }
}
`
export const CityContainer = styled.div`
    position:absolute;
    /* z-index:1; */
    display: ${props => props.display ? 'block' : 'none'};
    background:#19334d;
    color:white;
    width: 120px;

    li{
    list-style-type:none;
    padding-top: 10px;

    &:hover{
        background:white;
        color:#19334d;
        font-weight:bolder;
        cursor:pointer;
    }

 
}
`
