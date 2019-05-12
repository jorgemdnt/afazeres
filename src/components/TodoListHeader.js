import React from 'react'
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

export default React.memo(TodoListHeader)
