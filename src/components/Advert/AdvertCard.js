import React from 'react';
import './advertCard.scss';

const AdvertCard = ({ name, description, price, image, author, updatedAt, ...props }) => {
  return (
    <a>
      <article id="article" className="adv-article">
        <div className="adv-image">
          <img className="adv-image-size" src={image} />
        </div>
        <div className="adv-body">
          <span className="adv-title">{name}</span>
          <p className="adv-text">{description}</p>
          <div className="adv-date-info">
            <span className="adv-date-icon"></span>
            <span className="adv-date-text">{updatedAt}</span>
          </div>
          <div className="adv-user-footer">
            <div className="adv-user-img"></div>
            <span className="adv-user-name">{author}</span>
            <span className="adv-price">{price}</span>
          </div>
        </div>
      </article>
    </a>
  );
};
export default AdvertCard;

// return (
//   <article className="adv-article">
//     <div className="adv-body">
//       <span className="adv-name">{author}</span>
//       <br />
//       <span className="adv-name">{name}</span>
//       <br />
//       <span className="adv-price">{price}€</span>
//       <br />
//       {/* <span className="adv-tags">{tags.join(', ')}</span> */}
//       <br />
//       <span className="adv-sale">{sale ? 'On Sale' : 'On Demand'}</span>
//       <br />

//       <p>{description}</p>
//     </div>
//   </article>
// );
