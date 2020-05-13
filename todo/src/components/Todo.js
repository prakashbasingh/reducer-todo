import React from "react";
import styled from 'styled-components'



const Todo = ({item, completed, id, toggleCompleted}) => {


    return (
        <div onClick = { () => toggleCompleted (id)}
            style = {{ textDecoration: completed?'line-through' : 'none',
                    color: completed? 'red': 'none' }} >
                <p > {item}</p>
            
        </div>
    )
}
export default Todo