import React from "react";





export const initialState = {
  tasks: [ 
    {
      item: 'Need to Learn Reducers',
      completed: false,
      id: Date.now(), 
    }
  ]
 
}



export const reducer = (state, action) => {
 
  switch (action.type) {

    case 'ADD_TODO':
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
        return  {...state,
                  tasks: [...state.tasks, newTodo]
        };
    

    case 'TOGGLE_COMPLETED':
      return {
          ...state,
          tasks: state.tasks.map ((todoTask) => {
              if( todoTask.id=== action.payload){
                return {...todoTask,
                        completed: !todoTask.completed
                      }              

              } else{
                  return todoTask
                }
          })
      }


    case 'CLEAR_COMPLETED':
      return {...state,
              tasks: state.tasks.filter((todoTask) => !todoTask.completed),
            
            
            }

    default:
      return state;
      
  }
}


