import React from 'react';
import AddTodoComponent from './AddTodoComponent';
import TodoListComponent from './TodoListComponent';
import Grid from '@material-ui/core/Grid';

class TodoContentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.loadListTodo = this.loadListTodo.bind(this);
    }

    componentDidMount() {
        console.log(1);
        this.loadListTodo()
    }

    componentDidUpdate() {
        console.log(2);
    }

    loadListTodo(){ 
        fetch('http://localhost:3000/todos')
            .then((res) => {
                console.log(res,'res');
                return res.json();
            })
            .then((data) => {
                console.log(data, 'data');
                this.setState({
                    todos: data
                })
            })
        
    }

    addTodo(newTodo) {
        fetch('http://localhost:3000/todos', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newTodo)
        })
            .then(() => {
                this.loadListTodo();
            })

    }

    updateTodo(updatedTodo) {
        fetch(`http://localhost:3000/todos/${updatedTodo.id}`,{
            method:'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(updatedTodo)
        })
            .then(() => {
                this.loadListTodo();
            })
    }

    deleteTodo(id) {
        fetch(`http://localhost:3000/todos/${id}`,{
            method:'DELETE'
        })
            .then(() => {
                this.loadListTodo();
            });
    }

    render() {
        return (
            <div className="todo-content">
                <Grid container spacing={3}>
                    <AddTodoComponent addTodo={this.addTodo} />
                    <TodoListComponent todos={this.state.todos}
                                       updateTodo={this.updateTodo}
                                       deleteTodo={this.deleteTodo}
                    />
                </Grid>
            </div>
        );
    }
}

export default TodoContentComponent;