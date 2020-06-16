import React from 'react'
import Home from './Components/Home/Home/Home'
import Properties from './Components/Properties/Properties/Properties'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FormikContainer from './Components/User/Sections/PostProperty/FormikContainer'
import FavoritesContainer from './Components/User/Sections/Favorites/FavoritesContainer'
import { ProtectedRoute } from './Components/Authentication/ProtectedRoute'
import MyListing from './Components/User/Sections/MyListing/MyListing/MyListing'
import NotFound from './Components/PageNotFound/NotFound'
import ServerError from './Components/Server_Error/ServerError'
// import GlobalStyle from './Components/GlobalStyle/GlobalStyle'
// global styling and wrap our app component with it
const GlobalStyle = createGlobalStyle`
body{ padding: 0px;
     margin:0px;
     box-sizing: border-box;
}
`

function App () {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/properties' component={Properties} />
        <ProtectedRoute path='/user/myListing' component={MyListing} />
        <ProtectedRoute path='/user/postProperty' component={FormikContainer} />
        <ProtectedRoute path='/user/favorites' component={FavoritesContainer} />
        <Route path='/servererror' component={ServerError} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
