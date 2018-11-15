import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoList from './TodoList'

export const TodoListsContainer = ({ todoLists = [] }) => (
  <div>
    {todoLists.map(
      todoList =>
        <TodoList
          title={todoList.title}
          id={todoList.id}
          key={todoList.id} />
    )}
  </div>
)

TodoListsContainer.propTypes = {
  todoLists: PropTypes.arrayOf(Object)
}

const mapStateToProps = state => ({ todoLists: state.todoLists })
export default connect(mapStateToProps)(TodoListsContainer)
