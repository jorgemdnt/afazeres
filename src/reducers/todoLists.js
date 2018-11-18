import { updateItemInList } from '../helpers/arrayHelpers'

const todoLists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_LIST':
      return state.concat({
        todoListId: action.todoListId,
        title: action.title,
      })
    case 'REMOVE_TODO_LIST':
      return state.filter(todoList => todoList.todoListId !== action.todoListId)
    case 'CHANGE_TODO_LIST_TITLE':
      return updateItemInList(
        state,
        todoList => todoList.todoListId === action.todoListId,
        todoList => ({ ...todoList, title: action.newTitle })
      )
    default:
      return state
  }
}

export default todoLists
