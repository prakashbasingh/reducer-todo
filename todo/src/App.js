import React, {useState, useReducer} from 'react';
import styled from 'styled-components'

import {reducer, initialState} from './reducers/reducer'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const MainContainer = styled.div`
  height: 100%;
  width: 70%;
  margin: 10rem;
  position: absolute;
  border: 4px solid Green;
  border-radius: 1rem;
  text-align: center;
  background: orange;
  box-shadow: inset 0 0 40px green;
`
const Header = styled.h1`
 font-family: "Times New Roman", Times, serif;
 color: purple;
 text-shadow: 2px 2px 0px white, 4px 4px 0px #888;
 font-size: 3rem;
 /* margin: 0 0 0 2rem */
`


const App = () => {
  const[state, dispatch] = useReducer(reducer, initialState)
  // console.log(state)
 
const addTask = (item) => {
      dispatch({type: 'ADD_TODO', payload: item})
}

const toggleCompleted = (id) => {
      dispatch({type: 'TOGGLE_COMPLETED', payload: id})
}

const clearCompleted = () => {
  dispatch({ type: 'CLEAR_COMPLETED'})
}


  return (
    <MainContainer>
      <div style= {{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
         <Header>"Todo List Creator"</Header> <img style ={{width: '15%', height: '15%', margin: '1rem', borderRadius: '1rem'}} src="https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676_960_720.png" alt="todo image"/>
      </div>   
        <TodoForm addTask={addTask} clearCompleted={clearCompleted} />
        <TodoList state={state}  toggleCompleted={toggleCompleted} />
    </MainContainer>
  );
}

export default App;
