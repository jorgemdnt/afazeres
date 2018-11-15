import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodoList } from '../actions'

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

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, { addTodoList })(TodoList)
