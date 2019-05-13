import React from 'react'
import { shallow, mount } from 'enzyme'
import { TodoList } from '.'

describe('TodoList', () => {
  let removeTodoListMock
  let addTodoItemMock
  let removeTodoItemMock
  let toggleTodoItemMock
  let editTodoItemTextMock
  let editTodoListTitleMock

  beforeEach(() => {
    editTodoListTitleMock = jest.fn()
    removeTodoListMock = jest.fn()
    addTodoItemMock = jest.fn()
    removeTodoItemMock = jest.fn()
    toggleTodoItemMock = jest.fn()
    editTodoItemTextMock = jest.fn()
  })

  it('renders with a title', () => {
    const todoList = shallow(
      <TodoList
        title={'Foo'}
        todoListId={99}
        editTodoItemText={editTodoItemTextMock}
        toggleTodoItem={toggleTodoItemMock}
        removeTodoItem={removeTodoItemMock}
        addTodoItem={addTodoItemMock}
        editTodoListTitle={editTodoListTitleMock}
        removeTodoList={removeTodoListMock} />
    )

    expect(todoList.find('TodoListHeader').props().title).toEqual('Foo')
  })

  it('removes todo list when remove button is clicked', () => {
    const todoList = mount(
      <TodoList
        title={'Foo'}
        todoListId={99}
        editTodoItemText={editTodoItemTextMock}
        toggleTodoItem={toggleTodoItemMock}
        removeTodoItem={removeTodoItemMock}
        addTodoItem={addTodoItemMock}
        editTodoListTitle={editTodoListTitleMock}
        removeTodoList={removeTodoListMock} />
    )

    todoList.find('.removeListButton').simulate('click')

    expect(removeTodoListMock).toHaveBeenCalledWith(99)
  })

  it('shows todo items', () => {
    const todos = [{
      todoItemId: 1,
      text: 'Foo child 1'
    }, {
      todoItemId: 2,
      text: 'Foo child 2'
    }]
    const todoList = mount(
      <TodoList
        title={'Foo'}
        todoListId={99}
        editTodoItemText={editTodoItemTextMock}
        toggleTodoItem={toggleTodoItemMock}
        removeTodoItem={removeTodoItemMock}
        addTodoItem={addTodoItemMock}
        editTodoListTitle={editTodoListTitleMock}
        removeTodoList={removeTodoListMock}
        todoItems={todos} />
    )

    expect(todoList.find('TodoItem').length).toEqual(2)
  })
})
