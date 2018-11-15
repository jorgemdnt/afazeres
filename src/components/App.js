import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoListCreationBar from './TodoListCreationBar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListCreationBar />
        <TodoList title={'Hello World'} />
      </div>
    )
  }
}

export default App
