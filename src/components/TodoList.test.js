import React from 'react'
import { shallow } from 'enzyme'
import { TodoList } from './TodoList'

test('TodoList renders with title', () => {
  const todoList = shallow(<TodoList title={'Foo'} />)

  expect(todoList.text()).toEqual('Foo')
})
