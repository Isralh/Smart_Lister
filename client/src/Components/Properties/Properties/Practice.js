import React, { useContext, useState, useEffect, createContext, useReducer } from 'react'
import axios from 'axios'
// const initialState = {
//   loading: true,
//   error: '',
//   propertyList: []
// }
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'Success':
//       return {
//         loading: false,
//         propertyList: [action.payload],
//         error: ''
//       }
//     case 'Error':
//       return {
//         loading: false,
//         propertyList: '',
//         error: 'Something went wrong'
//       }
//     default: return state
//   }
// }
export default function Practice () {
  const [cityName, setCityName] = useState('All')
  const [priceToggle, setPriceToggle] = useState()
  const [houseList, setHouseList] = useState([])

  useEffect(() => {
    const getProperties = async () => {
      const propertyData = await axios.get('http://localhost:3001/api/get/allProperties')
      try {
        console.log(propertyData)
        const data = propertyData.data
        setHouseList([data])
      } catch (e) {
        console.log(e)
      }
    }

    getProperties()
  }, [])
  function lastValue () {
    if (houseList.length > 0) {
      const currentAddress = houseList[0].properties[11]
      
      const images = JSON.parse(currentAddress.images)
      return images[0][0]
    }
  }
  const value = lastValue()
  console.log(value)
  return (
    <div>

      <img src={value} />
    </div>
  )
}
