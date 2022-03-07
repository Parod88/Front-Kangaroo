import React from 'react';

const Advert = ({ name, description, sale, price, image, gallery, tags, author, ...props }) => {
  return (
    <article className="adv-article">
      <div className="adv-body">
        <span className="adv-name">{author}</span>
        <br />
        <span className="adv-name">{name}</span>
        <br />
        <span className="adv-price">{price}€</span>
        <br />
        <span className="adv-tags">{tags.join(', ')}</span>
        <br />
        <span className="adv-sale">{sale ? 'On Sale' : 'On Demand'}</span>
        <br />

        <p>{description}</p>
      </div>
    </article>
  );
};

export default Advert;
