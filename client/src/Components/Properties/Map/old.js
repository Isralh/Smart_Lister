import React, { useState } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { apikey } from './apiKey'
import { mapStyle, containerStyle, mapCenter, InfoWrapper, ListingWrapper, Price, Address, City } from './MapsStyling'
// google map options
const mapOptions = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true
}
// google maps function
const GoogleMaps = ({ showProperty, propertyInfo }) => {
  // state to check if map is loading or not
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apikey
  })
  // state to get the selected home by the user
  const [selectedProperty, setSelectedProperty] = useState(null)
  if (loadError) return 'Error loading maps'
  if (!isLoaded) return 'Loading Maps'
  const propertyImage = (property) => {
    const images = property.images
    const allImages = JSON.parse(images)
    return allImages[0][0]
  }
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={10}
      center={mapCenter}
      options={mapOptions}
    >
      {propertyInfo.map(property =>
        <Marker
          key={property.id}
          position={{ lat: parseFloat(property.lat), lng: parseFloat(property.lng) }}
          onClick={() => setSelectedProperty(property)}
        />
      )}
      {selectedProperty && (
        <InfoWindow
          key={selectedProperty.id}
          onCloseClick={() => setSelectedProperty(null)}
          position={{ lat: parseFloat(selectedProperty.lat), lng: parseFloat(selectedProperty.lng) }}
        >
          <InfoWrapper image={propertyImage(selectedProperty)} onClick={showProperty.bind(this, selectedProperty)}>
            <ListingWrapper>
              <Price>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(selectedProperty.Price)}</Price>
              <Address>{selectedProperty.address}</Address>
              <City>{selectedProperty.cityState}</City>
            </ListingWrapper>
          </InfoWrapper>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

export default GoogleMaps