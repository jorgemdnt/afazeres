import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import App from './App'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('App', () => {
  let store

  beforeEach(() => {
    const initialState = {
      todoLists: [],
      todoItems: {}
    }
    store = mockStore(initialState)
  })

  it('renders without breaking', () => {
    const appComponent = mount(
      <Provider store={store}>
        <App title={'Foo'} />
      </Provider>
    )

    expect(appComponent.find('TodoListsContainer').length).toEqual(1)
  })
})
