// your Bomb code here!

function changeState(state, action) {
 
    switch (action.type) {
 
      case 'INCREASE_COUNT':
        return { count: state.count + 1 }
 
      default:
        return state;
    }
  }
 
  function dispatch(action){
  state = changeState(state, action)
  render()
}
 
function render(){
  document.body.textContent = state.count
}
 
dispatch({ type: '@@INIT' })

import React from 'react';

class Bomb extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render(){
        return (
            <p>{ this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}</p>
        );
    }
}
export default Bomb;
