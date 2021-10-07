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
    this.props.makeDecision();
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