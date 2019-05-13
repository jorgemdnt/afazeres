import React from 'react'
import PropTypes from 'prop-types'
import styles from './TodoList.module.css'
import TodoItem from '../TodoItem'
import TodoListHeader from '../TodoListHeader'
import NewTodoItem from '../NewTodoItem'

export class TodoList extends React.PureComponent {
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
    const {
      addTodoItem,
      removeTodoList,
      editTodoListTitle,
      editTodoItemText,
      toggleTodoItem,
      removeTodoItem,
      todoListId,
      title,
      todoItems
    } = this.props

    return (
      <div className={styles.todoList}>
        <TodoListHeader
          title={title}
          removeTodoList={removeTodoList}
          editTodoListTitle={editTodoListTitle}
          todoListId={todoListId} />
        {todoItems.map(({ todoItemId, text, done }) =>
          <TodoItem
            key={todoItemId}
            todoListId={todoListId}
            todoItemId={todoItemId}
            done={done}
            text={text}
            removeTodoItem={removeTodoItem}
            toggleTodoItem={toggleTodoItem}
            editTodoItemText={editTodoItemText} />)}
        <NewTodoItem todoListId={todoListId} addTodoItem={addTodoItem} />
      </div>
    )
  }
}

TodoList.propTypes = {
  todoListId: PropTypes.number.isRequired,
  title: PropTypes.string,
  removeTodoList: PropTypes.func.isRequired,
  editTodoListTitle: PropTypes.func.isRequired,
  addTodoItem: PropTypes.func.isRequired,
  editTodoItemText: PropTypes.func.isRequired,
  toggleTodoItem: PropTypes.func.isRequired,
  removeTodoItem: PropTypes.func.isRequired,
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      todoItemId: PropTypes.number,
      done: PropTypes.bool
    })
  )
}

TodoList.defaultProps = {
  todoItems: []
}

export default TodoList
