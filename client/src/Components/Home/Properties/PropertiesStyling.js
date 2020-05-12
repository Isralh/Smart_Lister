import styled from 'styled-components'

export const Container = styled.div`
grid-column: 100%;
display: grid;
padding-top: 50px;

`
export const PropertiesWrapper = styled.div`
background-image: url(${props => props.imageurl});
width: 100%;
height: 100vh;
position: relative;
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
display: block;
`
export const SelectedProperties = styled.div`
height: 120px;
width: 250px;
background:#19334d;
position: absolute;
left:0px;
bottom:0px;
display: block;
cursor:pointer;
`
export const Price = styled.div`
padding-left: 10px;
margin-top:-10px;
h1{
    font-size: 30px;
    background:white;
    font-weight: bolder;
    font-family: serif;    
    color: white;
    background:#19334d
}
`
export const Address = styled.div`
margin-top:-25px;
padding-left: 10px;
p{
    display:inline-block;
    font-size: 20px;
    background:white;
    font-weight: normal;
    font-family: serif;    
    color: white;
    background:#19334d
}
`
export const CityStateZip = styled.div`
padding-left: 10px;
margin-top:-35px;
p{
    display:inline-block;
    font-size: 20px;
    background:white;
    font-weight: normal;
    font-family: serif;    
    color: white;
    background:#19334d
}
`
export const RightArrow = styled.div`
position: absolute;
padding-top:150px;
/* padding-right: 30px; */
right:0px;
display: block;
h1{
    font-size: 100px;
    color:#19334d;
    &:hover{
        color:white;
        cursor:pointer;
    }
}
`
export const LeftArrow = styled.div`
position: absolute;
padding-top:150px;
/* padding-right: 30px; */
left:0px;
display: block;
h1{
    font-size: 100px;
    color:#19334d;
    &:hover{
        color:white;
        cursor:pointer;
    }
}
`
// export const ButtonContainer = styled.div`
// padding-top: 60px;
// text-align: center;
// `

// export const OurProperty = styled.button`
// height: 45px;
// width: 180px;
// color:white;
// background:#19334d;
// cursor:pointer;
// font-weight: bolder;
// border: 1px solid #19334d;
// &:hover{
//     color:#19334d;
// background:white;
//     font-weight: bolder;
// }
// `
// export const CursorButton = styled.button`
// height: 45px;
// width: 40px;
// color:#19334d;
// background:white;
// cursor:pointer;
// font-weight: bolder;
// border: 1px solid #19334d;
// `
// export const CursorButtonChange = styled.button`
// height: 45px;
// width: 40px;
// color:white;
// background:#19334d;
// cursor:pointer;
// font-weight: bolder;
// border: 1px solid #19334d;
// `
