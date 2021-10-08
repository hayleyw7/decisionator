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

  startOver = e => {
    window.location.reload(false);
  }

  render() {
    return (
      <div className='button-container'>

        <div className='footer'>

        <button
          className='decision-button'
          onClick={e => this.handleClick(e)}
        >
          Make Decision
        </button>
                
          <button
            className='start-over-button'
            onClick={e => this.startOver(e)}
          >
            Start Over
          </button>  
        </div>      

      </div>
    )
  }
}

export default DecisionButton;