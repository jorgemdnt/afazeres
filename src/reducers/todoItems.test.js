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
      const preexistentTodoItem = {
        todoListId: 99,
        todoItemId: 88,
        text: 'Do something',
        done: false
      }

      expect(
        reducer([preexistentTodoItem], {
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
      const preexistentTodoItem = {
        todoListId: 99,
        todoItemId: 88,
        text: 'Do something',
        done: false
      }

      expect(
        reducer([preexistentTodoItem], {
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
      const preexistentTodoItem = {
        todoListId: 99,
        todoItemId: 88,
        text: 'Do something',
        done: true
      }

      expect(
        reducer([preexistentTodoItem], {
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
})
