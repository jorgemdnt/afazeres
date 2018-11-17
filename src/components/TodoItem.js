import React from 'react'
import PropTypes from 'prop-types'
import TransparentTextInput from './TransparentTextInput'

const TodoItem = ({ text }) => {
  return (
    <div className="TodoList-todo-item">
      <input type="checkbox" />
      <TransparentTextInput
        value={text}
        onEnterKeyPressed={console.log}
        onChange={console.log} />
    </div>
  )
}

TodoItem.propTypes = {
  text: PropTypes.string
}

export default TodoItem
