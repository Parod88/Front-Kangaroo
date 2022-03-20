import React from 'react';
import { Link } from 'react-router-dom';
import AdvertImage from '../AdvertImage/AdvertImage';
import './AdvertCardAccount.scss';
const { formatDistanceToNow } = require('date-fns');

const AdvertCardAccount = ({ advert, ...props }) => {
  const { _id, name, description, price, image, author, updatedAt } = advert;

  return (
    <article id="advert-card-account">
      <Link to={`/account/products/edit/${_id}`}>
        <div className="header">
          <AdvertImage alt={name} imageServer={image} />
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
        <Link to="" className="vendor-data">
          <img className="img-avatar" alt={author.name} src={author.imageAvatar} />
          {author.name}
        </Link>
        <p>${price}</p>
      </div>
    </article>
  );
};
export default AdvertCardAccount;
