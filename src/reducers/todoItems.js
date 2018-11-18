import { updateItemInList } from '../helpers/arrayHelpers'

const todoItems = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_ITEM':
      return state.concat({
        todoListId: action.todoListId,
        todoItemId: action.todoItemId,
        text: action.text
      })
    case 'CHANGE_TODO_ITEM_TEXT':
      return updateItemInList(
        state,
        todoItem => todoItem.todoItemId === action.todoItemId,
        todoItem => ({ ...todoItem, text: action.newText })
      )
    default:
      return state
  }
}

export default todoItems
