import styled from 'styled-components'

export const ListingContainer = styled.div`
text-align:center;
margin: ${props => props.margins};
/* margin: 20vh 0 0 5%; */

@media (min-width:768px){
    margin: 25vh;
}

`
export const PropertiesContainer = styled.div`
text-align:center;
margin: 20vh 0 0 5%;

@media (min-width:768px){
    margin: 25vh;
}

`