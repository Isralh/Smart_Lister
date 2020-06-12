import styled from 'styled-components'

export const Container = styled.div`
height:10vh; 
background:#19334d;
width: 100%;
display:flex;
justify-content: space-between;
top: 0;
`
export const CompanyName = styled.div`
p{
    font-family: serif;
    font-size: 30px;
    color:white;
    margin-top:15px;
    margin-left: 15px;
}
`
export const ListWrapper = styled.div`
z-index:1;
ul{
    list-style:none;
    display:flex;
    flex-flow: row nowrap;
    padding-right:10px;
    @media (max-width:765px){
        transform:${prop => prop.open ? 'translateX(0%)' : 'translateX(100%)'};
        flex-flow:column nowrap;
        background:#19334d;
        position:fixed;
        top:0;
        right:0;
        padding-top: 50px;
}

li{
    color:white;
    font-family: serif;
    font-size: 16px;
    margin: 10px 8px;
    cursor:pointer;
}
}
`
export const NavLink = styled.div`
width: 32px;
height: 32px;
position:absolute;
top:15px;
right:20px;
display:flex;
justify-content:space-around;
flex-flow:column nowrap;
/* margin-top: 5px; */
z-index: 2;
display:none;
cursor: pointer;
@media (max-width:765px) {
display:flex;
justify-content:space-around;
flex-flow:column nowrap;
}
div{
    width:32px;
    height: 4px;
    background: white;
    border-radius: 1px;
    transform-origin:1px;
    transition: all 0.3s linear;
    &:nth-child(1){
        transform: ${prop => prop.open ? 'rotate(45deg)' : 'rotate(0)'}
    }
    &:nth-child(2){
        transform: ${prop => prop.open ? 'translateX(100%)' : 'translateX(0%)'};
        opacity: ${prop => prop.open ? 0 : 1}
    }
    &:nth-child(3){
        transform: ${prop => prop.open ? 'rotate(-45deg)' : 'rotate(0)'}
    }
}
`
export const AccountContainer = styled.div`
display:${props => props.initialView ? 'block' : 'none'};
background:#19334d;
color:white;
/* height: 10vh; */
div{
    color:white;
    font-family: serif;
    /* font-size: 18px; */
    margin-top: 10px;
    padding-bottom:5px;
    cursor:pointer;
    background:#19334d;
    :hover{
        background:white;
        color:#19334d;
    }
}
`
