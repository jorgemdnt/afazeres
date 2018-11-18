import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import groupBy from 'lodash/groupBy'

export const TodoListsContainer = ({ todoLists, todoItems }) => {
  const itemsGroupedByTodoList = groupBy(todoItems, item => item.todoListId)
  return (
    <div className="TodoListsContainer">
      {todoLists.map(
        todoList =>
          <TodoList
            todoListId={todoList.todoListId}
            title={todoList.title}
            todoItems={itemsGroupedByTodoList[todoList.todoListId]}
            key={todoList.todoListId}>
          </TodoList>
      )}
    </div>
  )

}
TodoListsContainer.propTypes = {
  todoLists: PropTypes.arrayOf(Object).isRequired,
}

const mapStateToProps = state => ({ todoLists: state.todoLists, todoItems: state.todoItems })
export default connect(mapStateToProps)(TodoListsContainer)
