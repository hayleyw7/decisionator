import React from 'react';
import './Card.css';

const Card = ({ idea, index }) => {
  return (
    <div className="idea-card">
      <span className="idea-index">{index}</span>
      <p className='idea'>{idea}</p>
    </div>
  )
}

export default Card;
