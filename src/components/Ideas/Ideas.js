import React from 'react';
import Card from '../Card/Card';
import './Ideas.css';

const Ideas = ({ ideas }) => {
  const ideaCards = ideas.map((idea, index) => {
    return (
      <Card
        idea={idea.submittedIdea}
        index={index + 1}
        key={`${idea.submittedIdea}-${index}`}
      />
    )
  });

  return (
    <section className='cards-section'>
      <div className='cards-header'>
        <h2 className='cards-title'>Your options</h2>
        {ideas.length > 0 && (
          <span className='cards-count'>{ideas.length}</span>
        )}
      </div>

      <div className='cards'>
        {
          ideaCards.length ? ideaCards :
          <p className='addOptions'>Add at least one option to get started.</p>
        }
      </div>
    </section>
  )
}

export default Ideas;
