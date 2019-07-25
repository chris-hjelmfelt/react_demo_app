import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {  
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',                    
    }      
  }

  render() {
    const { id, title } = this.props.todo;  
    return (
      <div className="todo-items" style={this.getStyle()}>  
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
          { title }
          <button onClick={this.props.delTodo.bind(this,id)} className="btnStyle">X</button>
        </p>
      </div>
    )
  }
}

// It's good practice to define your props and whether they are required
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}


export default TodoItem
