import React from "react";




class TodoForm extends   React.Component {
    constructor() {
        super();
        this.state = {
            keyword: ''

        };
    }
    handleChanges = e => {
        this.setState ({
            keyword: e.target.value
        },//() => console.log(this.state.keyword)
        );
    };
    submitForm = e => {
        e.preventDefault()
        this.props.addTask(this.state.keyword);
        this.setState({
            keyword: ''
        });
    }



    render() {
        return (
            
            <form onSubmit = {this.submitForm}>
                <input  onChange = {this.handleChanges}
                        type = 'text'
                        name = 'task'
                        value = {this.state.keyword}
                        />
                <button > Add Task </button>
                <button onClick = {this.props.clearCompletedTasks}>Clear Completed Task(s)
            </button>

            </form>




        )
    }





}
export default TodoForm