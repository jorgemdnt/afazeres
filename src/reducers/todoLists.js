const todoLists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_LIST':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title
        }
      ];
    default:
      return state;
  }
};

export default todoLists;
