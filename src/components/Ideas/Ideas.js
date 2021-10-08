import React from 'react';
import Card from '../Card/Card';
import './Ideas.css';

const Ideas = ({ ideas }) => {
  const ideaCards = ideas.map(idea => {
    return (
      <Card
        idea={idea.submittedIdea}
        key={idea.submittedIdea}  
        // id={id}
      />
    )
  });

  return (
    <section className='cards'>
      {
        ideaCards.length ? ideaCards :
        <p className='addOptions'>Add at least 1 option.</p>
      }
    </section>
  )
}

export default Ideas;