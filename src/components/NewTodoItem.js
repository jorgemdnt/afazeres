import React from 'react'
import PropTypes from 'prop-types'
import TransparentTextInput from './TransparentTextInput'

class NewTodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: ''
    }
  }

  onNewTodoEnter() {
    this.props.addTodoItem(this.props.todoListId, this.state.newTodo)
    this.setState({ newTodo: '' })
  }

  render () {
    return (
      <div className="TodoList-new-todo">
        <input type="checkbox" disabled />
        <TransparentTextInput
          value={this.state.newTodo}
          onChange={newTodo => this.setState({ newTodo })}
          placeholder="Add new To-do"
          onEnterKeyPressed={this.onNewTodoEnter.bind(this)} />
      </div>
    )
  }
}

NewTodoItem.propTypes = {
  todoListId: PropTypes.number.isRequired,
  addTodoItem: PropTypes.func.isRequired
}

export default NewTodoItem
