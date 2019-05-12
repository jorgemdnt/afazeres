import React from 'react'
import PropTypes from 'prop-types'
import TransparentTextInput from './TransparentTextInput'
import { DeleteIcon } from './Icons'

const TodoListHeader = ({ title, todoListId, removeTodoList, editTodoListTitle }) => (
  <div className="TodoListHeader">
    <TransparentTextInput
      value={title}
      onChange={newTitle => editTodoListTitle(todoListId, newTitle)} />
    <button onClick={() => removeTodoList(todoListId)} className="TodoList-delete-button">
      <DeleteIcon />
    </button>
  </div>
)

TodoListHeader.propTypes = {
  todoListId: PropTypes.number.isRequired,
  removeTodoList: PropTypes.func.isRequired,
  editTodoListTitle: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default React.memo(TodoListHeader)
