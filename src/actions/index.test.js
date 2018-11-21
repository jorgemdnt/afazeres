import * as actions from './index'

describe('Todo List Actions', () => {
  describe('addTodoList', () => {
    it('creates an action to add a new todo list', () => {
      const title = 'List Title'

      const expectedAction = {
        type: 'ADD_TODO_LIST',
        todoListId: 0,
        title
      }
      expect(actions.addTodoList(title)).toEqual(expectedAction)
    })
  })

  describe('removeTodoList', () => {
    it('removes todo list with todoListId', () => {
      const expectedAction = {
        type: 'REMOVE_TODO_LIST',
        todoListId: 99
      }
      expect(actions.removeTodoList(99)).toEqual(expectedAction)
    })
  })

  describe('editTodoListTitle', () => {
    it('returns action that changes title', () => {
      const expectedAction = {
        type: 'CHANGE_TODO_LIST_TITLE',
        todoListId: 99,
        newTitle: 'Foo'
      }
      expect(actions.editTodoListTitle(99, 'Foo')).toEqual(expectedAction)
    })
  })

  describe('addTodoItem', () => {
    it('returns action that adds a todo item to a todo list', () => {
      const expectedAction = {
        type: 'ADD_TODO_ITEM',
        todoListId: 99,
        todoItemId: 0,
        text: 'Do something'
      }
      expect(actions.addTodoItem(99, 'Do something')).toEqual(expectedAction)
    })
  })

  describe('editTodoItemText', () => {
    it('returns action that adds a todo item to a todo list', () => {
      const expectedAction = {
        type: 'CHANGE_TODO_ITEM_TEXT',
        todoItemId: 88,
        newText: 'Do another thing'
      }
      expect(actions.editTodoItemText(88, 'Do another thing')).toEqual(expectedAction)
    })
  })

  describe('toggleTodoItem', () => {
    it('returns expected action', () => {
      const expectedAction = {
        type: 'TOGGLE_TODO_ITEM',
        todoItemId: 88
      }
      expect(actions.toggleTodoItem(88)).toEqual(expectedAction)
    })
  })

  describe('removeTodoItem', () => {
    it('returns expected action', () => {
      const expectedAction = {
        type: 'REMOVE_TODO_ITEM',
        todoItemId: 88
      }
      expect(actions.removeTodoItem(88)).toEqual(expectedAction)
    })
  })
})
