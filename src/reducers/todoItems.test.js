import reducer from './todoItems'

describe('todo items reducer', () => {
  it('returns empty list as the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  describe('ADD_TODO_ITEM', () => {
    it('should add a todo item to a preexistent todolist', () => {
      expect(
        reducer([], {
          type: 'ADD_TODO_ITEM',
          todoListId: 99,
          todoItemId: 88,
          text: 'Do something',
        })
      ).toEqual([{
        todoListId: 99,
        todoItemId: 88,
        text: 'Do something',
        done: false
      }])
    })
  })

  describe('CHANGE_TODO_ITEM_TEXT', () => {
    it('should change a todo item', () => {
      const todoItem = {
        todoListId: 99,
        todoItemId: 88,
        text: 'Do something',
        done: false
      }

      expect(
        reducer([todoItem], {
          type: 'CHANGE_TODO_ITEM_TEXT',
          todoItemId: 88,
          newText: 'Do another thing'
        })
      ).toEqual([{
        todoListId: 99,
        todoItemId: 88,
        text: 'Do another thing',
        done: false
      }])
    })
  })

  describe('TOGGLE_TODO_ITEM', () => {
    it('should change if item is done to true when it is false', () => {
      const todoItem = {
        todoListId: 99,
        todoItemId: 88,
        text: 'Do something',
        done: false
      }

      expect(
        reducer([todoItem], {
          type: 'TOGGLE_TODO_ITEM',
          todoItemId: 88,
        })
      ).toEqual([{
        todoListId: 99,
        todoItemId: 88,
        text: 'Do something',
        done: true
      }])
    })

    it('should change if item is done to false when it is true', () => {
      const todoItem = {
        todoListId: 99,
        todoItemId: 88,
        text: 'Do something',
        done: true
      }

      expect(
        reducer([todoItem], {
          type: 'TOGGLE_TODO_ITEM',
          todoItemId: 88,
        })
      ).toEqual([{
        todoListId: 99,
        todoItemId: 88,
        text: 'Do something',
        done: false
      }])
    })
  })

  describe('REMOVE_TODO_ITEM', () => {
    it('should remove a todo item', () => {
      const todoItem = {
        todoListId: 99,
        todoItemId: 88,
        text: 'Do something',
        done: false
      }
      const anotherTodoItem = {
        todoListId: 99,
        todoItemId: 77,
        text: 'Do another thing',
        done: false
      }

      expect(
        reducer([todoItem, anotherTodoItem], {
          type: 'REMOVE_TODO_ITEM',
          todoItemId: 77,
        })
      ).toEqual([todoItem])
    })
  })
})
