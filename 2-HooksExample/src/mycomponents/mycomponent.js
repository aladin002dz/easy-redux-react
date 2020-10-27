import React from 'react';
import { connect } from 'react-redux';

const MyComponent = props => {
  return (
    <div className="App">
      <button onClick={() => props.decreaseCounter()}>-</button>
      <p>{props.counter}</p>
      <button onClick={() => props.increaseCounter()}>+</button>
    </div>
  );
}

//Map app state to component props
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

//The Dispatcher
function mapDispatchToProps(dispatch) {
  return {
    increaseCounter : () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter : () => dispatch({type: 'DECREASE_COUNTER'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
