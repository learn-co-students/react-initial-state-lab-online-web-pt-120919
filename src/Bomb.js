import React, { Component } from 'react';
import ImageSlider from './ImageSlider.js'

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render () {
        const returnStatement = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
        return (
            <div>{returnStatement}</div>
        )
    }

}

