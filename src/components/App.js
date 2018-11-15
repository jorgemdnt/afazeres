import React, { Component } from 'react'
import TodoListCreationBar from './TodoListCreationBar'
import TodoListsContainer from './TodoListsContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListCreationBar />
        <TodoListsContainer />
      </div>
    )
  }
}

export default App
