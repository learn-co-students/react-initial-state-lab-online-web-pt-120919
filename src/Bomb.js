// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super()

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let message = '';
    if (this.state.secondsLeft === 0) {
      message += 'Boom!';
    } else {
      message += `${this.state.secondsLeft} seconds left before I go boom!`
    }

    return (
      <h3>{message}</h3>
    )
  }
}

export default Bomb;
