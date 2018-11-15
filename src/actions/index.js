let nextTodoListId = 0
export const addTodoList = title => (
  {
    type: 'ADD_TODO_LIST',
    payload: {
      id: nextTodoListId++,
      title
    }
  }
)

export const removeTodoList = todoListId => (
  {
    type: 'REMOVE_TODO_LIST',
    payload: {
      id: todoListId
    }
  }
)
