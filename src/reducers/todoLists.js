const todoLists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_LIST':
      return state.concat({
        todoListId: action.todoListId,
        title: action.title,
        todoItems: []
      })
    case 'REMOVE_TODO_LIST':
      return state.filter(todoList => todoList.todoListId !== action.todoListId)
    case 'CHANGE_TODO_LIST_TITLE':
      return state.map(todoList => {
        if (todoList.todoListId === action.todoListId)
          return { ...todoList, title: action.newTitle }
        return todoList
      })
    case 'ADD_TODO_ITEM':
      const { todoListId, todoItemId, text } = action
      return state.map(todoList => {
        if (todoList.todoListId === todoListId)
          return {
            ...todoList,
            todoItems: todoList.todoItems.concat({ todoItemId, text })
          }
        return todoList
      })
    case 'CHANGE_TODO_ITEM_TEXT':
      return state.map(todoList => {
        if (todoList.todoListId === action.todoListId)
          return {
            ...todoList,
            todoItems: todoList
              .todoItems
              .map(todoItem =>
                todoItem.todoItemId === action.todoItemId ?
                  ({ ...todoItem, text: action.newText }) : todoItem)
          }
        return todoList
      })
    default:
      return state
  }
}

export default todoLists
