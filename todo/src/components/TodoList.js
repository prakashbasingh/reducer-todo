import React from "react";

import Todo from './Todo'


const TodoList = ({state, toggleCompleted}) => {
    return (
        <div>
            <h3>Todo List</h3>
            {state.tasks.map(task => {
                return (
                <Todo key = {task.id} 
                      taskName={task.taskName}
                      toggleCompleted={toggleCompleted}
                      completed={task.completed}
                      id={task.id}/>
                )
            })}

        </div>
    )


}
export default TodoList