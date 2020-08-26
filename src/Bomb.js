// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
 
    render() {
        if (this.state.secondsLeft == 0){
            return ('Boom!')
        }
        else {
            return ('120 seconds left before I go boom!')
        }
    }
}

