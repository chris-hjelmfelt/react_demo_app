//----------------------------------------------------------------------------------
// My React Project                           7-23-19
// This combines 3 projects I did to learn React - react-app, react-gallery, and react-login
// The test API used in this project is https://jsonplaceholder.typicode.com/
// Usage:
// > npm start
// Wait for react to open a browser window
// login: guest@example.com   password: Password1
//-----------------------------------------------------------------------------------

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import TodoList from './components/pages/TodoList'
import Gallery from './components/pages/Gallery'
import Internal from './components/pages/Internal'
import Login from './components/auth/Login'

import './App.css';

function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component {
  render() {    
    return (
      <Router>
        <Security issuer='https://dev-288710.okta.com/oauth2/default'
                  client_id='0oazk8irnXFHtsiDZ356'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
          <div className="App">
            <Navbar />
              <div className="container">   
                <Switch>
                  <Route path="/todo" exact={true} component={TodoList} />
                  <Route path="/photo" exact={true} component={Gallery} />
                  <SecureRoute path="/internal" exact={true} component={Internal} />         
                  <Route path='/login' render={() => <Login baseUrl='https://dev-288710.okta.com' />} />
                  <Route path='/implicit/callback' component={ImplicitCallback} />   
                  <Route path="/" component={Home} />
                </Switch>   
              </div>    
          </div>
        </Security>
      </Router>    
    );
  }
}

export default App;
