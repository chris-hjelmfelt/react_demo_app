//--------------------------------------------------------------------
// React Todo App
// From a Traversy Media Tutorial
// https://www.youtube.com/watch?v=sBws8MSXN7A&list=PLgZ1wCgBs2--7A5gx3uD23FrLi41-gTgV&index=6&t=4564s
// Usage:
// > npm start
// To change whether todo items come from our own component or the rest api
// comment out either 1) or 2) in the 'App' class and the 'addTodo' and 'delTodo'
// functions (both in this script)
//--------------------------------------------------------------------


import React, { Component }  from 'react';
import Todos from '../Todos';
import AddTodo from '../AddTodo';
import axios from 'axios';

import '../../App.css';


class TodoList extends Component{  
  state = {
    todos: []
  }
  
  // bring in some todo list items from a handy test api and limit the number of items  
  componentDidMount() {   // this is called a 'React lifecycle method'
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data })) 
  }

  // Toggle Todo item completed
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {  // we are iterating through the list so find the one that matches
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo item
  delTodo = (id) => {   
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  // Add a new todo item
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }


  render() {    
    return ( 
      <React.Fragment>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </React.Fragment>
            
    );
  }
}

export default TodoList;
