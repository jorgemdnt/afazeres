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
          text: 'Do something'
        })
      ).toEqual([{
        todoListId: 99,
        todoItemId: 88,
        text: 'Do something'
      }])
    })
  })

  describe('CHANGE_TODO_ITEM_TEXT', () => {
    it('should change a todo item', () => {
      const preexistentTodoItem = {
        todoListId: 99,
        todoItemId: 88,
        text: 'Do something'
      }

      expect(
        reducer([preexistentTodoItem], {
          type: 'CHANGE_TODO_ITEM_TEXT',
          todoListId: 99,
          todoItemId: 88,
          newText: 'Do another thing'
        })
      ).toEqual([{
        todoListId: 99,
        todoItemId: 88,
        text: 'Do another thing'
      }])
    })
  })
})
