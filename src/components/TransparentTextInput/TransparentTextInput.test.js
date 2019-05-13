import React from 'react'
import { mount, shallow } from 'enzyme'
import TransparentTextInput from './TransparentTextInput'

describe('TransparentTextInput', () => {
  let onChangeMock

  beforeEach(() => {
    onChangeMock = jest.fn()
  })

  it('renders without errors', () => {
    const transparentTextInput = shallow(
      <TransparentTextInput onChange={onChangeMock} />
    )

    expect(transparentTextInput).not.toBe(null)
  })

  it('saves title on focus out', () => {
    const transparentTextInput = mount(
      <TransparentTextInput onChange={onChangeMock} value={'Foo'} />
    )

    transparentTextInput.find('input').simulate('change')

    expect(onChangeMock).toHaveBeenCalledWith('Foo')
  })
})
