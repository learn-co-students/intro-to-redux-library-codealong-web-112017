import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleOnClick = (event) => {
    this.props.store.dispatch({
      type: "INCREASE_COUNT"
    })
  }
  render() {
    return (
      <div className="App">
        {this.props.store.getState().items.length}
        <button onClick={this.handleOnClick}>Click</button>
      </div>
    );
  }
};

export default App;
