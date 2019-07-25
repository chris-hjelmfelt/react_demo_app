import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ title: e.target.value });    // component level state

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });  // clear after submit
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="title" 
          placeholder="Add Todo ..." 
          style= {{ flex: '10', padding: '5px' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="submit"
          value="Submit"
          className="btn"
          style={{flex: 1}}           
        />
      </form>
    )
  }
}

// It's good practice to define your props and whether they are required
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo
