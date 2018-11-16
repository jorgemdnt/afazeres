import React from 'react'
import PropTypes from 'prop-types'
import TransparentTextInput from './TransparentTextInput'
import DeleteIcon from './DeleteIcon'

export const TodoList = ({ removeTodoList, editTodoListTitle, id, title = '', todos = [] }) => (
  <div className="TodoList">
    <TransparentTextInput value={title} onSave={newTitle => editTodoListTitle(id, newTitle)} />
    <button onClick={() => removeTodoList(id)} className="TodoList__delete-button">
      <DeleteIcon />
    </button>
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
  removeTodoList: PropTypes.func,
  editTodoListTitle: PropTypes.func
}

export default TodoList
