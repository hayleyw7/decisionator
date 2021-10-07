import React, { Component } from 'react';

import './App.css';
import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form';

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
console.log(this.state.ideas)

  }     

  render() {  
    return (
      <div className="App">
        <h1>Decisionator</h1>
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} />
      </div>
    );
  }
}

export default App;
