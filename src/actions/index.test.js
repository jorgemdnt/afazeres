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
})

describe('Todo Item Actions', () => {
  const todoListId = 99

  describe('addTodoItem', () => {
    it('returns action that adds a todo item to a todo list', () => {
      const expectedAction = {
        type: 'ADD_TODO_ITEM',
        todoListId,
        todoItemId: 0,
        text: 'Do something'
      }
      expect(actions.addTodoItem(todoListId, 'Do something')).toEqual(expectedAction)
    })
  })

  describe('editTodoItemText', () => {
    it('returns action that adds a todo item to a todo list', () => {
      const expectedAction = {
        type: 'CHANGE_TODO_ITEM_TEXT',
        todoListId,
        todoItemId: 88,
        newText: 'Do another thing'
      }
      expect(actions.editTodoItemText(todoListId, 88, 'Do another thing')).toEqual(expectedAction)
    })
  })

  describe('toggleTodoItem', () => {
    it('returns expected action', () => {
      const expectedAction = {
        type: 'TOGGLE_TODO_ITEM',
        todoListId,
        todoItemId: 88
      }
      expect(actions.toggleTodoItem(todoListId, 88)).toEqual(expectedAction)
    })
  })

  describe('removeTodoItem', () => {
    it('returns expected action', () => {
      const expectedAction = {
        type: 'REMOVE_TODO_ITEM',
        todoListId,
        todoItemId: 88
      }
      expect(actions.removeTodoItem(todoListId, 88)).toEqual(expectedAction)
    })
  })

  describe('changeTodoItemDeadline', () => {
    it('returns expected action', () => {
      const expectedAction = {
        type: 'CHANGE_TODO_ITEM_DEADLINE',
        todoListId,
        todoItemId: 88,
        newDeadline: '2018-11-27'
      }
      expect(actions.changeTodoItemDeadline(todoListId, 88, '2018-11-27')).toEqual(expectedAction)
    })
  })
})
