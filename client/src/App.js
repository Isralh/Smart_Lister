import React from 'react'
import Home from './Components/Home/Home/Home'
import Properties from './Components/Properties/Properties/Properties'
import { createGlobalStyle } from 'styled-components'
import DataContext from './Components/HouseData/Data'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MyListingContainer from './Components/User/Sections/MyListing/MyListingContainer'
import FormikContainer from './Components/User/Sections/PostProperty/FormikContainer'
import Favorites from './Components/User/Sections/Favorites/Favorites'
import { ProtectedRoute } from './Components/Authentication/ProtectedRoute'
import NotFound from './Components/PageNotFound/NotFound'
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
          <ProtectedRoute path='/user/mylisting' component={MyListingContainer} />
          <ProtectedRoute path='/user/postproperty' component={FormikContainer} />
          <ProtectedRoute path='/user/favorites' component={Favorites} />
          <Route path='*' component={NotFound} />
        </Switch>
        <GlobalStyle />
      </Router>
    </DataContext>
  )
}

export default App
