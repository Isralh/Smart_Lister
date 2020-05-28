
import styled from 'styled-components'
export const InfoWrapper = styled.div`
 width: 200px;
  height: 200px;
  background: url(${(prop) => prop.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position:relative;
  cursor:pointer;
`
export const mapCenter = {
  lat: 40.04,
  lng: -75.46
}
export const containerStyle = {
  width: '100%',
  height: '98vh'
}
export const ListingWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    /* margin-top: 37.6vh; */
    height: 60px;
    width: 150px;
    background:#19334d;
    cursor:pointer;
    bottom:0;
`
export const Price = styled.p`
       margin-top:5px;
      margin-left: 5px;
      font-size: 14px;
      color:  white;
`
export const Address = styled.p`
  margin-left: 5px;
  margin-top: -15px;
  font-size: 14px;
  color:  white;
`
export const City = styled.p`
  margin-left: 5px;
  margin-top: -15px;
  font-size: 14px;
  color:  white;
`
export const mapStyle =
[
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#444444'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f2f2f2'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: 45
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#46bcec'
      },
      {
        visibility: 'on'
      }
    ]
  }
]
