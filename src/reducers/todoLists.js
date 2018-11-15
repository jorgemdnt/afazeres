const todoLists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_LIST':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title
        }
      ]
    case 'REMOVE_TODO_LIST':
      return state.filter(todoList => todoList.id !== action.payload.id)
    default:
      return state
  }
}

export default todoLists
