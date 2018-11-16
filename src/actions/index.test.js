import * as actions from './index'

describe('Todo List Actions', () => {
  describe('ADD_TODO_LIST', () => {
    it('creates an action to add a new todo list', () => {
      const title = 'List Title'

      const expectedAction = {
        type: 'ADD_TODO_LIST',
        id: 0,
        title
      }
      expect(actions.addTodoList(title)).toEqual(expectedAction)
    })
  })

  describe('REMOVE_TODO_LIST', () => {
    it('removes todo list with id', () => {
      const expectedAction = {
        type: 'REMOVE_TODO_LIST',
        id: 99
      }
      expect(actions.removeTodoList(99)).toEqual(expectedAction)
    })
  })

  describe('CHANGE_TODO_LIST_TITLE', () => {
    it('returns action that changes title', () => {
      const expectedAction = {
        type: 'CHANGE_TODO_LIST_TITLE',
        id: 99,
        newTitle: 'Foo'
      }
      expect(actions.editTodoListTitle(99, 'Foo')).toEqual(expectedAction)
    })
  })
})
