import React from 'react';
import './Card.css';

const Card = ({ idea }) => {

  return (
    <div className="idea-card">
      <p className='idea'>{idea}</p>
    </div>
  )
}

export default Card;