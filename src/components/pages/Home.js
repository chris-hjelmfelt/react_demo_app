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
        <p>Welcome. You are logged in. You can access <Link to="/internal">Protected</Link> areas of the site.</p>
        <button className="btn btn-light btn-lg" onClick={this.logout}>Logout</button>
      </React.Fragment>
       
    ) : (
      <React.Fragment>
        <p>Please login to be able view protected areas of the site.<br/>
           (a guest login is available if you click here)</p>
        <button className="btn btn-light btn-lg" onClick={this.login}>Login</button>
      </React.Fragment>
    );

    return (
      <div className="jumbotron">
        <h1 className="display-4">Hello</h1>
        <p>There are currently three project pieces demonstrated in this project:<br/>
           1. A protected page accessable only by login <br/>
           2. An interactive todo list utilizing a test API<br/>
           3. A photo gallery also using the test API</p>
        {button}
      </div>
    );
  }
});
