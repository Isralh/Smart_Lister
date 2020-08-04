import React, { useState, useContext, useEffect } from 'react'
import { FormWrapper, StepHeading } from './UpdatingStyling'
import { FirstForm, SecondForm } from './FormLayout'
import { ListingContext } from '../MyListing/MyListing'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const UpdateListing = ({ viewForm, handleCancel }) => {
  const currentListing = useContext(ListingContext)
  const [index, setIndex] = useState(0)
  const [propertyImages, setPropertyImages] = useState([])
  const steps = ['Step 1 of 2', 'Step 2 of 2']
  const [images, setImages] = useState()
  const [firstView, setFirstView] = useState(true)
  const [secondView, setSecondView] = useState(false)

  const [formValues, setFormValues] = useState({
    id: null,
    address: '',
    cityState: '',
    zipcode: '',
    longitude: '',
    latitude: '',
    beds: '',
    baths: '',
    sqFt: '',
    garages: '',
    price: '',
    propertyType: '',
    imageUrl: []
  })

  // function to update the form view
  const updateFormInput = (e) => {
    e.persist()
    const values = e.target.value
    setFormValues(prev => { return { ...prev, [e.target.name]: values } })
  }

  // on first form submit go to the next page
  const submitFirstForm = (e) => {
    e.preventDefault()
    setIndex(index + 1)
    setFirstView(false)
    setSecondView(true)
  }

  // function to delete user's image
  const handleDelete = (image) => {
    const ImageResult = propertyImages.filter(propertyImage => propertyImage !== image)
    setPropertyImages(ImageResult)
  }

  const history = useHistory()
  // onChange event to handle all the images that are uploaded and set the ValuesContainer(formData)
  const uploadImage = async (e) => {
    const file = await e.target.files
    // setImages(file)
    const fileData = new FormData()
    const selectedFiles = file
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        fileData.append('images', selectedFiles[i], selectedFiles[i].name)
      }
      const downloadUrl = await axios.post('http://localhost:3001/api/post/propertyImages', fileData)
      try {
        if (downloadUrl.status === 201) {
          const awsImageUrl = downloadUrl.data
          const allUserImages = awsImageUrl.concat(propertyImages)
          setPropertyImages(allUserImages)
        }
      } catch (e) {
        history.push('/500')
      }
    }
  }

  // sucess message notification if property was deleted from the database successfuly
  toast.configure()
  const notify = () => toast.success('Successfully updated Listing', {
    autoClose: 2500
  })

  // onSubmit event to handle the submission of the form data to aws and our backend
  const submitSecondForm = async (e) => {
    e.preventDefault()
    const updateProperty = await axios.put(`http://localhost:3001/api/update/property/${formValues.id}`, formValues)

    try {
      if (updateProperty.status === 200) {
        notify()
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      }
    } catch (e) {
      history.push('/500')
    }
  }

  const showPrevStep = () => {
    setIndex(index - 1)
    setFirstView(true)
    setSecondView(false)
  }
  useEffect(() => {
    const propertyInfo = () => {
      if (currentListing !== undefined) {
        setFormValues({
          id: currentListing.id,
          address: currentListing.address,
          cityState: currentListing.cityState,
          zipcode: currentListing.zipcode,
          longitude: currentListing.lng,
          latitude: currentListing.lat,
          baths: currentListing.Baths,
          beds: currentListing.Beds,
          sqFt: currentListing.SqFt,
          garages: currentListing.Garages,
          price: currentListing.Price,
          propertyType: currentListing.PropertyType
        })
      }
    }
    propertyInfo()
  }, [currentListing])

  // function to change our fetched images from the database from Json to an array
  function listingImages (listing) {
    if (listing !== undefined) {
      const images = listing.images
      const allImages = JSON.parse(images)
      setPropertyImages(allImages[0])
    }
  }

  useEffect(() => {
    setFormValues(prev => { return { ...prev, imageUrl: propertyImages } })
  }, [propertyImages])
  useEffect(() => {
    listingImages(currentListing)
  }, [currentListing])
  return (
    <FormWrapper viewMyListing={viewForm}>
      <StepHeading>
        <p>{steps[index]}</p>
      </StepHeading>
      <FirstForm
        firstActive={firstView}
        handleSubmit={submitFirstForm}
        cancelForm={handleCancel}
        handleChange={updateFormInput}
        address={formValues.address}
        cityState={formValues.cityState}
        zipcode={formValues.zipcode}
        latitude={formValues.latitude}
        longitude={formValues.longitude}
      />
      <SecondForm
        secondActive={secondView}
        prevStep={showPrevStep}
        beds={formValues.beds}
        baths={formValues.baths}
        sqFt={formValues.sqFt}
        garages={formValues.garages}
        price={formValues.price}
        type={formValues.propertyType}
        propertyData={currentListing}
        handleChange={updateFormInput}
        deleteImage={handleDelete}
        imageHolder={propertyImages}
        handleImageUpload={uploadImage}
        handleSubmit={submitSecondForm}
      />
    </FormWrapper>
  )
}

export default UpdateListing
