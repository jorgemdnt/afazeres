import React from 'react'
import PropTypes from 'prop-types'
import TransparentTextInput from './TransparentTextInput'

export const TodoItem = ({ done = false, text = '', onChangeText, onToggleCheckbox }) => {
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
    </div>
  )
}

TodoItem.propTypes = {
  onToggleCheckbox: PropTypes.func.isRequired,
  done: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default TodoItem
