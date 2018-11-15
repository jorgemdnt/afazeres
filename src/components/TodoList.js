import React from 'react'
import PropTypes from 'prop-types'

export const TodoList = ({ removeTodoList, id, title = '', todos = [] }) => (
  <div className="TodoList">
    <strong>{title}</strong>
    <button onClick={() => removeTodoList(id)} className="TodoList__button">Remove</button>
  </div>
)

TodoList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  removeTodoList: PropTypes.func
}

export default TodoList
