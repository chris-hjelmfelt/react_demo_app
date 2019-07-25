import React from 'react'
import PropTypes from 'prop-types';

 function ActiveThumbnailWindow ({ activeThumbnail, picTitle }) {
  return (    
    <div style={styles}>
      <img src={activeThumbnail} style={{width:"100%", height:"100%"}} alt={picTitle} />
    </div>
  )
}

const styles = {
  height: '65%',
  width: '100%',
  background: '#333',
}

// It's good practice to define your props and whether they are required
ActiveThumbnailWindow.propTypes = {
  activeThumbnail: PropTypes.string.isRequired,
  picTitle: PropTypes.string.isRequired
}

export default ActiveThumbnailWindow
//activeThumbnail={thumbnails[0].thumbnailurl}