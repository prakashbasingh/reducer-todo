import React, {useState} from "react";
import styled from 'styled-components'

const FormContainer = styled.form`
display: flex;
justify-content: center;
/* justify-content: space-around; */

margin: 2rem 2rem;
`
const Button = styled.button`
height: 35px;
border-radius: 1rem;
background: lime;
border: 1px solid green;
box-shadow: 0 0 10px 3px lime;
font-size: 1rem;
/* color: red; */
font-weight: bold;
margin: 0 0.5rem;
    &:hover{
        color:lime;
        background: black;
    }
`






const TodoForm = (props) => {
    const [item, setItem] = useState('');

    const {addTask, clearCompleted} = props

    const handleChange = (event) => {
        setItem(event.target.value)
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(item);
        setItem('');
    };
   
    return (
         <div> 
            <FormContainer onSubmit = {handleSubmit}>
                <input style = {{background: 'lightgray', color: 'green', border: '2px solid red',}}
                        onChange = {handleChange}
                        type = 'text'
                        name = 'item'
                        value = {item}
                        />
                <Button > Add Task </Button>
                <Button  onClick = {clearCompleted}>Clear Completed Task(s)
                </Button>

            </FormContainer>
        </div>  
    )


}
export default TodoForm