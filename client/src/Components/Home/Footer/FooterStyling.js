import styled from 'styled-components'

export const SectionWrapper = styled.div`
margin-top:100px;
width: 100%;
background:  #19334d;
grid-template-columns: 15% 70% 15%;
display:grid;
/* @media (min-width:500px) and (max-width:550px){
    margin-left:75px;

} */
@media (min-width:600px) {
    display:grid;
    grid-template-columns:repeat(auto-fit, 33% 33% 33%);
    justify-content:center;
}
`
export const AboutCompanyWrapper = styled.div`
padding-top: 40px;
width: 100%;
text-align:center;
grid-column: 2/3;
display:grid;
@media (min-width:600px) {
    display:grid;
    grid-column:1/2
}
`
export const CompanyInfoWrapper = styled.div`
h1 {
    font-size: 24px;
    font-family: Helvetica, sans-serif;
    color: white;
    font-weight: bold;
    text-align:center;
    padding-bottom:5px;
}
    p{
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    color: white;
    line-height: 5px;
    font-weight: bold;
    padding-top:5px;
    @media (min-width:600px) {
        /* padding-top:5px; */

}
}

`
export const LinksSectionWrapper = styled.div`
width: 100%;
padding-top:40px;
text-align: center;
grid-column: 2/3;
display:grid;
@media (min-width:600px) {
    display:grid;
    grid-column: 2/3;
}
a{
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    color: white;
    font-weight: bold;
    line-height: 15px;
    text-decoration: underline;
    margin-top:15px;
    @media (min-width:600px) {
        line-height: 0px;

}
}
`
export const UpdatesWrapper = styled.div`
padding-top: 40px;
grid-column: 2/3;
display:grid;
@media (min-width:600px) {
    display:grid;
    grid-column: 3/4;
}
`
export const SignUp = styled.p`
font-size: 18px;
text-align: center;
/* margin-top: 50px; */
font-family: Helvetica, sans-serif;
color: white;
font-weight: bold;
`
export const Input = styled.input`
/* padding-top: 10px; */
width: 70%;
margin-top: 10px;
/* margin-left: 20px; */
@media (min-width:600px) {
    height:25px;

}
`
export const InputText = styled.p`
text-align:justify;
  width: 100%;
  padding-top: 10px;
  margin: 0px 0;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  color: white;
  font-size: 15px;
  font-weight: bold;
  /* padding-left:50px; */
`
export const Form = styled.form`
/* margin-top: 10px; */
text-align:center;
`
export const Button = styled.button`
margin-top: 30px;
width: 200px;
border-radius: 120px;
padding: 10px;
background-color:#19334d;
color: white;
font-weight: bold;
font-size: 16px;
transition-duration: 1s;
transition-property: background;
cursor: pointer;
&:hover{
    background-color: white;
    color: #19334d;
}
@media (min-width:600px) {
    width: 170px;
    margin-top: 20px;

}
`
export const CopyrightWrapper = styled.div`
margin-top: 20px;
grid-column: 2/3;
display:grid;
padding-bottom: 20px;
/* display: inline-block; */
p{
    font-size: 16px;
    text-align: center;
    color: white;
    font-weight: bold;
}
`
// export const SectionWrapper = styled.div`
// grid-template-rows: repeat(100px, auto);
// grid-template-columns: repeat(3, 1fr) ;
// display: grid;
// border-bottom: 1px solid lightgray;
// background:  #19334d;
// `
// export const AboutCompanyWrapper = styled.div`
// grid-column: 1/2;
// display: grid;
// `
// export const CompanyInfoWrapper = styled.div`
// grid-column: 1/2;
// display: inline-block;
// padding-top: 40px;
// text-align:center;
// padding-left: 160px;
// h1 {
//     font-size: 24px;
//     font-family: Helvetica, sans-serif;
//     color: white;
//     font-weight: bold;
//     text-align:center;
//     padding-bottom: 5px;
// }
//     p{
//      margin-top: -5px;
//     font-size: 16px;
//     font-family: Helvetica, sans-serif;
//     color: white;
//     line-height: 15px;
//     font-weight: bold;
// }
// `
// export const LinksSectionWrapper = styled.div`
// grid-column: 2/3;
// display: inline-block;
// `
// export const LinksWrapper = styled.div`
// grid-column: 2/3;
// padding-top: 20px;
// padding-left: 160px;
// /* text-align:center; */
// `
// export const InfoLinksWrapper = styled.div`
// padding-top: 75px;
// padding-left: 5px;
// a{
//     font-size: 16px;
//     font-family: Helvetica, sans-serif;
//     color: white;
//     font-weight: bold;
//     line-height: 35px;
//     text-decoration: underline;
//     text-align: justify;
// }
// `
// export const UpdatesWrapper = styled.div`
// grid-column: 3/4;
// display: inline-block;
// padding-right: 60px;
// padding-top: 30px;
// `
// export const SignUp = styled.p`
// font-size: 18px;
// text-align: justify;
// /* margin-top: 50px; */
// font-family: Helvetica, sans-serif;
// padding-left: 30px;
// color: white;
// font-weight: bold;
// `
// export const Input = styled.input`
// /* padding-top: 10px; */
// width: 70%;
// /* margin-left: 20px; */
// `
// export const InputText = styled.p`
//   width: 100%;
//   padding-top: 10px;
//   margin: 0px 0;
//   box-sizing: border-box;
//   font-family: Helvetica, sans-serif;
//   color: white;
//   font-size: 15px;
//   font-weight: bold;
// `
// export const Form = styled.form`
// padding-left: 30px;
// margin-top: -15px;
// `
// export const Button = styled.button`
// margin-top: 30px;
// width: 200px;
// margin-left: 35px;
// border-radius: 120px;
// padding: 10px;
// background-color:#19334d;
// color: white;
// font-weight: bold;
// font-size: 16px;
// transition-duration: 1s;
// transition-property: background;
// cursor: pointer;
// &:hover{
//     background-color: white;
//     color: #19334d;
// }
// `
// export const CopyrightWrapper = styled.div`
// grid-column: 1/4;
// display: block;
// margin-top: -20px;
// /* display: inline-block; */
// p{
//     font-size: 16px;
//     text-align: center;
//     color: white;
//     font-weight: bold;
// }
// `
