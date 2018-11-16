let nextTodoListId = 0
export const addTodoList = title => (
  {
    type: 'ADD_TODO_LIST',
    id: nextTodoListId++,
    title
  }
)

export const removeTodoList = todoListId => (
  {
    type: 'REMOVE_TODO_LIST',
    id: todoListId
  }
)

export const editTodoListTitle = (id, newTitle) => (
  {
    type: 'CHANGE_TODO_LIST_TITLE',
    id,
    newTitle
  }
)
