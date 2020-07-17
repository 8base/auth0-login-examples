import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

/* Example Views */
import Home from './views/Home'

import GraphqlApiExample from './views/graphqlApiExample/Form'

import LogoutExample from './views/hostedLoginExample/Logout'
import CallbackExample from './views/hostedLoginExample/Callback'
import HostedLoginExample from './views/hostedLoginExample/Prompt'

import './App.css'

function App () {
  return (
    <div className='App'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <span className='navbar-brand'>
          <Link className='navbar-brand' to='/'>
            Auth0 Login Examples
          </Link>
        </span>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/graphql-api'>
                GraphQL API Auth
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/hosted-redirect'>
                Hosted Login Redirect
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* App Routes */}
      <Switch>
        {/* Home */}
        <Route exact path='/' render={Home} />

        {/* Login form for using GraphQL API */}
        <Route exact path='/graphql-api' component={GraphqlApiExample} />

        {/* Auth callback component and login page */}
        <Route exact path='/logout' component={LogoutExample} />
        <Route exact path='/auth/callback' component={CallbackExample} />
        <Route exact path='/hosted-redirect' render={HostedLoginExample} />
      </Switch>
    </div>
  )
}

export default App
