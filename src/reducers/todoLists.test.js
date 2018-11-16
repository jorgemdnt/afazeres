import reducer from './todoLists'

describe('todo list reducer', () => {
  it('returns empty list as the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  describe('ADD_TODO_LIST', () => {
    const newTodoListPayload = {
      id: 0,
      title: 'Foo'
    }

    it('should add a new todo list', () => {
      expect(
        reducer([], {
          type: 'ADD_TODO_LIST',
          ...newTodoListPayload
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
          ...newTodoListPayload
        })
      ).toEqual([preexistentTodoList, newTodoListPayload])
    })
  })

  describe('REMOVE_TODO_LIST', () => {
    it('should remove a preexistent todolist on state', () => {
      const preexistentTodoList = {
        id: 99,
        title: 'Bar'
      }

      expect(
        reducer([preexistentTodoList], {
          type: 'REMOVE_TODO_LIST',
          id: preexistentTodoList.id
        })
      ).toEqual([])
    })
  })

  describe('CHANGE_TODO_LIST_TITLE', () => {
    it('should change a preexistent todolist title', () => {
      const preexistentTodoList = {
        id: 99,
        title: 'Bar'
      }

      expect(
        reducer([preexistentTodoList], {
          type: 'CHANGE_TODO_LIST_TITLE',
          id: preexistentTodoList.id,
          newTitle: 'Foo'
        })
      ).toEqual([{ id: 99, title: 'Foo' }])
    })
  })
})
