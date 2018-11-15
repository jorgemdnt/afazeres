import React from 'react'
import PropTypes from 'prop-types'

export const TodoList = ({ title = '', todos = [] }) => (
  <div>
    {title}
  </div>
)

TodoList.propTypes = {
  title: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
}

export default TodoList
