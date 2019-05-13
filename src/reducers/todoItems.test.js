import reducer from './todoItems'

describe('todo items reducer', () => {
  const todoItem = {
    todoItemId: 88,
    text: 'Do something',
    done: false,
    deadline: null
  }

  it('returns empty object as the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  describe('ADD_TODO_ITEM', () => {
    it('should add a todo item to a preexistent todolist', () => {
      const newState = reducer({}, {
        type: 'ADD_TODO_ITEM',
        todoListId: 99,
        todoItemId: 88,
        text: 'Do something',
      })

      expect(newState).toEqual({
        99: [{
          todoItemId: 88,
          text: 'Do something',
          done: false,
          deadline: null
        }]
      })
    })
  })

  describe('CHANGE_TODO_ITEM_TEXT', () => {
    const todoListId = 99
    const initialState = {
      [todoListId]: [{
        todoItemId: 88,
        text: 'Do something',
        done: false,
        deadline: null
      }]
    }

    it('should change a todo item', () => {
      const [updatedItem] = reducer(initialState, {
        type: 'CHANGE_TODO_ITEM_TEXT',
        todoListId,
        todoItemId: 88,
        newText: 'Do another thing'
      })[todoListId]

      expect(updatedItem.text).toBe('Do another thing')
    })
  })

  describe('TOGGLE_TODO_ITEM', () => {
    const todoListId = 99

    describe('when done is false', () => {
      const initialState = {
        [todoListId]: [{
          todoItemId: 88,
          text: 'Do something',
          done: false,
          deadline: null
        }]
      }

      it('changes to true', () => {
        const [updatedItem] = reducer(initialState, {
          type: 'TOGGLE_TODO_ITEM',
          todoListId,
          todoItemId: 88,
        })[todoListId]

        expect(updatedItem.done).toBe(true)
      })
    })

    describe('when done is true', () => {
      const initialState = {
        [todoListId]: [{
          todoListId: 99,
          todoItemId: 88,
          text: 'Do something',
          done: true
        }]
      }

      it('changes to false', () => {
        const [updatedItem] = reducer(initialState, {
          type: 'TOGGLE_TODO_ITEM',
          todoListId,
          todoItemId: 88,
        })[todoListId]

        expect(updatedItem.done).toBe(false)
      })
    })
  })

  describe('REMOVE_TODO_LIST', () => {
    const todoListId = 99
    const initialState = {
      [todoListId]: [{
        todoItemId: 88,
        text: 'Do something',
        done: false,
        deadline: null
      }],
      777: [{
        todoItemId: 66,
        text: 'Do another thing',
        done: false,
        deadline: null
      }]
    }

    it('should remove a todo item', () => {
      const newState = reducer(initialState, {
        type: 'REMOVE_TODO_LIST',
        todoListId,
      })

      expect(newState).toEqual({
        777: [{
          todoItemId: 66,
          text: 'Do another thing',
          done: false,
          deadline: null
        }]
      })
    })
  })

  describe('REMOVE_TODO_ITEM', () => {
    const todoListId = 99
    const initialState = {
      [todoListId]: [{
        todoItemId: 88,
        text: 'Do something',
        done: false,
        deadline: null
      }, {
        todoItemId: 77,
        text: 'Do another thing',
        done: false,
        deadline: null
      }]
    }

    it('should remove a todo item', () => {
      const listItems = reducer(initialState, {
        type: 'REMOVE_TODO_ITEM',
        todoListId,
        todoItemId: 77,
      })[99]

      expect(listItems).toEqual([todoItem])
    })
  })

  describe('CHANGE_TODO_ITEM_DEADLINE', () => {
    const todoListId = 99
    const initialState = {
      [todoListId]: [{
        todoItemId: 88,
        text: 'Do something',
        done: false,
        deadline: null
      }]
    }

    it('should remove a todo item', () => {
      const [todoItem] = reducer(initialState, {
        type: 'CHANGE_TODO_ITEM_DEADLINE',
        todoListId,
        todoItemId: 88,
        newDeadline: '2018-11-28'
      })[todoListId]

      expect(todoItem.deadline).toEqual('2018-11-28')
    })
  })
})
