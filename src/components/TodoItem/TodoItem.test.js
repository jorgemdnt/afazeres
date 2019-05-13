import React from 'react'
import { mount, shallow } from 'enzyme'
import { TodoItem } from './TodoItem'

describe('TodoItem', () => {
  const todoListId = 666
  const todoItemId = 888
  let editTodoItemTextMock
  let toggleTodoItemMock
  let removeTodoItemMock

  beforeEach(() => {
    editTodoItemTextMock = jest.fn()
    toggleTodoItemMock = jest.fn()
    removeTodoItemMock = jest.fn()
  })

  it('renders an input containing the text', () => {
    const component = shallow(
      <TodoItem
        todoListId={todoListId}
        todoItemId={todoItemId}
        text={'Do something'}
        toggleTodoItem={toggleTodoItemMock}
        removeTodoItem={removeTodoItemMock}
        editTodoItemText={editTodoItemTextMock} />
    )

    expect(component.find('TransparentTextInput').props().value).toEqual('Do something')
  })

  it('Passes editTodoItemText to TransparentTextInput', () => {
    const component = mount(
      <TodoItem
        todoListId={todoListId}
        todoItemId={todoItemId}
        text={'Do something'}
        toggleTodoItem={toggleTodoItemMock}
        removeTodoItem={removeTodoItemMock}
        editTodoItemText={editTodoItemTextMock} />
    )

    component.find('.TodoItem-text-input').simulate('change', { target: { value: 'Do something' } })

    expect(editTodoItemTextMock).toHaveBeenCalledWith(todoListId, todoItemId, 'Do something')
  })

  it('calls toggleTodoItem with the correct params', () => {
    const component = mount(
      <TodoItem
        todoListId={todoListId}
        todoItemId={todoItemId}
        text={'Do something'}
        toggleTodoItem={toggleTodoItemMock}
        removeTodoItem={removeTodoItemMock}
        editTodoItemText={editTodoItemTextMock} />
    )

    component.find('.TodoItem-done-input').simulate('change')

    expect(toggleTodoItemMock).toHaveBeenCalledWith(todoListId, todoItemId)
  })


  it('calls removeTodoItem with the correct params', () => {
    const component = mount(
      <TodoItem
        todoListId={todoListId}
        todoItemId={todoItemId}
        text={'Do something'}
        toggleTodoItem={toggleTodoItemMock}
        removeTodoItem={removeTodoItemMock}
        editTodoItemText={editTodoItemTextMock} />
    )

    component.find('.TodoList-delete-button').simulate('click')

    expect(removeTodoItemMock).toHaveBeenCalledWith(todoListId, todoItemId)
  })
})
