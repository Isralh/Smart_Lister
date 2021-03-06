import React, { useState } from 'react'
import axios from 'axios'
import Footer from './Footer'
const FooterContainer = () => {
  const [inputState, setInputState] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const inputChange = (e) => {
    e.persist()
    const value = e.target.value
    setInputState(prev => { return { ...prev, [e.target.name]: value } })
  }
  const subscribeUser = async (e) => {
    e.preventDefault()
    const subscriptionData = await axios.post('https://smart-lister.work/api/post/newsubscriber', inputState)

    try {
      if (subscriptionData) window.alert(subscriptionData.data.message)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Footer
      handleChange={inputChange}
      handleSubscription={subscribeUser}
    />
  )
}

export default FooterContainer
