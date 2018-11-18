import React from 'react'
import PropTypes from 'prop-types'
import TransparentTextInput from './TransparentTextInput'

export const TodoItem = ({ text, onChangeText }) => {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <TransparentTextInput
        className="TodoItem-text-input"
        value={text}
        onChange={onChangeText} />
    </div>
  )
}

TodoItem.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default TodoItem
