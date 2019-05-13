import React from 'react'
import PropTypes from 'prop-types'
import styles from './TodoItem.module.css'
import TransparentTextInput from '../TransparentTextInput'

export const TodoItem = ({
  done = false,
  text = '',
  todoListId,
  todoItemId,
  editTodoItemText,
  toggleTodoItem,
  removeTodoItem
}) => (
  <div className={styles.todoItem}>
    <input
      checked={done}
      onChange={() => toggleTodoItem(todoListId, todoItemId)}
      className={styles.doneInput}
      type="checkbox" />
    <TransparentTextInput
      className={styles.itemText}
      value={text}
      onChange={newText => editTodoItemText(todoListId, todoItemId, newText)} />
    <button onClick={() => removeTodoItem(todoListId, todoItemId)} className={styles.deleteButton}>
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
