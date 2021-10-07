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

    // document.querySelector('decision-button').classList.add("hidden");    
    
    // console.log(this.state)

    // const id = Date.now() 

    const newIdea = {
      // id: id,
      ...this.state
    }

    this.props.addIdea(newIdea)
    this.clearInputs();
  }  

  clearInputs = () => {
    this.setState({submittedIdea: ''});
  }

  render() {
    return (
      <form>

        <input
          type='text'
          placeholder='Enter ideas here, one at a time.'
          name='submittedIdea'
          value={this.state.submittedIdea}
          onChange={e => this.handleChange(e)}
        />

        <button
          className='submit'
          onClick={e => this.handleSubmit(e)}
        >
          Add Idea
        </button>

      </form>
    )
  }
}

export default Form;