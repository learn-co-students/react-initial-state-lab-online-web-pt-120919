// your ImageSlider code here!
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

class ImageSlider extends React.Component {

    constructor(){
        super();

        this.state = {
            currentSlideIndex: 0
        };
    }

    render(){
        return (
            <div>I am on slide {this.state.currentSlideIndex}</div>
        );
    }
}
export default ImageSlider;
