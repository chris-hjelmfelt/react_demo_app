import React from 'react'
import Thumbnail from './thumbnail'
import PropTypes from 'prop-types';

 function ThumbnailGrid ({ photosArray, handleClick }) {

  // Dynamically fill a new array with <Thumbnail /> tags with image data for each image in the photos api
  var singleImages = [];
  for (var i = 0; i < 8; i++) {
    // note: we add a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    singleImages.push(<Thumbnail key={i} imgurl={photosArray[i].thumbnailUrl} imgtitle={photosArray[i].title} handleClick={handleClick} index={i} />);
  }

  // Place the "singleImages" array in the return and it will print each <Thumbnail /> tag
  return (    
    <div style={styles}>
      {singleImages}       
    </div>
  )
}

const styles = {
  height: '35%',
  width: '100%',
  background: '#bbb',
  display: 'flex',
  flexWrap: 'wrap',
}

ThumbnailGrid.propTypes = {
  photosArray: PropTypes.array.isRequired
}

export default ThumbnailGrid