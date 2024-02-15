import React, { useState } from 'react';

import './StarRating.css';

const StarRating = ({ initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
    onChange(clickedRating);
  };

  return (
    <div className='star-rating'>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
