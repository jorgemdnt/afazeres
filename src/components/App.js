import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList title={'Hello World'} />
      </div>
    );
  }
}

export default App;
