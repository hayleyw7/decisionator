import React, { Component } from 'react';

import './App.css';
import Ideas from '../Ideas/Ideas';
// import Form from '../Form/Form';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    }
  }

  addIdea = (newIdea) => {
      this.setState({
        ideas: [...this.state.urls, newIdea]
      })
  }     

  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Decisionator</h1>
        </header>
        <Ideas ideas={this.state.ideas}/>
      </div>
    );
  }
}

export default App;
