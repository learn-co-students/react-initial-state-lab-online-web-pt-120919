// your Bomb code here!
import React, {Component} from 'react';


class Bomb extends React.Component {

    constructor(props) {
        super() 
    
        this.state = {
          secondsLeft: props.initialCount
        }
      }
    
      render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left and mission is aborted!
        `;
    
        return (
          <div>{message}</div>
        )
      }
    }
    
    export default Bomb;