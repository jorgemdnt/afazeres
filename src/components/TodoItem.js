import React from 'react'
import PropTypes from 'prop-types'
import TransparentTextInput from './TransparentTextInput'

export const TodoItem = ({ done = false, text = '', onChangeText, onToggleCheckbox, onClickRemove }) => {
  return (
    <div className="TodoItem">
      <input
        checked={done}
        onChange={onToggleCheckbox}
        className="TodoItem-done-input"
        type="checkbox" />
      <TransparentTextInput
        className="TodoItem-text-input"
        value={text}
        onChange={onChangeText} />
      <button onClick={onClickRemove} className="TodoList-delete-button">
        <i>remove</i>
      </button>
    </div>
  )
}

TodoItem.propTypes = {
  onClickRemove: PropTypes.func.isRequired,
  onToggleCheckbox: PropTypes.func.isRequired,
  done: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default TodoItem
