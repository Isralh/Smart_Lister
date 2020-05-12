import React from 'react'
import Home from './Components/Home/Home/Home'
import Properties from './Components/Properties/Properties/Properties'
import { createGlobalStyle } from 'styled-components'
import DataContext from './Components/HouseData/Data'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const GlobalStyle = createGlobalStyle`
body{ padding: 0px;
     margin:0px;
}
`
function App () {
  return (
    <DataContext>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/properties' component={Properties} />
        </Switch>
        <GlobalStyle />
      </Router>
    </DataContext>
  )
}

export default App
