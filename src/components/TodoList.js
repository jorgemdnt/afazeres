import React from 'react'
import PropTypes from 'prop-types'
import TransparentTextInput from './TransparentTextInput'
import TodoItem from './TodoItem'
import { DeleteIcon } from './Icons'

export class TodoList extends React.Component {
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
    const { removeTodoList, editTodoListTitle, todoListId, title, todoItems } = this.props
    return (
      <div className="TodoList">
        <div className="TodoList-header">
          <TransparentTextInput
            value={title}
            onChange={newTitle => editTodoListTitle(todoListId, newTitle)} />
          <button onClick={() => removeTodoList(todoListId)} className="TodoList-delete-button">
            <DeleteIcon />
          </button>
        </div>
        {todoItems.map(({ todoItemId, text }) =>
          <TodoItem key={todoItemId} text={text} />)}
        <div className="TodoList-new-todo">
          <input type="checkbox" disabled />
          <TransparentTextInput
            value={this.state.newTodo}
            onChange={newTodo => this.setState({ newTodo })}
            placeholder="Add new To-do"
            onEnterKeyPressed={this.onNewTodoEnter.bind(this)} />
        </div>
      </div>
    )
  }
}

TodoList.propTypes = {
  todoListId: PropTypes.number,
  title: PropTypes.string,
  removeTodoList: PropTypes.func,
  editTodoListTitle: PropTypes.func,
  addTodoItem: PropTypes.func,
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
}

TodoList.defaultProps = {
  todoItems: []
}

export default TodoList
