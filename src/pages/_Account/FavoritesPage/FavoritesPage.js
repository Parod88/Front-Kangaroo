import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdvertCardAccount from '../../../components/AdvertCardAccount/AdvertCardAccount';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import { loadPaginatedAdverts } from '../../../store/actions';
import { getAdverts } from '../../../store/selectors/selectors';
import FiltersSection from '../../AdvertsPage/FiltersSection/FiltersSection';
import NotResultsFound from '../../../components/NotResultsFound/NotResultsFound';

import './FavoritesPage.scss';

function FavoritesPage() {
  const dispatch = useDispatch();
  //TODO: load only adverts user

  const limitPagination = 300;

  useEffect(() => {
    dispatch(loadPaginatedAdverts());
  }, [dispatch]);

  const adverts = useSelector(getAdverts);
  return (
    <LayoutAccount title={'Favorites'} subtitle={'Lorem ipsum dolor sit amet, consectetur'}>
      <div id="favorites-page">
        <div className="account-container">
          <section>
            <FiltersSection />

            <ul className="tab-grid-cards">
              {adverts.length > 0 ? (
                adverts.slice(0, limitPagination).map((advert) => (
                  <li key={advert._id}>
                    <AdvertCardAccount advert={advert} />
                  </li>
                ))
              ) : (
                <div>
                  <NotResultsFound />
                </div>
              )}
            </ul>
          </section>
        </div>
      </div>
    </LayoutAccount>
  );
}

export default FavoritesPage;
