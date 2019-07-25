import React from 'react'
import PropTypes from 'prop-types';

function TextArea ({ photosArray, activeImage }) {
  return (
    <React.Fragment>
      <h1>{photosArray[activeImage].title}</h1>
    </React.Fragment>
  )
}

// It's good practice to define your props and whether they are required
TextArea.propTypes = {
  photosArray: PropTypes.array.isRequired,
  activeImage: PropTypes.string.isRequired
}

export default TextArea
