import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import {
  addTodoItem,
  removeTodoList,
  editTodoListTitle,
  editTodoItemText,
  toggleTodoItem,
  removeTodoItem
} from '../actions'

export const TodoListsContainer = ({
  todoLists, todoItems, addTodoItem,
  removeTodoList, editTodoListTitle, editTodoItemText,
  toggleTodoItem, removeTodoItem
}) => (
  <div className="TodoListsContainer">
    {todoLists.map(
      todoList =>
        <TodoList
          todoListId={todoList.todoListId}
          title={todoList.title}
          todoItems={todoItems[todoList.todoListId]}
          addTodoItem={addTodoItem}
          removeTodoList={removeTodoList}
          editTodoListTitle={editTodoListTitle}
          editTodoItemText={editTodoItemText}
          toggleTodoItem={toggleTodoItem}
          removeTodoItem={removeTodoItem}
          key={todoList.todoListId}>
        </TodoList>
    )}
  </div>
)

TodoListsContainer.propTypes = {
  todoLists: PropTypes.arrayOf(Object).isRequired,
}

const mapStateToProps = state => ({ todoLists: state.todoLists, todoItems: state.todoItems })
const actions = {
  addTodoItem, removeTodoList, editTodoListTitle,
  editTodoItemText, toggleTodoItem, removeTodoItem
}
export default connect(mapStateToProps, actions)(TodoListsContainer)
