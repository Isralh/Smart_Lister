import React, { useState, useContext } from 'react'
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { propertiesContext } from '../../Properties/Properties/Properties'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
const GoogleMaps = () => {
  const homes = useContext(propertiesContext)
  const [selectedHome, setSelectedHome] = useState(null)

  const InfoWrapper = styled.div`
    img {
      width: 200px;
      height: 400px;
    }
  `
  return (
    <GoogleMap defaultZoom={11} defaultCenter={{ lat: 40.04, lng: -75.46 }}>
      {homes.map(home =>
        <Marker
          key={uuid()}
          position={{ lat: home.latlng[0], lng: home.latlng[1] }}
          icon={{
            url: <FontAwesomeIcon icon={faHome} />,
            scaledSize: new window.google.maps.Size(20, 20)
          }}
          onClick={() => setSelectedHome(home)}
        />
      )}
      {selectedHome && (
        <InfoWindow
          key={uuid()}
          onCloseClick={() => setSelectedHome(null)}
          position={{ lat: selectedHome.latlng[0], lng: selectedHome.latlng[1] }}
        >
          <InfoWrapper>
            <p>{selectedHome.Address}</p>
            <p>{selectedHome.City}</p>
            <p>{selectedHome.Price}</p>
          </InfoWrapper>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}
export default GoogleMaps
