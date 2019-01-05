import React, { Component } from 'react';
import {connect} from 'react-redux';

class MyComponent extends Component {

  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.decreaseCounter()}>-</button>
        <p>{this.props.counter}</p>
        <button onClick={() => this.props.increaseCounter()}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter : () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter : () => dispatch({type: 'DECREASE_COUNTER'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
