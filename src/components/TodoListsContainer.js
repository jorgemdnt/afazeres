import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import { removeTodoList, editTodoListTitle, addTodoItem } from '../actions'

export const TodoListsContainer = ({ todoLists, removeTodoList, editTodoListTitle, addTodoItem }) => (
  <div className="TodoListsContainer">
    {todoLists.map(
      todoList =>
        <TodoList
          todoListId={todoList.todoListId}
          title={todoList.title}
          todoItems={todoList.todoItems}
          removeTodoList={removeTodoList}
          addTodoItem={addTodoItem}
          editTodoListTitle={editTodoListTitle}
          key={todoList.todoListId} />
    )}
  </div>
)

TodoListsContainer.propTypes = {
  todoLists: PropTypes.arrayOf(Object).isRequired,
  removeTodoList: PropTypes.func.isRequired,
  editTodoListTitle: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ todoLists: state.todoLists })
const actions = { removeTodoList, editTodoListTitle, addTodoItem }
export default connect(mapStateToProps, actions)(TodoListsContainer)
