import React from 'react';
import './ReviewCard.scss';

function ReviewCard({ review, ...props }) {
  const { _id, userName, comment, rating, updatedAt } = review;

  return (
    <article id="review-card">
      <div>Avatar</div>
      <div>
        <h4>
          Ali Tufón <span>{updatedAt}</span>
        </h4>
        <div>{rating}*</div>
        <h5>Nombre Producto</h5>
        <p>{comment}</p>
        <button>Respond</button>
      </div>
    </article>
  );
}

export default ReviewCard;
