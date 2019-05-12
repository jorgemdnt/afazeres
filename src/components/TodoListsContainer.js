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
  removeTodoList: PropTypes.func.isRequired,
  editTodoListTitle: PropTypes.func.isRequired,
  addTodoItem: PropTypes.func.isRequired,
  editTodoItemText: PropTypes.func.isRequired,
  toggleTodoItem: PropTypes.func.isRequired,
  removeTodoItem: PropTypes.func.isRequired,
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
}

const mapStateToProps = state => ({ todoLists: state.todoLists, todoItems: state.todoItems })
const actions = {
  addTodoItem, removeTodoList, editTodoListTitle,
  editTodoItemText, toggleTodoItem, removeTodoItem
}
export default connect(mapStateToProps, actions)(TodoListsContainer)
