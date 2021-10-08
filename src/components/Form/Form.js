import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      submittedIdea: '',
      // id: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.submittedIdea !== '') {

      const newIdea = {
        // id: id,
        ...this.state
      }

      this.props.addIdea(newIdea)
      this.clearInputs();
    }
  }  

  clearInputs = () => {
    this.setState({submittedIdea: ''});
  }

  render() {
    return (
      <form>

        <input
          type='text'
          placeholder='Option'
          name='submittedIdea'
          className='input'
          value={this.state.submittedIdea}
          onChange={e => this.handleChange(e)}
        />

        <button
          className='submit'
          onClick={e => this.handleSubmit(e)}
        >
          Add
        </button>

      </form>
    )
  }
}

export default Form;