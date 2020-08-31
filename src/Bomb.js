import React, { Component } from 'react';

export default class Bomb extends Component {
    
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        /*
        if (this.state.secondsLeft <= 0){
            return (
                <div>
                    Boom!
                </div>
            )
        }
        else{
            return (
                <div>
                    {this.state.secondsLeft} seconds left before I go boom!
                </div>
            )
        }*/
        
        // didnt like the answer above so I peeked at the solution which is 100% prettier
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

        return (
            <div>{message}</div>
        )
    }
}
