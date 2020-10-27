# Easy Redux React
Minimal Redux Code, with React. Code made from this [article](https://daveceddia.com/how-does-redux-work/).  
Check the result [here](https://easy-redux-react-822124.netlify.com/)

  
## `src/index.js`  
  
```javascript
import React, { Component } from 'react';
import './App.css';
import MyComponent from './mycomponents/mycomponent';
import { createStore }  from 'redux';
import { Provider } from 'react-redux';


//Initial State
const initialState = {
  counter : 0
}

//The reducer
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
  }
  return state;
}

//The Store 
const store = createStore(reducer);

class App extends Component {

  render() {
    return (
      //The app state provider
      <Provider store={store}>
        <MyComponent/>
      </Provider>
    );
  }
}

export default App;
```
  
  
##  `src/mycomponents/mycomponent`

### Class Example
  
```javascript
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
```

### Hooks Example

```javascript
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
```