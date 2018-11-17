import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoList from './TodoList'

export const TodoListsContainer = ({ todoLists }) => (
  <div className="TodoListsContainer">
    {todoLists.map(
      todoList =>
        <TodoList
          todoListId={todoList.todoListId}
          title={todoList.title}
          todoItems={todoList.todoItems}
          key={todoList.todoListId} />
    )}
  </div>
)

TodoListsContainer.propTypes = {
  todoLists: PropTypes.arrayOf(Object).isRequired,
}

const mapStateToProps = state => ({ todoLists: state.todoLists })
export default connect(mapStateToProps)(TodoListsContainer)
