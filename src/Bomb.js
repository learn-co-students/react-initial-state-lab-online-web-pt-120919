import React, { Component } from "react"
// import ImageSlider from "./ImageSlider.js"

class Bomb extends Component {

    constructor(props){
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }   

    handleUpdate
    
    render(){
        return (
            <div>
                {
                    this.state.secondsLeft === 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>
                }
            </div>
        )
    }
}

export default Bomb