import React, { Component } from 'react'

class Internal extends Component {
  state = {
    currentUserName: ''
  }

  componentDidMount () {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserName: idToken.idToken.claims.name
    })
  }

  render() {
    const { currentUserName } = this.state
    return (
      <div>
        <h2>Welcome {currentUserName}</h2>
        <p>This is the protected area of the site.</p>
      </div>
    )
  }
}

export default Internal
