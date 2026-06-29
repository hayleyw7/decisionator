import React, { Component } from 'react';

import './App.css';
import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form';
import DecisionButton from '../DecisionButton/DecisionButton';

const STORAGE_KEY = 'decisionator-ideas';

const loadIdeas = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      idea => idea && typeof idea.submittedIdea === 'string' && idea.submittedIdea.trim() !== ''
    );
  } catch {
    return [];
  }
};

const saveIdeas = (ideas) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ideas));
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: loadIdeas(),
      decision: null
    }
  }

  addIdea = (newIdea) => {
    this.setState(prevState => {
      const ideas = [...prevState.ideas, newIdea];
      saveIdeas(ideas);
      return { ideas };
    })
  }

  startOver = () => {
    saveIdeas([]);
    this.setState({ ideas: [], decision: null });
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

          {ideas.length > 0 && (
            <DecisionButton
              makeDecision={this.makeDecision}
              startOver={this.startOver}
            />
          )}
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
