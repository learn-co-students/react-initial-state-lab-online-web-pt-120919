// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super(props);

        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

  stopTimer = () => {
      if (this.state.secondsLeft <= 0){
        this.setState({
            secondsLeft: 'Boom!'
        })
      }
  }

    render() {
        const {secondsLeft} = this.state
        return (
            
            <p>{this.state.secondsLeft === 0 ? "Boom!" : `${secondsLeft} seconds left before I go boom!`}</p>

        );
    }

    componentDidMount(){
        this.myInterval = setInterval(() => {
            this.setState(({
                secondsLeft: this.state.secondsLeft - 1})) 
        }, 200)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    
    }

}


export default Bomb;