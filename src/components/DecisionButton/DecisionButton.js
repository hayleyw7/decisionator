import React, { Component } from 'react';
import './DecisionButton.css';

class DecisionButton extends Component {
  constructor(props) {
    super();
    this.props = props;
    // this.state = {
    //   submittedIdea: '',
    // };
  }

  handleClick = e => {
    e.preventDefault();

    const newIdea = {
      ...this.state
    }

    this.props.addIdea(newIdea)
    this.clearInputs();
  }  

  render() {
    return (

      <button
        className='decision-button'
        onClick={e => this.handleClick(e)}
      >
        Make Decision
      </button>

    )
  }
}

export default DecisionButton;