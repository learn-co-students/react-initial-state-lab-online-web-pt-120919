// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super(props);

        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render() {

        return (
            <p>{this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}</p>

        );
    }

}


export default Bomb;