import React, { Component } from "react"
// import Bomb from "./Bomb.js"

class ImageSlider extends Component{

    constructor(props){
        super(props)
        this.state = {
            currentSlideIndex: 0
        }
    }

    handleChange = () => {
        this.setState({currentSlideIndex: this.state.currentSlideIndex + 1}) 
    }

    render(){
        return(
            <div>
                <p>I am on slide {this.state.currentSlideIndex}</p>
            </div>
        )
    }

}

export default ImageSlider