import React from 'react'
import { mount } from 'enzyme'
import { TodoListCreationBar } from './TodoListCreationBar'

describe('TodoListCreationBar', () => {
  it('renders without errors', () => {
    const todoListCreationBar = mount(
      <TodoListCreationBar addTodoList={() => {}}/>
    )

    expect(todoListCreationBar).not.toBe(null)
  })
})
