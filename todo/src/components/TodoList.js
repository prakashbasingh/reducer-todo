import React from "react";
import styled from 'styled-components'

import Todo from './Todo'


const TodoListContainer = styled.div`
border: 2px solid red;
border-radius: 2rem;
min-height: 50%;
margin: 2rem;
box-shadow: inset 0 0 30px green;
color: darkblue;
font-weight: bold;
`
const SecondHeader = styled.h2`
text-decoration: underline;
font-family: "Times New Roman", Times, serif;
text-shadow: 0px 0px 4px magenta;
`


const TodoList = ({state, toggleCompleted}) => {
    return (
        <TodoListContainer>
             <SecondHeader>Todo List</SecondHeader>
            {state.tasks.map(todoTask => {
                return(
                <Todo  key = {todoTask.id} 
                      item={todoTask.item}
                      toggleCompleted={toggleCompleted}
                      completed={todoTask.completed}
                      id={todoTask.id}/>)
                
            })}

        </TodoListContainer>
    )


}
export default TodoList