import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    };
  }
  render() {
    return (
      <div>
        {this.props.initialCount === 0
          ? "Boom!"
          : `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
    );
  }
}

export default Bomb;
