import React from 'react';
import './FiltersSection.scss';

function FiltersSection() {
  return (
    <section id="filters-section">
      <div className="container">
        Filtros:
        <button>Category</button>
        <button>Price</button>
        <button>Ratings</button>
        <button>Location</button>
        <div>Car</div>
        <div>Delete filters</div>
      </div>
    </section>
  );
}

export default FiltersSection;
