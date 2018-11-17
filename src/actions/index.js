let nextTodoListId = 0
export const addTodoList = title => (
  {
    type: 'ADD_TODO_LIST',
    todoListId: nextTodoListId++,
    title
  }
)

export const removeTodoList = todoListId => (
  {
    type: 'REMOVE_TODO_LIST',
    todoListId: todoListId
  }
)

export const editTodoListTitle = (todoListId, newTitle) => (
  {
    type: 'CHANGE_TODO_LIST_TITLE',
    todoListId,
    newTitle
  }
)

let nextTodoItemId = 0
export const addTodoItem = (todoListId, text) => (
  {
    type: 'ADD_TODO_ITEM',
    todoListId,
    todoItemId: nextTodoItemId++,
    text
  }
)
