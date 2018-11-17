import React from 'react'
import { shallow } from 'enzyme'
import { TodoListsContainer } from './TodoListsContainer'
import TodoList from './TodoList'

describe('TodoListsContainer', () => {
  it('renders received todo list', () => {
    const todoLists = [{
      todoListId: 0,
      title: 'Foo'
    }]
    const appComponent = shallow(<TodoListsContainer todoLists={todoLists} />)

    expect(appComponent.find(TodoList).length).toEqual(1)
  })
})
