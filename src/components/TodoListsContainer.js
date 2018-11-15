import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import { removeTodoList } from '../actions'

export const TodoListsContainer = ({ todoLists, removeTodoList }) => (
  <div className="TodoListsContainer">
    {todoLists.map(
      todoList =>
        <TodoList
          title={todoList.title}
          id={todoList.id}
          removeTodoList={removeTodoList}
          key={todoList.id} />
    )}
  </div>
)

TodoListsContainer.propTypes = {
  todoLists: PropTypes.arrayOf(Object).isRequired,
  removeTodoList: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ todoLists: state.todoLists })
export default connect(mapStateToProps, { removeTodoList })(TodoListsContainer)
