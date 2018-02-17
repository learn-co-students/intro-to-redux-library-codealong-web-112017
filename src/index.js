import React from 'react';
import ReactDOM from 'react-dom';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';
import { createStore } from 'redux'

let store = createStore(shoppingListItemReducer)

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
