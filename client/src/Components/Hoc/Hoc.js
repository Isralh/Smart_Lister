import React from 'react'

const LoaderHoc = (WrappedComponent) => {
  return (this.props.Favorites.length === 0) ? <div>LOADING...</div> : <WrappedComponent {...this.props} />
}

export default LoaderHoc
