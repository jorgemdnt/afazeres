import React from 'react'
import { shallow, mount } from 'enzyme'
import { TodoList } from './TodoList'

describe('TodoList', () => {
  let removeTodoListMock

  beforeEach(() => {
    removeTodoListMock = jest.fn()
  })

  it('renders with a title', () => {
    const todoList = shallow(<TodoList title={'Foo'} />)

    expect(todoList.find('TransparentTextInput').at(0).props().value).toEqual('Foo')
  })

  it('removes todo list when remove button is clicked', () => {
    const todoList = mount(<TodoList title={'Foo'} todoListId={99} removeTodoList={removeTodoListMock} />)

    todoList.find('.TodoList-delete-button').simulate('click')

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
        removeTodoList={removeTodoListMock}
        todoItems={todos} />
    )

    expect(todoList.find('TodoItem').length).toEqual(2)
  })
})
