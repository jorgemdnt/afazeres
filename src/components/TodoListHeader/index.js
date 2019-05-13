import React from 'react'
import PropTypes from 'prop-types'
import styles from './TodoListHeader.module.css'
import TransparentTextInput from '../TransparentTextInput'
import { DeleteIcon } from '../Icons'

const TodoListHeader = ({ title, todoListId, removeTodoList, editTodoListTitle }) => (
  <div className={styles.todoListHeader}>
    <TransparentTextInput
      className={styles.titleInput}
      value={title}
      onChange={newTitle => editTodoListTitle(todoListId, newTitle)} />
    <button onClick={() => removeTodoList(todoListId)} className={styles.removeListButton}>
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
