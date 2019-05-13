import omit from 'lodash/omit'

const todoItems = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_TODO_ITEM':
    return {
      ...state,
      [action.todoListId]: state[action.todoListId] || []
        .concat({
          todoItemId: action.todoItemId,
          text: action.text,
          done: false,
          deadline: null
        })
    }
  case 'CHANGE_TODO_ITEM_TEXT':
    return {
      ...state,
      [action.todoListId]: state[action.todoListId]
        .map(item =>
          item.todoItemId == action.todoItemId ?
            ({ ...item, text: action.newText }) : item
        )
    }
  case 'TOGGLE_TODO_ITEM':
    return {
      ...state,
      [action.todoListId]: state[action.todoListId]
        .map(item =>
          item.todoItemId == action.todoItemId ?
            ({ ...item, done: !item.done }) : item
        )
    }
  case 'REMOVE_TODO_ITEM':
    return {
      ...state,
      [action.todoListId]: state[action.todoListId]
        .filter(item => item.todoItemId !== action.todoItemId)
    }
  case 'REMOVE_TODO_LIST':
    return omit(state, action.todoListId)
  case 'CHANGE_TODO_ITEM_DEADLINE':
    return {
      ...state,
      [action.todoListId]: state[action.todoListId]
        .map(item =>
          item.todoItemId == action.todoItemId ?
            ({ ...item, deadline: action.newDeadline }) : item
        )
    }
  default:
    return state
  }
}

export default todoItems
