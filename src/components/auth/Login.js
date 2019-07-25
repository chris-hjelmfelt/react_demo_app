import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignInWidget from './SignInWidget';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Login extends Component {  // withAuth is a wrapper we export it and pass our Login class to it
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);  // if you make this function an arrow function you don't need to bind 'this'
    this.onError = this.onError.bind(this);
    this.state = {
      authenticated: null
    };
    this.checkAuthentication();
  }

  async checkAuthentication() {  // will return a promise - using 'async' and 'await' instead of '.then' etc.
    const authenticated = await this.props.auth.isAuthenticated();   // the 'auth' object will hold our data
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  onSuccess(res) {
    if (res.status === 'SUCCESS') {
      return this.props.auth.redirect({
        sessionToken: res.session.token
      });
    } else {
    // The user can be in another authentication state that requires further action.
    // For more information about these states, see:
    //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
    }
  }

  onError(err) {
    console.log('error logging in', err);
  }

  render() {
    if (this.state.authenticated === null) return null;   // we don't have authentication info yet
    return this.state.authenticated ?
      <Redirect to={{ pathname: '/' }}/> :
      <SignInWidget
        baseUrl={this.props.baseUrl}
        onSuccess={this.onSuccess}
        onError={this.onError} />;
  }
});