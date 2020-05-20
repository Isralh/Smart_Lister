import React, { useState, createContext, useEffect } from 'react'
import Home from './Components/Home/Home/Home'
import Properties from './Components/Properties/Properties/Properties'
import { createGlobalStyle } from 'styled-components'
import DataContext from './Components/HouseData/Data'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import User from './Components/User/Profile/User'
import FormikContainer from './Components/User/Sections/ListingForm/FormikContainer'
import { ProtectedRoute } from './Components/Authentication/ProtectedRoute'
// global styling and wrap our app component with it
const GlobalStyle = createGlobalStyle`
body{ padding: 0px;
     margin:0px;
     box-sizing: border-box;
}
`

function App () {
  return (
    <DataContext>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/properties' component={Properties} />
          <ProtectedRoute path='/user' component={User} />
          <Route path='*' component={() => '404 NOT FOUND '} />
          <Route path='/formik' component={FormikContainer} />
        </Switch>
        <GlobalStyle />
      </Router>
    </DataContext>
  )
}

export default App
