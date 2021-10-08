import React, { Component } from 'react';

import './App.css';
import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form';
import DecisionButton from '../DecisionButton/DecisionButton';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    }
  }

  addIdea = (newIdea) => {
    this.setState({
      ideas: [...this.state.ideas, newIdea]
    })
  }

  makeDecision = () => {
    const getRandomIndex = (array) => {
      return Math.floor(Math.random() * array.length);
    }

    const getRandomIdea = () => {
      const randomIdea = getRandomIndex(this.state.ideas);
      return this.state.ideas[randomIdea];
    }  

    const decision = getRandomIdea()

    console.log(getRandomIdea())

    alert(decision.submittedIdea)
  }

  render() {  
    return (
      <div className="App">
        <h1>Decisionator</h1>
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} />
        {this.state.ideas.length > 0 && <DecisionButton makeDecision={this.makeDecision} />}        
      </div>
    );
  }
}

export default App;
