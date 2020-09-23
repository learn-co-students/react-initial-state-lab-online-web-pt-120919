// your ImageSlider code here!
import React, { Component } from 'react';

class ImageSlider extends Component {
    state = {currentSlideIndex: 0}

    render() {
        return (
            <h3>I am on slide {this.state.currentSlideIndex}</h3>
        )
    }
}

export default ImageSlider