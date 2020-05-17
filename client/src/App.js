import React, { useState, createContext, useEffect } from 'react'
import Home from './Components/Home/Home/Home'
import Properties from './Components/Properties/Properties/Properties'
import { createGlobalStyle } from 'styled-components'
import DataContext from './Components/HouseData/Data'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import User from './Components/User/Profile/User'

// global styling and wrap our app component with it
const GlobalStyle = createGlobalStyle`
body{ padding: 0px;
     margin:0px;
     box-sizing: border-box;
}
`
// check if user is logged in
export const loggInStatus = createContext()
function App () {
  const [loggedIn, setLoggedIn] = useState({
    status: false,
    user: window.localStorage.getItem('token')
  })
  console.log(loggedIn)
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    if (token !== undefined || null) {
      setLoggedIn(prev => { return { ...prev, status: true } })
    }
  }, [])
  return (
    <loggInStatus.Provider value={[loggedIn, setLoggedIn]}>
      <DataContext>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/properties' component={Properties} />
            <Route path='/user' component={User} />
          </Switch>
          <GlobalStyle />
        </Router>
      </DataContext>
    </loggInStatus.Provider>
  )
}

export default App
