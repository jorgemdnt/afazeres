import React from 'react'
import { mount } from 'enzyme'
import { TodoListsContainer } from './TodoListsContainer'

describe('TodoListsContainer', () => {
  it('renders received todo list', () => {
    const todoLists = [{
      id: 0,
      title: 'Foo'
    }]
    const appComponent = mount(
      <TodoListsContainer todoLists={todoLists} />
    )

    expect(appComponent.find('TodoList').length).toEqual(1)
  })
})
