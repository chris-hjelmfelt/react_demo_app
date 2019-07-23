import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    this.props.auth.login('/');
  }

  async logout() {
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null;

    const button = this.state.authenticated ? (
      <React.Fragment>
        <p>Welcome. You are logged in. You can access <Link to="/internal">Internal</Link> areas of the site.</p>
        <button className="btn btn-light btn-lg" onClick={this.logout}>Logout</button>
      </React.Fragment>
       
    ) : (
      <React.Fragment>
        <p>Please login to be able view internal areas of the site</p>
        <button className="btn btn-light btn-lg" onClick={this.login}>Login</button>
      </React.Fragment>
    );

    return (
      <div className="jumbotron">
        <h1 className="display-4">Pets Online</h1>
        {button}
      </div>
    );
  }
});
