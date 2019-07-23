import React, { Component } from 'react'

class Internal extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  }

  componentDidMount () {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    })
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state
    return (
      <div>
        <h2>Welcome {currentUserName}</h2>
        <p>Your current email listed is: {currentUserEmail}</p>
      </div>
    )
  }
}

export default Internal
