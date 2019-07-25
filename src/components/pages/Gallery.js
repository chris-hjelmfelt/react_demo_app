import React, { Component } from 'react'
import axios from 'axios'
import ActiveThumbnailWindow from './active-thumbnail-window'
import ThumbnailGrid from './thumbnail-grid'
import TextArea from './text-area'

export default class ThumbnailGallery extends Component {
  constructor (props){
    super(props)

    this.state = {
        thumbnails: [],  // initialize this to an empty array
        activeImage: '0'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  // load images from the api 
  // use componentDidMount() to make sure it just runs once not over and over
  componentDidMount() {  // this is called a 'React lifecycle method'
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=8')  // get data from the test API
      .then(res => {
        this.setState({thumbnails: res.data})
      })
  }   

  // When user clicks a thumbnail image change the active image to that image
  handleClick (e)  {
    const newActiveIndex = e.target.getAttribute('data-index')
    if (!this.state.thumbnails.length) {
      return null;
    }
    this.setState({activeImage: newActiveIndex})
  }

  render() {   
    const {thumbnails, activeImage} = this.state

    if (!thumbnails.length) {
      return null;
    }

    return (         
      <div style={thumbStyles}>
        {/* Left Side */}
        <div style={{ flex: 1 }} >
          <ActiveThumbnailWindow activeThumbnail={thumbnails[activeImage].url} picTitle={thumbnails[activeImage].title} />
          <ThumbnailGrid photosArray={thumbnails} handleClick={this.handleClick} />
        </div>
      
        {/* Right Side */}
        <div style={{ flex: 1, padding: '40px' }} >
          <TextArea photosArray={thumbnails} activeImage={activeImage} />
        </div>
      </div>
    )
  }  
}

const thumbStyles = {
  background: '#ddd',
  height: '500px',
  width: '1024px',
  margin: '40px auto',
  display: 'flex'
}


