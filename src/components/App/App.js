import React, { Component } from 'react';

import './App.css';
import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form';
import DecisionButton from '../DecisionButton/DecisionButton';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
      decision: null
    }
  }

  addIdea = (newIdea) => {
    this.setState({
      ideas: [...this.state.ideas, newIdea]
    })
  }

  makeDecision = () => {
    const randomIndex = Math.floor(Math.random() * this.state.ideas.length);
    const winner = this.state.ideas[randomIndex];

    this.setState({ decision: winner.submittedIdea });
  }

  dismissDecision = () => {
    this.setState({ decision: null });
  }

  render() {
    const { ideas, decision } = this.state;

    return (
      <div className="App">
        <main className="shell">
          <header className="hero">
            <p className="eyebrow">Tiny random decision maker</p>
            <h1>Decisionator</h1>
            <p className="lede">Add your options, then let the machine pick one.</p>
          </header>

          <section className="panel">
            <Form addIdea={this.addIdea} />
            <Ideas ideas={ideas} />
          </section>

          {ideas.length > 0 && <DecisionButton makeDecision={this.makeDecision} />}
        </main>

        {decision && (
          <div className="result-overlay" onClick={this.dismissDecision}>
            <div
              className="result-modal"
              role="dialog"
              aria-labelledby="result-title"
              aria-modal="true"
              onClick={e => e.stopPropagation()}
            >
              <p className="result-label" id="result-title">The decision is…</p>
              <p className="result-choice">{decision}</p>
              <button className="result-dismiss" onClick={this.dismissDecision}>
                Got it
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
