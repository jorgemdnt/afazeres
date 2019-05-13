import React from 'react'
import TodoListCreationBar from '../TodoListCreationBar'
import TodoListsContainer from '../TodoListsContainer'
import styles from './App.module.css'

const App = () => (
  <div className={styles.app}>
    <TodoListCreationBar />
    <TodoListsContainer />
  </div>
)

export default App
