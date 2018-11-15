import reducer from './todoLists'

describe('todo list reducer', () => {
  it('returns empty list as the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  describe('ADD_TODO_LIST handling', () => {
    const newTodoListPayload = {
      id: 0,
      title: 'Foo'
    }

    it('should add a new todo list', () => {
      expect(
        reducer([], {
          type: 'ADD_TODO_LIST',
          payload: newTodoListPayload
        })
      ).toEqual([newTodoListPayload])
    })

    it('should preserve previous todolists on state', () => {
      const preexistentTodoList = {
        id: 99,
        title: 'Bar'
      }

      expect(
        reducer([preexistentTodoList], {
          type: 'ADD_TODO_LIST',
          payload: newTodoListPayload
        })
      ).toEqual([preexistentTodoList, newTodoListPayload])
    })
  })

  describe('REMOVE_TODO_LIST handling', () => {
    const newTodoListPayload = {
      id: 0,
    }

    it('should add a new todo list', () => {
      expect(
        reducer([], {
          type: 'ADD_TODO_LIST',
          payload: newTodoListPayload
        })
      ).toEqual([newTodoListPayload])
    })

    it('should remove a preexistent todolist on state', () => {
      const preexistentTodoList = {
        id: 99,
        title: 'Bar'
      }

      expect(
        reducer([preexistentTodoList], {
          type: 'REMOVE_TODO_LIST',
          payload: { id: preexistentTodoList.id }
        })
      ).toEqual([])
    })
  })
})
