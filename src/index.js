import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import allReducer from './reducers/index'
import { Provider } from 'react-redux'

//STORE -> Globaliza o estado.
//ACTION -> Descreve o que será feito.
//REDUCER -> Descreve como o estado será alterado.
//DISPATCH -> Momento em que a ação será realizada.

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

/*PASSO A PASSO - REDUX SIMPLIFICADO
//action
const increment = () => {
  //Deve retornar um obj
  return {
    type: 'INCREMENT'
  }
}
//action
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}

let store = createStore(counter)
store.subscribe(() => console.log(store.getState()))

//dispatch
store.dispatch(increment())
store.dispatch(decrement())*/


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
