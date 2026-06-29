import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      submittedIdea: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.submittedIdea.trim() !== '') {
      const newIdea = {
        ...this.state,
        submittedIdea: this.state.submittedIdea.trim()
      }

      this.props.addIdea(newIdea)
      this.clearInputs();
    }
  }

  clearInputs = () => {
    this.setState({ submittedIdea: '' });
  }

  render() {
    const isEmpty = this.state.submittedIdea.trim() === '';

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Add an option…'
          name='submittedIdea'
          className='input'
          value={this.state.submittedIdea}
          onChange={this.handleChange}
        />

        <button
          type='submit'
          className='submit'
          disabled={isEmpty}
        >
          Add
        </button>
      </form>
    )
  }
}

export default Form;
