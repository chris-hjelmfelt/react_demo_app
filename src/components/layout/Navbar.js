import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Navbar extends Component {  
  render() {
    // See Bootstrap notes below
    // The staff link will be a protected link
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">  
        <div className="container">
          <Link className="navbar-brand" to="/">
            Pets Online
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/internal">
                  Internal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

// Bootstrap Notes
// navbar-expand-sm makes the navbar responsive on small devices
// mb-4 means a margin-bottom of 4
// navbar-brand gives special styling to the company or website name
// ml-auto is margin-left: auto - it aligns everything to the right

export default Navbar