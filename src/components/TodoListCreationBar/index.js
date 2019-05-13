import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodoList } from '../../actions'

export class TodoListCreationBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newTodoListTitle: ''
    }
  }

  onChangeTitle(event) {
    this.setState({ newTodoListTitle: event.target.value })
  }

  onClickCreateTodoList(event) {
    event.preventDefault()
    this.props.addTodoList(this.state.newTodoListTitle)
    this.setState({ newTodoListTitle: '' })
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={this.onChangeTitle.bind(this)} value={this.state.newTodoListTitle}></input>
          <button onClick={this.onClickCreateTodoList.bind(this)}>
            Add Todo List
          </button>
        </form>
      </div>
    )
  }
}

TodoListCreationBar.propTypes = {
  addTodoList: PropTypes.func.isRequired
}

export default connect(null, { addTodoList })(TodoListCreationBar)
