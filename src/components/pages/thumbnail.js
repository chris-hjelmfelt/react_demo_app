import React from 'react'
import PropTypes from 'prop-types';

 function Thumbnail ({ imgurl, imgtitle, index, handleClick }) {
  return (
    <div style={styles}>
      <img src={imgurl} style={{width: "100%", height: "100%", cursor: "pointer"}} alt={imgtitle} onClick={handleClick} data-index={index} />
    </div>
  )
}

const styles = {
  height: '50%',
  width: '25%',
  background: '#009900',
}

// It's good practice to define your props and whether they are required
Thumbnail.propTypes = {
  imgurl: PropTypes.string.isRequired,
  imgtitle: PropTypes.string.isRequired
}

export default Thumbnail