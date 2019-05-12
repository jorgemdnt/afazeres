import React from 'react'
import PropTypes from 'prop-types'
import TransparentTextInput from './TransparentTextInput'

export const TodoItem = ({
  done = false,
  text = '',
  todoListId,
  todoItemId,
  editTodoItemText,
  toggleTodoItem,
  removeTodoItem
}) => (
  <div className="TodoItem">
    <input
      checked={done}
      onChange={() => toggleTodoItem(todoListId, todoItemId)}
      className="TodoItem-done-input"
      type="checkbox" />
    <TransparentTextInput
      className="TodoItem-text-input"
      value={text}
      onChange={newText => editTodoItemText(todoListId, todoItemId, newText)} />
    <button onClick={() => removeTodoItem(todoListId, todoItemId)} className="TodoList-delete-button">
      <i>remove</i>
    </button>
  </div>
)

TodoItem.propTypes = {
  todoListId: PropTypes.number.isRequired,
  todoItemId: PropTypes.number.isRequired,
  removeTodoItem: PropTypes.func.isRequired,
  toggleTodoItem: PropTypes.func.isRequired,
  done: PropTypes.bool,
  editTodoItemText: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default React.memo(TodoItem)
