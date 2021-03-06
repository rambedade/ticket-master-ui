import React from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'

import Home from './components/static/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  return(
    <BrowserRouter>
    <div>
      <h1>Ticket Master 2 </h1>
      <Link to= "/">Home</Link>
      <Link to="/users/register">Register</Link>
      <Link to = "/users/login">Login</Link>

      <Switch>
        <Route path="/" component={Home} exact ={true} />
        <Route path= "/users/register" component ={Register} />
        <Route path ="/users/login" component ={Login} />  
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App