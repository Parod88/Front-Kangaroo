import React from 'react';
import './ReviewStart.scss';

function ReviewStart({ reviewRating, ...props }) {
  return (
    <div>
      <p className="review-rating">{reviewRating} *</p>
    </div>
  );
}

export default ReviewStart;
