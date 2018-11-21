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

export const editTodoItemText = (todoItemId, newText) => (
  {
    type: 'CHANGE_TODO_ITEM_TEXT',
    todoItemId,
    newText
  }
)

export const toggleTodoItem = todoItemId => (
  {
    type: 'TOGGLE_TODO_ITEM',
    todoItemId
  }
)

export const removeTodoItem = todoItemId => (
  {
    type: 'REMOVE_TODO_ITEM',
    todoItemId
  }
)
