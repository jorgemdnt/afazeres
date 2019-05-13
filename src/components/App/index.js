import React, { Component } from 'react'
import TodoListCreationBar from '../TodoListCreationBar'
import TodoListsContainer from '../TodoListsContainer'
import styles from './App.module.css'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <TodoListCreationBar />
        <TodoListsContainer />
      </div>
    )
  }
}

export default App
