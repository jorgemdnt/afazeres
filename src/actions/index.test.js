import * as actions from './index'

describe('Todo List Actions', () => {
  describe('ADD_TODO_LIST', () => {
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

  describe('REMOVE_TODO_LIST', () => {
    it('removes todo list with id', () => {
      const expectedAction = {
        type: 'REMOVE_TODO_LIST',
        payload: {
          id: 99,
        }
      }
      expect(actions.removeTodoList(99)).toEqual(expectedAction)
    })
  })
})
