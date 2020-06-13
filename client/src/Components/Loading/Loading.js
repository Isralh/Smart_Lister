import React from 'react'
import { ListingContainer, PropertiesContainer } from './LoadingStyle'
import { BeatLoader } from 'react-spinners'
const Loading = ({ loadingState, loadingMargin }) => {
  return (
    <ListingContainer margins={loadingMargin}>
      <BeatLoader
        size={50}
        color='#19334d'
        loading={loadingState}
      />
    </ListingContainer>
  )
}

export default Loading
