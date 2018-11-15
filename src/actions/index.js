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
