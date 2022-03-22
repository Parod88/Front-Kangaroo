import React from 'react';
import './CategorieIconCard.scss';
import iconSample from '../../resources/svg/icon-sample.svg';
import { Link } from 'react-router-dom';

function CategorieIconCard(categorie) {
  const mockCategorie = {
    _id: 1,
    name: 'Cars',
    icon: '../../resources/svg/icon-sample.svg',
    totalOfProducts: 135
  };
  const { name, totalOfProducts } = mockCategorie;

  return (
    <Link to="/adverts/categories/1">
      <div id="categorie-icon-card">
        {/*TODO: change mock data and url icon */}
        <img alt={'icon categorie'} src={iconSample}></img>
        <h5>{name}</h5>
        <p>{totalOfProducts}+ Products</p>
      </div>
    </Link>
  );
}

export default CategorieIconCard;
