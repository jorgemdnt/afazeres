import reducer from './todoLists'

describe('todo list reducer', () => {
  it('returns empty list as the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  describe('ADD_TODO_LIST', () => {
    const expectedNewTodoList = {
      todoListId: 0,
      title: 'Foo',
    }

    it('should add a new todo list', () => {
      expect(
        reducer([], {
          type: 'ADD_TODO_LIST',
          todoListId: 0,
          title: 'Foo'
        })
      ).toEqual([expectedNewTodoList])
    })

    it('should preserve previous todolists on state', () => {
      const preexistentTodoList = {
        todoListId: 99,
        title: 'Bar',
      }

      expect(
        reducer([preexistentTodoList], {
          type: 'ADD_TODO_LIST',
          ...expectedNewTodoList
        })
      ).toEqual([preexistentTodoList, expectedNewTodoList])
    })
  })

  describe('REMOVE_TODO_LIST', () => {
    it('should remove a preexistent todolist on state', () => {
      const preexistentTodoList = {
        todoListId: 99,
        title: 'Bar',
      }

      expect(
        reducer([preexistentTodoList], {
          type: 'REMOVE_TODO_LIST',
          todoListId: preexistentTodoList.todoListId
        })
      ).toEqual([])
    })
  })

  describe('CHANGE_TODO_LIST_TITLE', () => {
    it('should change a preexistent todolist title', () => {
      const preexistentTodoList = {
        todoListId: 99,
        title: 'Bar',
      }

      expect(
        reducer([preexistentTodoList], {
          type: 'CHANGE_TODO_LIST_TITLE',
          todoListId: preexistentTodoList.todoListId,
          newTitle: 'Foo'
        })
      ).toEqual([{
        todoListId: 99,
        title: 'Foo',
      }])
    })
  })
})
