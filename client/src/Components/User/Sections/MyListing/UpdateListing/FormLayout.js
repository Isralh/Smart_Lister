import React from 'react'
import { FirstStep, SecondStep, ImagePreview, FontAwesomeStyle, Images, ImageContainer, DeletButton } from './UpdatingStyling'
import { FirstStepButton, SecondStepButton } from './Button'
import { v4 as uuid } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
export function FirstForm ({
  firstActive, cancelForm, address, cityState, zipcode, beds, baths,
  handleChange, handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit}>
      <FirstStep activeStep={firstActive}>
        <label>Address </label><br />
        <input name='address' type='text' placeholder='Address' required value={address} onChange={handleChange} /><br />
        <label>City </label><br />
        <input name='cityState' type='text' placeholder='City, State' required value={cityState} onChange={handleChange} /><br />
        <label>ZipCode </label><br />
        <input name='zipcode' type='text' placeholder='Zipcode' required minLength='5' value={zipcode} onChange={handleChange} /><br />
        <label>Beds </label><br />
        <input name='beds' type='number' placeholder='Beds' required value={beds} onChange={handleChange} /><br />
        <label>Baths </label><br />
        <input name='baths' type='number' placeholder='Baths' required value={baths} onChange={handleChange} /><br />
        <FirstStepButton handleCancel={cancelForm} />
      </FirstStep>
    </form>
  )
}

export function SecondForm ({
  secondActive, handleSubmit, prevStep, handleImageUpload,
  sqFt, garages, price, type, handleChange, propertyData,
  deleteImage, image, imageHolder
}) {
  return (
    <form onSubmit={handleSubmit}>
      <SecondStep activeStep={secondActive}>
        <label>SqFt </label><br />
        <input name='sqFt' type='number' placeholder='SqFt' required value={sqFt} onChange={handleChange} /><br />
        <label>Garages </label><br />
        <input name='garages' type='number' placeholder='Garages' required value={garages} onChange={handleChange} /><br />
        <label>Price </label><br />
        <input name='price' type='number' placeholder='Price' required value={price} onChange={handleChange} /><br />
        <label>Upload Images</label>
        <input name='image' type='file' accept='.jpeg .png .jpg' multiple onChange={handleImageUpload} /><br />
        <ImagePreview>
          {imageHolder !== undefined
            ? imageHolder.map(image =>
              <ImageContainer key={uuid()}>
                <DeletButton>
                  <FontAwesomeIcon icon={faTimesCircle} style={FontAwesomeStyle} onClick={deleteImage.bind(this, image)} />
                </DeletButton>
                <Images imageUrl={image} />
              </ImageContainer>) : null}
        </ImagePreview>
        <SecondStepButton handlePrev={prevStep} />
      </SecondStep>
    </form>
  )
}
