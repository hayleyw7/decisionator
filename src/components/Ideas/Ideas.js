import React from 'react';
import Card from '../Card/Card';

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
    <section>
      {
        ideaCards.length ? ideaCards :
        <p>You must add at least 2 options.</p>
      }
    </section>
  )
}

export default Ideas;