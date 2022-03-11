import React from 'react';
import { Link } from 'react-router-dom';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import './ProductsPage.scss';

function ProductsPage() {
  return (
    <LayoutAccount>
      {/*TODO: add id advert edit*/}
      <Link to="/advert/4/edit">
        <button>Edit advert</button>
      </Link>

      <Link to="/advert/create">
        <button>Create new adver</button>
      </Link>
    </LayoutAccount>
  );
}

export default ProductsPage;
