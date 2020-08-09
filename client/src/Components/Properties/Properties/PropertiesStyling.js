import styled from 'styled-components'

export const Container = styled.div`
@media (min-width:320px) {
    width:100%;
    position:absolute;
}
`
export const ContentContainer = styled.div`
@media (min-width:320px) {
    margin: 10px 0 0 0;
}
@media (min-width:768px) {
    margin: 10px 0 0 0;
    grid-template-columns: 50% 50%;
    display:grid;
}
`
export const MapContainer = styled.div`
@media (min-width:768px){
    grid-column:1/2;
    margin-top: 5px;
}
@media (max-width:767px){
    display:none;
}
`
export const ListingContainer = styled.div`
@media (min-width:768px) {
    grid-column:2/3;
    margin-top: -20px;
}
`
