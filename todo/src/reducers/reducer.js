
export const initialState = {
  Keyword: '',
  task: [ 
    {
      taskName: 'Add More Todos',
      completed: false,
      id: Date.now(), }
  ]
 
}



export const reducer = (state, action) => {
 
  switch (action.type) {

    case 'ADD_TODO':
    return  [...state, action.payload,]

    case 'TOGGLE_COMPLETE':
      return state.map (todo => {
        if(action.payload.id === todo.id)
        return {
          ...todo,
          completed: !todo.completed,
        }
        return todo;
      })

    case 'CLEAR.COMPLETED':
      return state.filter(todo => !todo.completed);

    default:
      return state;
      
  }
}


