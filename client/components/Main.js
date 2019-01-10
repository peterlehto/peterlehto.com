import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Schedule from './Schedule'
import Blog from './Blog'

// The Main component renders one of the three provided
// Routes (provided that one matches). 
// The / route will only match when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/blog' component={Blog}/>
    </Switch>
  </main>
)

export default Main
