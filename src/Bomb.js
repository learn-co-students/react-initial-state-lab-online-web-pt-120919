// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super(props);

        this.state = {
            secondsLeft: this.props.initialCount,
            bombMessage: ''
        }
    }

  stopTimer = () => {
      if (this.state.secondsLeft <= 0){
          clearInterval(this.myInterval)
        console.log(this.state.secondsLeft)
        this.setState({
            bombMessage: 'Boom!'
        })
      } else {
          this.setState({bombMessage: `${this.state.secondsLeft} seconds left before I go boom!`,
                        secondsLeft: this.state.secondsLeft - 1 })
      }
  }

    render() {
        
        return (
            
            <p>{this.state.bombMessage}</p>

        );
    }

    componentDidMount(){
        this.myInterval = setInterval(() => {
            this.stopTimer()
        }, 50)
    }

   

}


export default Bomb;