import React, { Component } from 'react';
import './App.css';
import MyComponent from './mycomponents/mycomponent';
import { createStore }  from 'redux';
import { Provider } from 'react-redux';


// Initial State
const initialState = {
  counter : 0
}

// The reducer
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
  }
  return state;
}

// The Store 
const store = createStore(reducer);

function App() {
  return (
    // The app state provider
    <Provider store={store}>
      <MyComponent/>
    </Provider>
  );
}

export default App;
