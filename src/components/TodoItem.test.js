import React from 'react'
import { mount, shallow } from 'enzyme'
import { TodoItem } from './TodoItem'

describe('TodoItem', () => {
  let onChangeTextMock
  let onToggleCheckboxMock
  let onClickRemoveMock

  beforeEach(() => {
    onChangeTextMock = jest.fn()
    onToggleCheckboxMock = jest.fn()
    onClickRemoveMock = jest.fn()
  })

  it('renders an input containing the text', () => {
    const component = shallow(
      <TodoItem
        text={'Do something'}
        onToggleCheckbox={onToggleCheckboxMock}
        onClickRemove={onClickRemoveMock}
        onChangeText={onChangeTextMock} />
    )

    expect(component.find('TransparentTextInput').props().value).toEqual('Do something')
  })

  it('Passes onChangeText to TransparentTextInput', () => {
    const component = mount(
      <TodoItem
        text={'Do something'}
        onToggleCheckbox={onToggleCheckboxMock}
        onClickRemove={onClickRemoveMock}
        onChangeText={onChangeTextMock} />
    )

    component.find('.TodoItem-text-input').simulate('change')

    expect(onChangeTextMock).toHaveBeenCalledWith('Do something')
  })

  it('Passes onToggleCheckbox to the checkbox input', () => {
    const component = mount(
      <TodoItem
        text={'Do something'}
        onToggleCheckbox={onToggleCheckboxMock}
        onClickRemove={onClickRemoveMock}
        onChangeText={onChangeTextMock} />
    )

    component.find('.TodoItem-done-input').simulate('change')

    expect(onToggleCheckboxMock).toHaveBeenCalled()
  })


  it('Passes onToggleCheckbox to the checkbox input', () => {
    const component = mount(
      <TodoItem
        text={'Do something'}
        onToggleCheckbox={onToggleCheckboxMock}
        onClickRemove={onClickRemoveMock}
        onChangeText={onChangeTextMock} />
    )

    component.find('.TodoList-delete-button').simulate('click')

    expect(onClickRemoveMock).toHaveBeenCalled()
  })
})
