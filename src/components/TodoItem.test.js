import React from 'react'
import { mount, shallow } from 'enzyme'
import { TodoItem } from './TodoItem'

describe('TodoItem', () => {
  let onChangeTextMock

  beforeEach(() => {
    onChangeTextMock = jest.fn()
  })

  it('renders an input containing the text', () => {
    const component = shallow(
      <TodoItem text={'Do something'} onChangeText={onChangeTextMock} />
    )

    expect(component.find('TransparentTextInput').props().value).toEqual('Do something')
  })

  it('Passes onChangeText to TransparentTextInput', () => {
    const component = mount(
      <TodoItem text={'Do something'} onChangeText={onChangeTextMock} />
    )

    component.find('.TodoItem-text-input').simulate('change')

    expect(onChangeTextMock).toHaveBeenCalledWith('Do something')
  })
})
