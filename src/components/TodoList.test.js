import React from 'react'
import { shallow, mount } from 'enzyme'
import { TodoList } from './TodoList'

describe('TodoList', () => {
  it('renders with a title', () => {
    const todoList = shallow(<TodoList title={'Foo'} />)

    expect(todoList.find('strong').text()).toEqual('Foo')
  })

  it('removes todo list when remove button is clicked', () => {
    const removeTodoListMock = jest.fn()
    const todoList = mount(<TodoList title={'Foo'} id={99} removeTodoList={removeTodoListMock} />)

    todoList.find('button').simulate('click')

    expect(removeTodoListMock).toHaveBeenCalledWith(99)
  })
})
