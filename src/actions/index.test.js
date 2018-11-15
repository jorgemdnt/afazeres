import * as actions from './index'

describe('Todo List Actions', () => {
  it('creates an action to add a new todo list', () => {
    const title = 'List Title'

    const expectedAction = {
      type: 'ADD_TODO_LIST',
      payload: {
        id: 0,
        title
      }
    }
    expect(actions.addTodoList(title)).toEqual(expectedAction)
  })
})
