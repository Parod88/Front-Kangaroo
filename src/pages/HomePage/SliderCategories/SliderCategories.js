import React from 'react';
import CategorieIconCard from '../../../components/CategorieIconCard/CategorieIconCard';
import './SliderCategories.scss';

function SliderCategories() {
  return (
    <section id="slider-categories">
      <div className="container">
        <div className="header">
          <h3>Top Categories</h3>
          <h5>Lorem ipsum dolor sit amet, consectetur.</h5>
        </div>
        <div className="categories">
          <CategorieIconCard />
          <CategorieIconCard />
          <CategorieIconCard />
          <CategorieIconCard />
          <CategorieIconCard />
          <CategorieIconCard />
        </div>
      </div>
    </section>
  );
}

export default SliderCategories;
