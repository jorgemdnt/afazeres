const todoLists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_LIST':
      return state.concat({ id: action.id, title: action.title })
    case 'REMOVE_TODO_LIST':
      return state.filter(todoList => todoList.id !== action.id)
    case 'CHANGE_TODO_LIST_TITLE':
      return state.map(todoList => {
        if (todoList.id === action.id)
          return { ...todoList, title: action.newTitle }
        return todoList
      })
    default:
      return state
  }
}

export default todoLists
