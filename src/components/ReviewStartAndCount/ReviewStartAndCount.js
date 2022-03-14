import React from 'react';
import './ReviewStartAndCount.scss';

function ReviewStartAndCount({ reviewCount, reviewStart, ...props }) {
  return (
    <div id="review-start-and-count">
      <p className="start-icon">+</p>
      <p className="review-values">
        {reviewStart}
        <span className="review-count">({reviewCount}) </span>
      </p>
    </div>
  );
}

export default ReviewStartAndCount;
