import React from 'react';
import { Link } from 'react-router-dom';
import ReviewStartAndCount from '../ReviewStartAndCount/ReviewStartAndCount';
import './AdvertCard.scss';
const { formatDistanceToNow } = require('date-fns');

const AdvertCard = ({ advert, ...props }) => {
  const { _id, name, description, price, image, author, updatedAt } = advert;

  return (
    <article id="advert-card">
      <Link to={`/advert/${_id}`}>
        <div className="header">
          <img alt={name} src={image} />
        </div>
        <div className="body">
          <h4 className="title">{name}</h4>
          <p className="description">{description}</p>
          <div className="metadata">
            <p>
              <span>icon</span> Published:{' '}
              <time dateTime={updatedAt}> {formatDistanceToNow(new Date(updatedAt))}</time>
            </p>
          </div>
        </div>
      </Link>
      <div className="footer">
        <Link to={`/user/${author._id}`} className="vendor-data">
          <img className="img-avatar" alt={author.name} src={author.imageAvatar} />
          <div>
            {author.name}
            <ReviewStartAndCount reviewCount={45} reviewStart={3.5} />
          </div>
        </Link>
        <p className="price">${price}</p>
      </div>
    </article>
  );
};
export default AdvertCard;
