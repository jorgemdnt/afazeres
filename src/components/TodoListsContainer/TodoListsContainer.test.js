import React from 'react'
import { shallow } from 'enzyme'
import { TodoListsContainer } from '.'

describe('TodoListsContainer', () => {
  const noOp = () => {}

  it('renders received todo list', () => {
    const todoLists = [{
      todoListId: 0,
      title: 'Foo'
    }]
    const appComponent = shallow(
      <TodoListsContainer
        addTodoItem={noOp}
        removeTodoList={noOp}
        editTodoListTitle={noOp}
        editTodoItemText={noOp}
        toggleTodoItem={noOp}
        removeTodoItem={noOp}
        todoLists={todoLists}
        todoItems={{}} />
    )

    expect(appComponent.find('TodoList').length).toEqual(1)
  })
})
