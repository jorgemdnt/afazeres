import React from 'react'
import { mount } from 'enzyme'
import TodoItem from './TodoItem'

describe('TodoItem', () => {
  it('renders an input containing the text', () => {
    const component = mount(<TodoItem text={'Do something'} />)

    expect(component.find('.TransparentTextInput').instance().value).toEqual('Do something')
  })
})
